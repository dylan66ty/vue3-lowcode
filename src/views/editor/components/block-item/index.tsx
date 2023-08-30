import type { PropType } from 'vue'
import { computed, defineComponent, ref, toRefs, watch } from 'vue'
import type { BlockData } from '../../types'
import { useEditorContext } from '../../hooks/useEditorContext'
import { findFocusBlockData, flatBlocksData } from '../../utils'

import './style.scss'

export default defineComponent({
  name: 'BlockItem',
  props: {
    blockData: {
      type: Object as PropType<BlockData>,
      required: true
    },
    formData: {
      type: Object,
      default: () => ({})
    },
    editable: {
      type: Boolean,
      default: true
    },
    scoped: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const { formData, blockData } = toRefs(props)
    const { editorContext } = useEditorContext()
    const isDrag = computed(() => editorContext?.isDrag)
    const currentBlock = computed(() => editorContext?.blockState?.currentBlock)
    const isCurrentBlockChild = computed(() => {
      if (!currentBlock.value) return
      const children = flatBlocksData([currentBlock.value!]).slice(1)
      return children.includes(props.blockData)
    })
    const cls = computed(() => {
      const _cls = [
        props.editable ? 'editor-block-item' : '__block-item',
        props.editable && props.blockData.focus && 'is-focus',
        props.editable && isDrag.value && 'is-drag',
        props.editable && isParentContainer.value && 'active-parent-layout',
        props.editable && isDrag.value && isContainerBlock.value && !isCurrentBlockChild.value && 'active-parent-layout'
      ]
      return _cls
    })

    const isContainerBlock = computed(() => props.blockData.key.startsWith('container:'))

    const isParentContainer = ref(false)
    if (props.editable && isContainerBlock.value) {
      watch(
        () => currentBlock.value,
        () => {
          const existChildFocus = findFocusBlockData([props.blockData])
          if (existChildFocus && existChildFocus !== props.blockData) {
            isParentContainer.value = true
          } else {
            isParentContainer.value = false
          }
        }
      )
    }

    const events: Record<string, any[]> = {
      onMousedown: [],
      onContextmenu: []
    }
    if (props.editable) {
      events.onMousedown.push((e: MouseEvent) => {
        editorContext?.blockState?.onMousedown(e, props.blockData)
      })
      events.onContextmenu.push((e: MouseEvent) => {
        editorContext?.blockState?.onContextMenu(e, props.blockData)
      })
    }

    return () => {
      if (!editorContext) {
        return 'no register generate "componentMap"'
      }
      const component = editorContext.componentMap[blockData.value.key]
      const componentRender = component.render({
        model: Object.keys(component.model || {}).reduce((prev: any, modelName) => {
          const bindPropName = blockData.value.model[modelName]
          const { modelInputField } = component.model[modelName]
          prev[modelName] = {
            [modelInputField]: props.formData[bindPropName],
            [`onUpdate:${modelInputField}`]: (val: string) => (formData.value[bindPropName] = val)
          }
          return prev
        }, {}),
        slots: blockData.value.slots,
        props: blockData.value.props,
        style: blockData.value.style,
        custom: {
          formData: formData.value,
          editable: props.editable,
          scoped: props.scoped,
          actions: blockData.value.actions
        }
      })

      const attrs: Record<string, string> = {}
      if (props.editable) {
        attrs['data-label'] = props.blockData.label
      }

      return (
        <div class={cls.value} {...events} {...attrs}>
          {componentRender}
        </div>
      )
    }
  }
})
