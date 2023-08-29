<script lang="ts">
  import { defineComponent, toRefs } from 'vue'
  import type { PropType } from 'vue'
  import type { BlockSlotData } from '../types'
  import DraggableGroup from './draggable-group.vue'
  import BlockItem from './block-item'

  export default defineComponent({
    components: {
      DraggableGroup
    },
    props: {
      slotData: {
        type: Object as PropType<BlockSlotData>,
        default: () => ({})
      }
    },
    setup(props) {
      const { slotData: slotData$ } = toRefs(props)
      return {
        slotData$,
        BlockItem
      }
    }
  })
</script>

<template>
  <DraggableGroup
    v-model="slotData$.children"
    :class="[
      'slot-items',
      { 'has-slot': slotData$.children.length, 'empty-slot': !slotData$.children.length }
    ]"
    item-key="_id"
    ghost-class="drag-in-canvas-ghost"
    :data-slot="slotData$.label"
  >
    <template #default="{ element }">
      <component :is="BlockItem" :key="element.key" :block-data="element"></component>
    </template>
  </DraggableGroup>
</template>

<style lang="scss">
  .slot-items {
    position: relative;
    width: 100%;
    min-height: 40px;
    box-sizing: border-box;

    &.has-slot {
      border: 0;
    }

    &.empty-slot {
      border: 1px dashed #ddd;
      color: #a1a1a1;
      background-color: rgb(246 247 249 / 50%);

      &::after {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 10;
        width: max-content;
        font-size: 12px;
        content: attr(data-slot);
        transform: translate(-50%, -50%);
      }
    }
  }
</style>
