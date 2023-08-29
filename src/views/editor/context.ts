import type { InjectionKey } from 'vue'
import type { ComponentData, BlockData, CommandName, EditorData } from './types'

export interface EditorContext {
  componentMap: Record<string, ComponentData>
  componentList?: ComponentData[]
  register?: (component: ComponentData) => void
  blockState?: {
    onContextMenu: (e: MouseEvent, block: BlockData) => void
    onMousedown: (e: MouseEvent, block: BlockData) => void
    updateCurrentBlock: (block?: BlockData) => void
    readonly currentBlock?: BlockData
  }
  isDrag?: boolean
  commands?: Record<CommandName, (...args: any[]) => void>
  editorData?: EditorData
}

export const editorInjectionKey: InjectionKey<EditorContext> = Symbol('Editor')
