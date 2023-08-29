import type { VNode, CSSProperties } from 'vue'

export interface ComponentData {
  key: string
  label: string
  draggable?: boolean
  style: Record<string, any>
  props: Record<string, any>
  model: Record<string, any>
  slots: Record<string, any>
  events?: { label: string; value: string }[]
  render: (val?: any) => VNode
  preview: (val?: any) => VNode
}

export interface Container {
  style?: Partial<CSSProperties>
  [key: string]: any
}

export interface Aside {
  isPaneTop: boolean
  activePane: number
}

export interface EditorData {
  container: Container
  blocks: BlockData[]
  aside: Aside
}

export interface BlockSlotData {
  children: BlockData[]
  label?: string
}

export interface ActionHandle {
  key: string
  name: string
  link: string[]
}

export interface Action {
  key: string
  name: string
  event: string
  handle: ActionHandle[]
}

export interface BlockData {
  _id: string
  key: string
  label: string
  draggable?: boolean
  focus: boolean
  style: Record<string, string | number>
  props: Record<string, any>
  model: Record<string, any>
  slots: Record<string, BlockSlotData>
  events: { label: string; value: string }[]
  actions: Action[]
}

export interface RegisterConfig {
  componentList: ComponentData[]
  register: (component: ComponentData) => void
}

export type CommandName =
  | 'drag'
  | 'delete'
  | 'redo'
  | 'undo'
  | 'clear'
  | 'updateBlock'
  | 'updatePage'
  | 'insetBlock'
  | 'updateContainer'
