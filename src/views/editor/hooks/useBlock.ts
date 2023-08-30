import type { WritableComputedRef } from 'vue'
import { h, onUnmounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Delete, CopyDocument, Upload, View } from '@element-plus/icons-vue'
import deepcopy from 'deepcopy'
import { uid } from 'uid'
import type { EditorData, BlockData, CommandName } from '../types'
import { clearBlocksDataFocus, traverseBlocksDataByVisitor, events } from '../utils'

import { $dropdown } from '../components/dropdown'
import { $dialog } from '../components/dialog'

export const useBlock = (editorData: WritableComputedRef<EditorData>, commands: Record<CommandName, (...args: any[]) => void>) => {
  const currentBlock = ref<BlockData>()
  const focusCurrentBlock = (block?: BlockData) => {
    if (!block) {
      clearBlocksDataFocus(editorData.value.blocks)
      return
    }
    if (!block.focus) {
      clearBlocksDataFocus(editorData.value.blocks)
      block.focus = true
    }
    currentBlock.value = block
  }

  const onContextMenu = (e: MouseEvent, block: BlockData) => {
    e.preventDefault()
    e.stopPropagation()
    focusCurrentBlock(block)
    const hide = $dropdown({
      content: [
        {
          label: '删除节点',
          icon: h(Delete),
          handler: () => {
            commands.delete()
            hide()
          }
        },
        {
          label: '查看节点',
          icon: h(View),
          handler: () => {
            $dialog({
              title: `节点信息`,
              content: JSON.stringify(currentBlock.value, null, 2)
            })
            hide()
          }
        },
        {
          label: '导入节点',
          icon: h(Upload),
          handler: () => {
            const hideDialog = $dialog({
              title: `导入节点信息`,
              content: JSON.stringify({}, null, 2),
              footer: true,
              onConfirm(content) {
                try {
                  commands.updateBlock(JSON.parse(content!), currentBlock.value)
                  hideDialog()
                  hide()
                } catch (error) {
                  ElMessage.error('JSON 解析错误')
                }
              }
            })
          }
        },
        {
          label: '复制节点',
          icon: h(CopyDocument),
          handler: () => {
            const copyBlock = deepcopy(currentBlock.value!)
            traverseBlocksDataByVisitor([copyBlock], (blockData) => {
              blockData._id = `__id_copy_${uid(6)}`
            })
            commands.insetBlock(copyBlock, currentBlock.value)
            updateCurrentBlock(copyBlock)
            hide()
          }
        }
      ],
      el: e.target as HTMLElement,
      offsetX: e.offsetX,
      offsetY: e.offsetY
    })
  }
  const onMousedown = (e: MouseEvent, block: BlockData) => {
    e.stopPropagation()
    focusCurrentBlock(block)
  }

  const updateCurrentBlock = (blockData?: BlockData) => {
    currentBlock.value = blockData
  }

  const resetCurrentBlockData = () => {
    updateCurrentBlock()
  }

  events.on('resetCurrentBlockData', resetCurrentBlockData)

  onUnmounted(() => {
    events.off('resetCurrentBlockData', resetCurrentBlockData)
  })

  return {
    onContextMenu,
    onMousedown,
    updateCurrentBlock,
    currentBlock
  }
}
