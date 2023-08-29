import type { RegisterConfig } from '../../types'
import { createInputProp, createSelectProp } from '../createProp'
import StyleWrapper from '../style-wrapper'
import { genStyleProp } from '../common'
import RenderPreviewSlot from '../../components/render-preview-slot'
import RenderDraggableSlot from '../../components/render-draggable-slot.vue'
import { createSlotItem } from '../../utils'
import PreviewWrapper from '../preview-wrapper'
import RowIcon from '../../icons/row.vue'

export const registerLayout = (registerConfig: RegisterConfig) => {
  registerConfig.register({
    label: '布局容器',
    key: 'container:layout',
    draggable: true,
    props: {
      gutter: createInputProp('列间隔', 0),
      span: createSelectProp('列比例', '12:12', [
        { label: '24', value: '24' },
        { label: '12:12', value: '12:12' },
        { label: '6:18', value: '6:18' },
        { label: '18:6', value: '18:6' },
        { label: '8:8:8', value: '8:8:8' },
        { label: '6:12:6', value: '6:12:6' },
        { label: '8:8:8', value: '8:8:8' }
      ])
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
          <RowIcon></RowIcon>
        </PreviewWrapper>
      )
    },
    render: ({ slots, props, style, custom }) => {
      const { editable, formData, scoped } = custom
      const span = props.span.split(':').map((n: string) => Number(n))

      const renderContent = (spanIndex: number) => {
        const slotKey = `slot${spanIndex}`

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
          <el-row style={{ width: '100%' }} gutter={Number(props.gutter)}>
            {span.map((span: number, spanIndex: number) => (
              <el-col span={span}>{renderContent(spanIndex)}</el-col>
            ))}
          </el-row>
        </StyleWrapper>
      )
    }
  })
}
