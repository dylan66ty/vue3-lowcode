import { defineComponent, inject } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

import { Document, List, Delete, Download, Upload, RefreshRight, RefreshLeft, Position } from '@element-plus/icons-vue'
import { editorInjectionKey } from '../context'
import { $dialog } from '../components/dialog'

import SaveIcon from '../icons/save.vue'

import { clearBlocksDataFocus } from '../utils'
import type { EditorData } from '../types'

import Header from '@/components/header.vue'
import { linkTo } from '@/utils/helper'

import { pageSave } from '@/utils/page-save'
import router from '@/router'

export default defineComponent({
  setup() {
    const editorContext = inject(editorInjectionKey)

    const buttons = [
      {
        label: '撤销',
        value: 'undo',
        icon: <RefreshLeft />,
        handler(_e: MouseEvent) {
          editorContext?.commands?.undo()
        }
      },
      {
        label: '重做',
        value: 'redo',
        icon: <RefreshRight />,
        handler(_e: MouseEvent) {
          editorContext?.commands?.redo()
        }
      },
      {
        label: '重置',
        value: 'reset',
        icon: <Delete />,
        handler(_e: MouseEvent) {
          ElMessageBox({
            message: '确定要重置吗？您所有的修改都将消失！',
            type: 'warning',
            title: '提示',
            confirmButtonText: '确认',
            cancelButtonText: '取消',
            showCancelButton: true,
            showClose: true,
            showConfirmButton: true
          })
            .then(() => {
              editorContext?.commands?.clear()
              pageSave.delete(router.currentRoute.value.query.saveId as string)
              ElMessage.success('重制成功')
            })
            .catch(() => {})
        }
      },
      {
        label: '导入',
        value: 'import',
        icon: <Upload />,
        handler(_e: MouseEvent) {
          const hide = $dialog({
            title: `导入JSON`,
            content: JSON.stringify({ blocks: [], container: {} }, null, 2),
            footer: true,
            onConfirm(content) {
              try {
                const newEditorData: EditorData = JSON.parse(content!)
                clearBlocksDataFocus(newEditorData.blocks)
                editorContext?.commands?.updatePage(newEditorData)
                hide()
              } catch (error) {
                ElMessage.error('JSON 解析错误')
              }
            }
          })
        }
      },
      {
        label: '导出',
        value: 'export',
        icon: <Download />,
        handler(_e: MouseEvent) {
          $dialog({
            title: '导出JSON',
            content: JSON.stringify(editorContext?.editorData, null, 2)
          })
        }
      },
      {
        label: '保存',
        value: 'save',
        icon: <SaveIcon />,
        handler(_e: MouseEvent) {
          ElMessageBox({
            message: '请输入标题',
            title: '保存',
            confirmButtonText: '保存',
            cancelButtonText: '取消',
            showCancelButton: true,
            showClose: true,
            showConfirmButton: true,
            inputType: 'text',
            showInput: true,
            inputPlaceholder: '请输入标题',
            inputValue: editorContext?.editorData?.container.title
          })
            .then((data) => {
              const title = data.value
              if (editorContext?.editorData) {
                editorContext.editorData.container.title = title
              }

              pageSave.save(router.currentRoute.value.query.saveId as string, editorContext?.editorData)

              ElMessage.success('已保存到本地')
            })
            .catch(() => {})
        }
      },
      {
        label: '预览',
        value: 'preview',
        icon: <Position />,
        handler(_e: MouseEvent) {
          const saveId = router.currentRoute.value.query.saveId as string
          pageSave.save(saveId, editorContext?.editorData)
          ElMessage.success({
            message: '已保存到本地',
            duration: 1000
          })
          setTimeout(() => {
            router.push({
              path: '/preview',
              query: {
                saveId
              }
            })
          }, 1000)
        }
      },
      {
        label: '历史',
        value: 'clear',
        icon: <List />,
        handler(_e: MouseEvent) {
          router.push({
            path: '/record'
          })
        }
      },
      {
        label: '新页面',
        value: 'new',
        icon: <Document />,
        handler(_e: MouseEvent) {
          linkTo(`http://${location.host}/vue3-lowcode/#/editor`)
        }
      }
    ]

    return () => {
      return (
        <Header>
          <div class="absolute left-1/2 -translate-x-1/2 flex gap-x-1">
            {buttons.map((btn) => (
              <div
                class="flex flex-col items-center flex-shrink-0 gap-y-1 cursor-pointer select-none hover:bg-gray-100 active:bg-gray-200 py-1 px-5 rounded-md"
                onClick={(e: MouseEvent) => btn.handler(e)}
              >
                <el-icon>{btn.icon}</el-icon>
                <span class="text-xs">{btn.label}</span>
              </div>
            ))}
          </div>
        </Header>
      )
    }
  }
})
