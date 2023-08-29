import {
  createStyleLayoutProp,
  createSelectProp,
  createInputProp,
  createSwitchProp
} from './createProp'

export const genStyleProp = () => {
  return {
    layout: createStyleLayoutProp('组件边距', {
      padding: '8px 8px 8px 8px',
      margin: '0px 0px 0px 0px'
    })
  }
}

export const genSizeProp = (label = '尺寸大小') => {
  return {
    size: createSelectProp(label, 'default', [
      { label: '默认', value: 'default' },
      { label: '大型', value: 'large' },
      { label: '小型', value: 'small' }
    ])
  }
}

export const getInputProp = () => {
  return {
    placeholder: createInputProp('占位提示', '请输入'),
    clearable: createSwitchProp('是否可以清空', false),
    disabled: createSwitchProp('是否禁用', false),
    ...genSizeProp('输入框尺寸')
  }
}
