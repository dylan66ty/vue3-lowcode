import { defineComponent } from 'vue'
import type { PropType, VNode } from 'vue'
import type { ComponentData, BlockData } from '../../types'

import { renderPropsMap, renderStyleMap } from './render-map'

export default defineComponent({
  props: {
    component: {
      type: Object as PropType<ComponentData>,
      default: () => ({})
    },
    apply: {
      type: Function,
      default: () => {}
    },
    editorBlock: {
      type: Object as PropType<BlockData>,
      default: () => ({})
    }
  },
  setup(props) {
    const update = () => {
      props.apply(props.editorBlock)
    }

    return () => {
      const content: VNode[] = []
      // props
      if (props.component && props.component.props) {
        Object.entries(props.component.props).map(([propName, config]) => {
          content.push(
            <el-form-item label={config.label}>{renderPropsMap[config.type]({ propName, config, model: props.editorBlock, update })}</el-form-item>
          )
        })
      }
      // model
      if (props.component && props.component.model) {
        Object.entries(props.component.model).map(([modelName, config]) => {
          content.push(
            <el-form-item label={config.label}>
              <el-input v-model={props.editorBlock.model[modelName]} onInput={update} />
            </el-form-item>
          )
        })
      }

      // style
      if (props.component && props.component.style) {
        Object.entries(props.component.style).map(([propName, config]) => {
          content.push(
            <el-form-item label={config.label}>{renderStyleMap[config.type]({ propName, config, model: props.editorBlock, update })}</el-form-item>
          )
        })
      }

      return (
        <el-form labelPosition="left" size="small">
          <el-form-item label="组件ID">{props.editorBlock._id}</el-form-item>
          {content}
        </el-form>
      )
    }
  }
})
