<script lang="ts">
  import { defineComponent, computed } from 'vue'
  import type { ComponentData } from '../../types'
  import { createBlockData } from '../../utils'
  import { useEditorContext } from '../../hooks/useEditorContext'
  import MenuItem from './menu-item.vue'

  export default defineComponent({
    components: {
      MenuItem
    },
    setup() {
      const { editorContext } = useEditorContext()
      const components = computed(() =>
        editorContext?.componentList?.filter((component) => component.key.startsWith('container:'))
      )

      const clone = (component: ComponentData) => {
        return createBlockData(component)
      }

      return {
        components,
        clone
      }
    }
  })
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <MenuItem
      v-for="(component, index) in components"
      :key="index"
      class="w-[48%]"
      :clone="clone"
      :component="component"
    ></MenuItem>
  </div>
</template>
