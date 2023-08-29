import mitt from 'mitt'
import { uid } from 'uid'
import type { ComponentData, BlockData, BlockSlotData, Container, Aside } from './types'

export const events = mitt()

// 创建blocks存储容器
export const createBlocks = (blocks: BlockData[] | undefined) => {
  if (!blocks) return []
  return blocks
}

// 只是拖拽生成组件时候调用此方法 通过 componentData 来创建 blockData
export const createBlockData = (component: ComponentData): BlockData => {
  const props = Object.entries(component.props).reduce((acc: Record<string, any>, cur) => {
    const [key, config] = cur
    acc[key] = config.defaultValue
    return acc
  }, {})

  // { default: name } name 与 formData绑定
  const model = Object.entries(component.model).reduce((acc: Record<string, any>, cur) => {
    const [key, config] = cur
    acc[key] = config.modelBindField
    return acc
  }, {})

  const style = Object.entries(component.style).reduce((acc: Record<string, any>, cur) => {
    const [key, config] = cur
    if (key === 'layout') {
      Object.entries(config.defaultValue).forEach(([_key, _value]) => {
        acc[_key] = _value
      })
    } else {
      acc[key] = config.defaultValue
    }

    return acc
  }, {})

  return {
    _id: `__id_${uid(6)}`,
    key: component.key,
    label: component.label,
    draggable: component.draggable,
    focus: false,
    model,
    props,
    style,
    slots: {},
    events: component.events ?? [],
    actions: []
  }
}

// 默认编辑器配置
export const createContainer = (container: Container) => {
  const style = {}
  return {
    style,
    ...container
  }
}

// 默认侧边栏配置
export const crateAside = (aside: Partial<Aside>) => {
  const asideConfig: Aside = {
    isPaneTop: false,
    activePane: 0,
    ...aside
  }
  return asideConfig
}

export const createSlotItem = (label = '拖拽组件到这里') => {
  return {
    children: [],
    label
  }
}

export const filterBlocksDataByFocus = (blocksData: BlockData[]): BlockData[] => {
  const filter = (blocksData: BlockData[]) => {
    return blocksData.filter((block) => {
      const slots = block.slots!
      const keys = Object.keys(slots)
      if (keys.length) {
        const newSlots: Record<string, BlockSlotData> = {}
        keys.forEach((key) => {
          newSlots[key] = { ...slots[key], children: filter(slots[key].children) }
        })
        block.slots = newSlots
      }
      return !block.focus
    })
  }
  return filter(blocksData)
}

export const clearBlocksDataFocus = (blocksData: BlockData[]) => {
  const clear = (blocksData: BlockData[]) => {
    blocksData.forEach((block) => {
      block.focus = false
      const slots = block.slots!
      const keys = Object.keys(slots)
      keys.forEach((key) => {
        clear(slots[key].children)
      })
    })
  }
  clear(blocksData)
}

export const getBlocksDataKeys = (blocksData: BlockData[]) => {
  const fields: string[] = []
  const traverse = (blocksData: BlockData[]) => {
    blocksData.forEach((block) => {
      if (block.key.startsWith('field:')) {
        fields.push(block.key)
      }
      const slots = block.slots!
      const slotKeys = Object.keys(slots)
      slotKeys.forEach((key) => {
        traverse(slots[key].children)
      })
    })
  }
  traverse(blocksData)
  return fields
}

export const findFocusBlockData = (blocksData: BlockData[]) => {
  let current
  const find = (blocksData: BlockData[]) => {
    blocksData.some((block) => {
      if (block.focus) {
        current = block
        return true
      }
      const slots = block.slots!
      const keys = Object.keys(slots)
      keys.forEach((key) => {
        find(slots[key].children)
      })
    })
  }
  find(blocksData)
  return current
}

export const findFocusBlockDataParentList = (blocksData: BlockData[]) => {
  let parentList: BlockData[] = []
  const find = (blocksData: BlockData[]) => {
    blocksData.some((block) => {
      if (block.focus) {
        parentList = blocksData
        return true
      }
      const slots = block.slots!
      const keys = Object.keys(slots)
      keys.forEach((key) => {
        find(slots[key].children)
      })
    })
  }
  find(blocksData)
  return parentList
}

export const traverseBlocksDataByVisitor = (
  blocksData: BlockData[],
  visitor: (blockData: BlockData) => void
) => {
  const traverse = (blocksData: BlockData[]) => {
    blocksData.forEach((block) => {
      visitor(block)
      const slots = block.slots!
      const slotKeys = Object.keys(slots)
      slotKeys.forEach((key) => {
        traverse(slots[key].children)
      })
    })
  }
  traverse(blocksData)
}

export const flatBlocksData = (blocksData: BlockData[]) => {
  const flats: BlockData[] = []
  // 深度优先
  const traverse = (blocksData: BlockData[]) => {
    blocksData.forEach((block) => {
      flats.push(block)
      const slots = block.slots!
      const slotKeys = Object.keys(slots)
      slotKeys.forEach((key) => {
        traverse(slots[key].children)
      })
    })
  }
  traverse(blocksData)
  return flats
}

export const extractComponentProps = (props: Record<string, any>, excludes: string[]) => {
  const componentProps: Record<string, any> = {}
  Object.entries(props).forEach(([key, value]) => {
    if (!excludes.includes(key)) {
      componentProps[key] = value
    }
  })
  return componentProps
}
