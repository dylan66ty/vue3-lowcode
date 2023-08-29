import deepcopy from 'deepcopy'
import { onUnmounted } from 'vue'
import type { WritableComputedRef } from 'vue'
import {
  events,
  filterBlocksDataByFocus,
  traverseBlocksDataByVisitor,
  findFocusBlockDataParentList,
  clearBlocksDataFocus
} from '../utils'
import type { EditorData, CommandName, BlockData } from '../types'

interface ExecuteReturn {
  undo?: () => void
  redo?: () => void
}

interface Command {
  name: CommandName
  keyboard?: string
  pushQueue?: boolean
  execute: (...args: any[]) => ExecuteReturn
  init?: () => void
  before?: BlockData[]
  after?: BlockData[]
}

interface State {
  current: number
  queue: ExecuteReturn[]
  commands: Record<any, () => void>
  commandArray: Command[]
  destroyArray: any[]
}

export default function (editorData: WritableComputedRef<EditorData>) {
  const state: State = {
    current: -1, // 前进后退的索引值
    queue: [], // 存放所有的操作指令
    commands: {}, // 制作命令和执行功能一个映射表
    commandArray: [], // 存放所有的命令
    destroyArray: [] // 存放所有要销毁的订阅
  }

  const registry = (command: Command) => {
    state.commandArray.push(command)
    state.commands[command.name] = (...args: any[]) => {
      // 命令对应执行函数
      const { redo, undo } = command.execute(...args)
      redo && redo()
      if (!command.pushQueue) return // 不需要放到队列直接跳过
      const current = state.current
      let queue = state.queue
      if (queue.length > 0) {
        // 可能在放置过程中有撤销操作，所以根据当前最新的current值来计算新的队
        queue = queue.slice(0, current + 1)
        state.queue = queue
      }

      // 保存指令的前进后退
      queue.push({ redo, undo })
      state.current = current + 1
    }
  }

  // 拖拽行为
  registry({
    name: 'drag',
    pushQueue: true,
    init() {
      const start = () => {
        this.before = deepcopy(editorData.value.blocks)
      }
      const end = () => {
        state.commands.drag()
      }
      events.on('start', start)
      events.on('end', end)

      return () => {
        events.off('start', start)
        events.off('end', end)
      }
    },
    execute() {
      const before = this.before
      const after = deepcopy(editorData.value.blocks)
      return {
        redo() {
          editorData.value = { ...editorData.value, blocks: after }
        },
        undo() {
          editorData.value = { ...editorData.value, blocks: before! }
        }
      }
    }
  })

  // 还原
  registry({
    name: 'redo',
    keyboard: 'ctrl+y',
    execute() {
      return {
        redo() {
          const item = state.queue[state.current + 1] // 还原撤销
          if (item) {
            item.redo && item.redo()
            state.current++

            events.emit('resetCurrentBlockData')
          }
        }
      }
    }
  })
  // 撤销
  registry({
    name: 'undo',
    keyboard: 'ctrl+z',
    execute() {
      return {
        redo() {
          if (state.current === -1) return
          const item = state.queue[state.current]
          if (item) {
            item.undo && item.undo()
            state.current--
            events.emit('resetCurrentBlockData')
          }
        }
      }
    }
  })

  // 删除
  registry({
    name: 'delete',
    pushQueue: true,
    execute() {
      const state = {
        before: deepcopy(editorData.value.blocks),
        // 强制重新渲染
        after: deepcopy(filterBlocksDataByFocus(editorData.value.blocks))
      }
      return {
        undo: () => {
          editorData.value = { ...editorData.value, blocks: state.before }
        },
        redo: () => {
          editorData.value = { ...editorData.value, blocks: state.after }
        }
      }
    }
  })

  // 清空
  registry({
    name: 'clear',
    pushQueue: true,
    execute() {
      const state = {
        before: deepcopy(editorData.value.blocks),
        after: []
      }
      return {
        undo: () => {
          editorData.value = { ...editorData.value, blocks: state.before }
        },
        redo: () => {
          editorData.value = { ...editorData.value, blocks: state.after }
        }
      }
    }
  })

  // 更新block
  registry({
    name: 'updateBlock',
    pushQueue: true,
    execute(newBlock, oldBlock) {
      const state = {
        before: deepcopy(editorData.value.blocks),
        after: (() => {
          const copyBlocks = deepcopy(editorData.value.blocks)
          traverseBlocksDataByVisitor(copyBlocks, (blockData) => {
            if (blockData._id === oldBlock._id) {
              Object.assign(blockData, newBlock)
            }
          })
          return copyBlocks
        })()
      }
      return {
        redo: () => {
          editorData.value = { ...editorData.value, blocks: state.after }
        },
        undo: () => {
          editorData.value = { ...editorData.value, blocks: state.before }
        }
      }
    }
  })

  // 插入新的block
  registry({
    name: 'insetBlock',
    pushQueue: true,
    execute(newBlock, oldBlock) {
      const state = {
        before: deepcopy(editorData.value.blocks),
        after: (() => {
          const copyBlocks = deepcopy(editorData.value.blocks)
          const parentList = findFocusBlockDataParentList(copyBlocks)
          clearBlocksDataFocus(parentList)
          const index = parentList.findIndex((blockData) => blockData._id === oldBlock._id)
          parentList.splice(index + 1, 0, newBlock)
          return copyBlocks
        })()
      }
      return {
        redo: () => {
          editorData.value = { ...editorData.value, blocks: state.after }
        },
        undo: () => {
          editorData.value = { ...editorData.value, blocks: state.before }
        }
      }
    }
  })

  // 当前页面全局更新
  registry({
    name: 'updatePage',
    pushQueue: true,
    execute(newValue) {
      const state = {
        before: deepcopy(editorData.value),
        after: newValue
      }
      return {
        redo: () => {
          editorData.value = state.after
        },
        undo: () => {
          editorData.value = state.before
        }
      }
    }
  })

  // 更新container
  registry({
    name: 'updateContainer',
    pushQueue: true,
    execute(newContainer) {
      const state = {
        before: deepcopy(editorData.value),
        after: { ...editorData.value, container: { ...newContainer } }
      }
      return {
        redo: () => {
          editorData.value = state.after
        },
        undo: () => {
          editorData.value = state.before
        }
      }
    }
  })

  onUnmounted(() => {
    // 清理绑定的事件
    state.destroyArray.forEach((fn) => fn && fn())
  })

  // 初始化带有init的命令
  state.commandArray.forEach((command) => {
    command.init && state.destroyArray.push(command.init())
  })

  return state
}
