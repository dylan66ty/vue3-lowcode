import { defineComponent } from 'vue'
import type { CSSProperties } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ['justifyContent', 'padding', 'margin'],
  setup(props, { slots }) {
    return () => {
      const style: CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: props.justifyContent,
        padding: props.padding,
        margin: props.margin
      }
      return <div style={style}>{slots.default?.()}</div>
    }
  }
})
