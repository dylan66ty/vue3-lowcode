<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import type { StyleValue } from 'vue'
  import DraggableGroup from '../components/draggable-group.vue'
  import BlockItem from '../components/block-item'
  import { useEditorContext } from '../hooks/useEditorContext'
  import { clearBlocksDataFocus } from '../utils'

  export default defineComponent({
    components: {
      DraggableGroup,
      BlockItem
    },
    setup() {
      const { editorContext } = useEditorContext()
      const editorData = computed(() => editorContext!.editorData!)
      const isDrag = computed(() => editorContext?.isDrag)
      const isSelectContainer = computed(() => !editorContext?.blockState?.currentBlock)

      const canvasStyle = computed(() => {
        const style: StyleValue = {
          ...editorContext?.editorData?.container?.style,
          width: '100%'
        }
        return style
      })

      const onMousedown = () => {
        editorContext?.blockState?.updateCurrentBlock?.()
        clearBlocksDataFocus(editorContext?.editorData?.blocks ?? [])
      }

      return {
        canvasStyle,
        onMousedown,
        editorData,
        isDrag,
        isSelectContainer
      }
    }
  })
</script>

<template>
  <div class="flex-1 overflow-scroll flex items-center justify-center box-border p-4">
    <div
      class="border-2 border-transparent box-content w-full h-full"
      :class="[
        {
          'is-dragging': isDrag,
          'is-select': isSelectContainer
        }
      ]"
    >
      <div class="fake-body bg-white overflow-scroll p-2 h-full" :style="canvasStyle" @mousedown="onMousedown">
        <DraggableGroup v-model="editorData.blocks" item-key="_id" ghost-class="drag-in-canvas-ghost">
          <template #default="{ element }"> <BlockItem :key="element.key" :block-data="element" /></template>
        </DraggableGroup>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .is-select {
    position: relative;
    border-style: solid;
    border-width: 2px;
    border-color: var(--editor-primary);

    &::after {
      content: 'Page';
      position: absolute;
      top: -2px;
      right: -2px;
      z-index: 10;
      border-radius: 3px;
      padding: 3px 5px;
      font-size: 12px;
      color: #fff;
      line-height: 1;
      background-color: var(--editor-primary);
    }
  }

  .is-dragging {
    border-style: dashed;
    border-color: #ddd;

    &::after {
      /* prettier-ignore */
      opacity: .7;
    }
  }
</style>
