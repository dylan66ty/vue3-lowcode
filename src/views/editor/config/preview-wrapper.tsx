import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <div class="flex items-center gap-x-1">
          <el-icon size={16}>{slots.default?.()}</el-icon>
          <span class="label">{props.label}</span>
        </div>
      )
    }
  }
})
