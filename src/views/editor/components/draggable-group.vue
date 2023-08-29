<script lang="ts">
  import type { WritableComputedRef } from 'vue'
  import { computed, defineComponent } from 'vue'
  import Draggable from 'vuedraggable'
  import { events } from '../utils'
  import { useEditorContext } from '../hooks/useEditorContext'

  export default defineComponent({
    components: {
      Draggable
    },
    inheritAttrs: false,
    props: {
      moduleValue: {
        type: Array,
        default: () => []
      },
      itemKey: {
        type: String,
        default: '_id'
      },
      group: {
        type: Object,
        default: () => ({ name: 'components' })
      },
      fallbackClass: {
        type: String,
        default: ''
      }
    },
    emits: ['update:moduleValue', 'start', 'end'],
    setup(props, { emit }) {
      const list = computed({
        get() {
          return props.moduleValue
        },
        set(newList) {
          emit('update:moduleValue', newList)
        }
      })

      const { editorContext } = useEditorContext()

      const isDrag: WritableComputedRef<boolean> = computed({
        get() {
          return editorContext?.isDrag as boolean
        },
        set(val: boolean) {
          editorContext!.isDrag = val
        }
      })

      const onDragstart = (e: any) => {
        isDrag.value = true
        emit('start', e)
        events.emit('start')
      }
      const onDragend = (e: any) => {
        isDrag.value = false
        emit('end', e)
        events.emit('end')
      }

      const dragOptions = computed(() => ({
        animation: 150,
        disabled: false,
        scroll: false,
        ghostClass: 'ghost',
        forceFallback: true //出现滚动条时候，需要开启这个属性，否则拖拽会报错。
      }))

      return {
        list,
        isDrag,
        dragOptions,
        onDragstart,
        onDragend
      }
    }
  })
</script>

<template>
  <Draggable
    v-model="list"
    v-bind="{ ...dragOptions, ...$attrs }"
    class="drag-group"
    tag="div"
    :group="group"
    :item-key="itemKey"
    filter=".not-draggable"
    @start="onDragstart"
    @end="onDragend"
  >
    <template #item="item">
      <div
        :class="['drag-item', { 'not-draggable': !item.element.draggable }]"
        :data-label="item.element.label"
      >
        <slot v-bind="item"> </slot>
      </div>
    </template>
  </Draggable>
</template>

<style lang="scss">
  .drag-group {
    height: 100%;
  }
</style>
