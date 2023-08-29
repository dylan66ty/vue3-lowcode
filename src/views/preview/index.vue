<script lang="ts" setup>
  import { provide, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import BlockItem from '../editor/components/block-item'
  import { createEditorConfig } from '../editor/config'
  import { editorInjectionKey } from '../editor/context'

  import { pageSave } from '@/utils/page-save'

  const { query } = useRoute()

  provide(editorInjectionKey, {
    componentMap: createEditorConfig().componentMap
  })

  const editorData = ref<any>({})
  const formData = ref({})

  const initData = () => {
    const key = query.saveId as string
    editorData.value = pageSave.get(key) || {
      blocks: [],
      container: {
        style: {}
      }
    }
  }

  initData()
</script>

<template>
  <div class="h-[100vh] w-full" :style="editorData.container.style">
    <BlockItem
      v-for="(blockData, index) in editorData.blocks"
      :key="index"
      :block-data="blockData"
      :form-data="formData"
      :editable="false"
    />
  </div>
</template>
