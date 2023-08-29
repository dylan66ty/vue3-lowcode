import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { BlockData, BlockSlotData } from '../types'
import BlockItem from './block-item'

export default defineComponent({
  props: {
    slotData: {
      type: Object as PropType<BlockSlotData>,
      default: () => ({})
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    scoped: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    return () => {
      return (
        <>
          {props.slotData.children.map((blockData: BlockData) => (
            <BlockItem
              blockData={blockData}
              formData={props.formData}
              editable={false}
              scoped={props.scoped}
            />
          ))}
        </>
      )
    }
  }
})
