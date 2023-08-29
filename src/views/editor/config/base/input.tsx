import type { RegisterConfig } from '../../types'
import StyleWrapper from '../style-wrapper'
import { genStyleProp, getInputProp } from '../common'
import { createModel } from '../createModel'
import InputIcon from '../../icons/input.vue'
import PreviewWrapper from '../preview-wrapper'

export const registerInput = (registerConfig: RegisterConfig) => {
  registerConfig.register({
    label: '单行输入',
    key: 'base:input',
    draggable: true,
    props: {
      ...getInputProp()
    },
    model: {
      default: createModel('绑定字段', '')
    },
    style: {
      ...genStyleProp()
    },
    slots: {},
    preview: (component) => {
      return (
        <PreviewWrapper label={component.label}>
          <InputIcon></InputIcon>
        </PreviewWrapper>
      )
    },
    render: ({ props, model, style }) => {
      return (
        <StyleWrapper {...style}>
          <el-input {...model.default} {...props}></el-input>
        </StyleWrapper>
      )
    }
  })
}
