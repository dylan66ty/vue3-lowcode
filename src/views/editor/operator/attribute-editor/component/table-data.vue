<script lang="ts">
  import { defineComponent } from 'vue'
  import { Edit } from '@element-plus/icons-vue'
  import { ElMessage } from 'element-plus'
  import { $dialog } from '../../../components/dialog'

  export default defineComponent({
    props: {
      modelValue: {
        type: Array,
        default: () => []
      }
    },
    emits: ['update:modelValue', 'change'],
    setup(props, { emit }) {
      const updateTableData = (tableData: []) => {
        emit('update:modelValue', tableData)
        emit('change')
      }

      const handleOpenDialog = () => {
        const hide = $dialog({
          title: `编辑数据`,
          content: JSON.stringify(props.modelValue, null, 2),
          footer: true,
          onConfirm(content) {
            try {
              const data = JSON.parse(content!)
              updateTableData(data)
              hide()
            } catch (error) {
              ElMessage.error('JSON 解析错误')
            }
          }
        })
      }

      return {
        Edit,
        handleOpenDialog
      }
    }
  })
</script>

<template>
  <el-button :icon="Edit" type="primary" @click="handleOpenDialog"> 编辑数据 </el-button>
</template>
