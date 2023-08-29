import type { RegisterConfig } from '../../types'
import {
  createInputProp,
  createSelectProp,
  createSwitchProp,
  createColorProp,
  createRadioProp
} from '../createProp'
import StyleWrapper from '../style-wrapper'
import { genStyleProp } from '../common'
import { extractComponentProps, events } from '../../utils'
import ClickIcon from '../../icons/click.vue'
import PreviewWrapper from '../preview-wrapper'

export const registerButton = (registerConfig: RegisterConfig) => {
  registerConfig.register({
    label: '按钮',
    key: 'base:button',
    draggable: true,
    props: {
      text: createInputProp('按钮文本', '按钮'),
      size: createSelectProp('按钮尺寸', 'default', [
        { label: '默认', value: 'default' },
        { label: '大型', value: 'large' },
        { label: '小型', value: 'small' }
      ]),
      type: createSelectProp('按钮类型', 'primary', [
        { label: '默认', value: 'primary' },
        { label: '成功', value: 'success' },
        { label: '警告', value: 'warning' },
        { label: '危险', value: 'danger' }
      ]),
      link: createSwitchProp('link样式', false),
      plain: createSwitchProp('朴素按钮', false),
      round: createSwitchProp('圆角按钮', false),
      circle: createSwitchProp('圆形按钮', false),
      color: createColorProp('按钮颜色', '')
    },
    style: {
      justifyContent: createRadioProp('对齐方式', 'flex-start', [
        { label: '左对齐', value: 'flex-start' },
        { label: '居中', value: 'center' },
        { label: '右对齐', value: 'flex-end' }
      ]),
      ...genStyleProp()
    },
    model: {},
    slots: {},
    events: [{ label: '点击按钮触发', value: 'click' }],
    preview: (component) => {
      return (
        <PreviewWrapper label={component.label}>
          <ClickIcon></ClickIcon>
        </PreviewWrapper>
      )
    },
    render: ({ props, style, custom }) => {
      const { scoped, actions } = custom
      // 提取只用于组件的属性
      const _props = extractComponentProps(props, ['text'])
      const onClick = () => {
        events.emit('click', {
          cid: 'button',
          data: {
            scoped,
            actions
          }
        })
      }
      return (
        <StyleWrapper {...style}>
          <el-button {..._props} onClick={onClick}>
            {props.text}
          </el-button>
        </StyleWrapper>
      )
    }
  })
}
