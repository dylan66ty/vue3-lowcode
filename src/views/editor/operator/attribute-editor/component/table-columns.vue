<script lang="tsx">
  import { defineComponent, ref } from 'vue'
  import { EditPen, Delete, Plus, Rank } from '@element-plus/icons-vue'
  import { ElInput, ElRadioGroup, ElRadioButton, ElSwitch } from 'element-plus'
  import deepcopy from 'deepcopy'
  import Draggable from 'vuedraggable'
  import { uid } from 'uid'
  import { $operatorExtend } from '../../../components/operator-extend-popover'
  import { getBaseColumn } from '../../../config/base/table'
  import FieldItem from './field-item.vue'

  export default defineComponent({
    components: {
      EditPen,
      Delete,
      Plus,
      Rank,
      Draggable
    },
    props: {
      columns: {
        type: Array,
        default: () => []
      }
    },
    emits: ['change', 'update:columns'],
    setup(props, { emit }) {
      const columnsCopy = ref<any>(deepcopy(props.columns))

      const onChange = () => {
        emit('update:columns', deepcopy(columnsCopy.value))
        emit('change')
      }

      const handleAddColumn = () => {
        columnsCopy.value.push(
          Object.assign({}, getBaseColumn(), { prop: `prop${columnsCopy.value.length}` })
        )
        onChange()
      }

      const handleCancelColumn = (index: number) => {
        columnsCopy.value.splice(index, 1)
        onChange()
      }

      const renderColumnMap: any = {
        label: (column: any, key: string, uid: string) => (
          <FieldItem label="列标题" key={uid}>
            <ElInput v-model={column[key]} onChange={onChange} />
          </FieldItem>
        ),
        prop: (column: any, key: string, uid: string) => (
          <FieldItem label="数据字段" key={uid}>
            <ElInput v-model={column[key]} onChange={onChange} />
          </FieldItem>
        ),
        minWidth: (column: any, key: string, uid: string) => (
          <FieldItem label="最小宽度" key={uid}>
            <ElInput v-model={column[key]} onChange={onChange} />
          </FieldItem>
        ),
        width: (column: any, key: string, uid: string) => (
          <FieldItem label="宽度大小" key={uid}>
            <ElInput v-model={column[key]} onChange={onChange} />
          </FieldItem>
        ),
        align: (column: any, key: string, uid: string) => (
          <FieldItem label="对齐方式" key={uid}>
            <ElRadioGroup v-model={column[key]} onChange={onChange}>
              <ElRadioButton label="left">Left</ElRadioButton>
              <ElRadioButton label="right">Right</ElRadioButton>
              <ElRadioButton label="center">Center</ElRadioButton>
            </ElRadioGroup>
          </FieldItem>
        ),
        fixed: (column: any, key: string, uid: string) => (
          <FieldItem label="固定方向" key={uid}>
            <ElRadioGroup v-model={column[key]} onChange={onChange}>
              <ElRadioButton label="left">Left</ElRadioButton>
              <ElRadioButton label="right">Right</ElRadioButton>
            </ElRadioGroup>
          </FieldItem>
        ),
        slot: (column: any, key: string, uid: string) => (
          <FieldItem label="使用插槽" key={uid}>
            <ElSwitch v-model={column[key]} onChange={onChange} />
          </FieldItem>
        )
      }

      const handleOpenExtension = (column: any) => {
        $operatorExtend({
          content: () =>
            Object.keys(column).map((key) => {
              return renderColumnMap[key](column, key, uid())
            })
        })
      }

      return {
        handleOpenExtension,
        handleAddColumn,
        handleCancelColumn,
        onChange,
        columnsCopy
      }
    }
  })
</script>

<template>
  <div class="table-columns-setting">
    <Draggable
      v-model="columnsCopy"
      animation="150"
      item-key="index"
      handle=".column-move-handle"
      @end="onChange"
    >
      <template #item="{ element: column, index }">
        <div class="flex items-center gap-x-2 mb-3 last:mb-0">
          <div
            class="w-6 h-6 flex items-center flex-shrink-0 justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-200"
            @click="handleOpenExtension(column)"
          >
            <el-icon><EditPen /></el-icon>
          </div>
          <input
            v-model="column.label"
            class="w-14 text-xs text-gray-700 flex-shrink-0 text-ellipsis whitespace-nowrap overflow-hidden outline-none"
            @change="onChange"
          />
          <el-input v-model="column.prop" size="small" @change="onChange"></el-input>
          <div
            class="w-6 h-6 flex items-center flex-shrink-0 justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-200"
            @click="handleCancelColumn(index)"
          >
            <el-icon><Delete /></el-icon>
          </div>

          <el-icon class="cursor-move column-move-handle"><Rank /></el-icon>
        </div>
      </template>
    </Draggable>
    <div class="add-column" @click="handleAddColumn"
      >添加一项
      <el-icon><Plus /></el-icon>
    </div>
  </div>
</template>

<style lang="scss">
  .table-columns-setting {
    box-sizing: border-box;
    border: 1px solid #ddd;
    padding: 6px;

    .add-column {
      display: flex;
      align-items: center;
      margin-top: 10px;
      width: 80px;
      font-size: 12px;
      color: #5a9cf8;
      cursor: pointer;
      gap: 4px;
    }
  }
</style>
