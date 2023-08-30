import type { PropType } from 'vue'
import { defineComponent, toRefs } from 'vue'
import type { Container } from '../../types'

export default defineComponent({
  props: {
    apply: {
      type: Function,
      default: () => {}
    },
    editorContainer: {
      type: Object as PropType<Container>,
      required: true
    }
  },
  setup(props) {
    const { editorContainer } = toRefs(props)

    const update = () => {
      props.apply(editorContainer.value)
    }
    return () => {
      return (
        <el-form class="p-5 h-full" size="small">
          <el-form-item label="页面背景颜色">
            <el-color-picker v-model={editorContainer.value.style!.backgroundColor} onChange={update} />
          </el-form-item>
        </el-form>
      )
    }
  }
})
