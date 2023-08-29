<script lang="tsx">
  import { defineComponent } from 'vue'
  import DraggableGroup from '../../components/draggable-group.vue'

  export default defineComponent({
    components: {
      DraggableGroup
    },
    props: {
      clone: {
        type: Function,
        default: () => {}
      },
      component: {
        type: Object,
        default: () => ({})
      }
    },
    emits: ['start', 'end']
  })
</script>

<template>
  <DraggableGroup
    :module-value="[component]"
    :group="{ name: 'components', pull: 'clone', put: false }"
    item-key="key"
    ghost-class="menu-item-ghost"
    chosen-class="menu-item-chosen"
    drag-class="menu-item-drag"
    :clone="clone"
    @start="(e) => $emit('start', e)"
    @end="(e) => $emit('end', e)"
  >
    <template #default="{ element }">
      <div class="menu-item">
        <component :is="element.preview(element)"></component>
      </div>
    </template>
  </DraggableGroup>
</template>

<style lang="scss">
  .menu-item {
    border: 1px dashed transparent;
    border-radius: 3px;
    padding: 8px 10px;
    width: 100%;
    font-size: 12px;
    background-color: #f6f7ff;
    cursor: move;

    &:hover {
      border-color: var(--editor-primary);
      color: var(--editor-primary);
    }
  }

  .menu-item-chosen {
    .menu-item {
      border-color: var(--editor-primary);
      color: var(--editor-primary);
    }
  }

  .menu-item-drag {
    height: 100px !important;
  }
</style>
