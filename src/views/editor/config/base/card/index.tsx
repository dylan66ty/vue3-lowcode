import { Postcard } from '@element-plus/icons-vue'
import type { RegisterConfig } from '../../../types'
import StyleWrapper from '../../style-wrapper'
import { genStyleProp } from '../../common'
import RenderDraggableSlot from '../../../components/render-draggable-slot.vue'
import RenderPreviewSlot from '../../../components/render-preview-slot'
import { createSlotItem } from '../../../utils'
import PreviewWrapper from '../../preview-wrapper'
import { createInputProp } from '../../createProp'

export const registerCard = (registerConfig: RegisterConfig) => {
  registerConfig.register({
    label: '卡片',
    key: 'base:card',
    draggable: true,
    props: {
      header: createInputProp('标题', '')
    },
    model: {},
    style: {
      ...genStyleProp()
    },
    slots: {},
    events: [],
    preview: (component) => {
      return (
        <PreviewWrapper label={component.label}>
          <Postcard />
        </PreviewWrapper>
      )
    },
    render: ({ style, props, model, slots, custom }) => {
      const { editable, formData, scoped } = custom
      console.log(props, model, slots, editable)

      const renderContent = () => {
        const slotKey = `default`

        if (!editable) {
          return <RenderPreviewSlot slotData={slots[slotKey]} formData={formData} scoped={scoped} />
        }

        if (slots[slotKey]) {
          return <RenderDraggableSlot slotData={slots[slotKey]} />
        }
        if (!slots[slotKey]) {
          slots[slotKey] = createSlotItem()
        }
        return <RenderDraggableSlot slotData={slots[slotKey]} />
      }

      return (
        <StyleWrapper {...style}>
          <div class="w-full">
            <el-card {...props}>{renderContent()}</el-card>
          </div>
        </StyleWrapper>
      )
    }
  })
}
