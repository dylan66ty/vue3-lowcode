import type { RegisterConfig } from '../../../types'
import StyleWrapper from '../../style-wrapper'
import { genStyleProp, genSizeProp } from '../../common'
import { createModel } from '../../createModel'
import { createColorProp, createInputProp, createSwitchProp, createTableColumnsProp, createTableDataProp } from '../../createProp'
import RenderDraggableSlot from '../../../components/render-draggable-slot.vue'
import RenderPreviewSlot from '../../../components/render-preview-slot'
import { createSlotItem } from '../../../utils'
import TableIcon from '../../../icons/table.vue'
import PreviewWrapper from '../../preview-wrapper'
import { getProp } from '@/utils/helper'

export interface TableColumn {
  label: string
  prop: string
  width?: string | number
  align?: 'center' | 'left' | 'right'
  fixed?: 'left' | 'right'
  slot?: boolean
}

export const getBaseColumn = () => {
  return {
    label: '标题',
    prop: '',
    width: '',
    align: 'left',
    fixed: '',
    slot: false
  }
}
export const completionColumn = (column: TableColumn) => {
  return Object.assign({}, getBaseColumn(), column)
}

export const registerTable = (registerConfig: RegisterConfig) => {
  registerConfig.register({
    label: '表格',
    key: 'base:table',
    draggable: true,
    props: {
      columns: createTableColumnsProp('列配置', [
        { label: '标题1', prop: 'title1', slot: true },
        { label: '标题2', prop: 'title2', slot: true }
      ]),
      data: createTableDataProp('表格数据', [{}]),
      headerBackgroundColor: createColorProp('表头背景颜色', '#f0f0f0'),
      headerColor: createColorProp('表头文本颜色', ''),
      height: createInputProp('表格高度', 'auto'),
      border: createSwitchProp('是否带有纵向边框', false),
      stripe: createSwitchProp('是否为斑马纹', false),
      ...genSizeProp('表格的尺寸'),
      showPagination: createSwitchProp('显示分页', true),
      paginationBackground: createSwitchProp('分页按钮添加背景色', true)
    },
    model: {
      tableData: createModel('表格绑定字段', 'tableData', 'data'),
      total: createModel('分页器总数', 'total', 'total'),
      currentPage: createModel('分页器当前页', 'currentPage', 'currentPage'),
      pageSize: createModel('分页器页面大小', 'pageSize', 'pageSize')
    },
    style: {
      ...genStyleProp()
    },
    slots: {},
    events: [],
    preview: (component) => {
      return (
        <PreviewWrapper label={component.label}>
          <TableIcon></TableIcon>
        </PreviewWrapper>
      )
    },
    render: ({ style, props, model, slots, custom }) => {
      const { editable, formData } = custom
      const tableData = editable ? props.data : model.tableData.data || []
      const tableProps = {
        headerCellStyle: {
          backgroundColor: props.headerBackgroundColor,
          color: props.headerColor
        },
        height: props.height,
        border: props.border,
        stripe: props.stripe,
        size: props.size,
        data: tableData
      }

      const columns: TableColumn[] = props.columns || []

      const paginationProps = {
        background: props.paginationBackground,
        layout: 'prev, pager, next',
        ...model.currentPage,
        ...model.pageSize,
        ...model.total
      }

      if (editable) {
        paginationProps.currentPage = 1
        paginationProps.total = 10
      }

      const getCellValue = (scoped: any, key: any) => {
        const row = scoped.row
        return getProp(row, key)
      }
      const renderContent = (column: TableColumn, scoped: any) => {
        if (column.slot) {
          const slotKey = column.prop
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
        return <span>{getCellValue(scoped, column.prop)}</span>
      }

      return (
        <StyleWrapper {...style}>
          <div style={{ width: '100%' }}>
            <el-table {...tableProps}>
              {columns.map((column) => (
                <el-table-column
                  {...column}
                  v-slots={{
                    default: (scoped: any) => renderContent(column, scoped)
                  }}
                />
              ))}
            </el-table>
            {props.showPagination && (
              <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'flex-end' }}>
                <el-pagination {...paginationProps} />
              </div>
            )}
          </div>
        </StyleWrapper>
      )
    }
  })
}
