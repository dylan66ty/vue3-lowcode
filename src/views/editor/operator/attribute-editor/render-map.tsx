import type { VNode } from 'vue'
import TableColumns from './component/table-columns.vue'
import TableData from './component/table-data.vue'
import StyleLayout from './component/style-layout.vue'

export const renderPropsMap: Record<string, (val: any) => VNode> = {
  input: ({ propName, model, update }) => <el-input v-model={model.props[propName]} onChange={update} />,
  select: ({ propName, model, update, config }) => (
    <el-select v-model={model.props[propName]} onChange={update}>
      {config.options.map((option: any) => (
        <el-option label={option.label} value={option.value} />
      ))}
    </el-select>
  ),
  switch: ({ propName, model, update }) => <el-switch v-model={model.props[propName]} onChange={update} />,
  color: ({ propName, model, update }) => <el-color-picker v-model={model.props[propName]} onChange={update} />,
  radio: ({ propName, model, update, config }) => (
    <el-radio-group v-model={model.props[propName]} size="small" onChange={update}>
      {config.options.map((option: any) => (
        <el-radio-button label={option.value}>{option.label}</el-radio-button>
      ))}
    </el-radio-group>
  ),
  inputNumber: ({ propName, model, update }) => <el-input-number v-model={model.props[propName]} controls-position="right" onChange={update} />,
  tableColumns: ({ propName, model, update }) => <TableColumns v-model:columns={model.props[propName]} onChange={update} />,
  tableData: ({ propName, model, update }) => <TableData v-model={model.props[propName]} onChange={update} />
}

export const renderStyleMap: Record<string, (val: any) => VNode> = {
  radio: ({ propName, config, model, update }) => (
    <el-radio-group v-model={model.style[propName]} onChange={update}>
      {config.options.map((option: any) => (
        <el-radio-button label={option.value}>{option.label}</el-radio-button>
      ))}
    </el-radio-group>
  ),
  layout: ({ model, update }) => <StyleLayout v-model:padding={model.style['padding']} v-model:margin={model.style['margin']} onChange={update} />
}
