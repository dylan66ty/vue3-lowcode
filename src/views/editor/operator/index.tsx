import { computed, defineComponent, inject, nextTick, watch, ref } from 'vue'
import deepcopy from 'deepcopy'
import { editorInjectionKey } from '../context'
import type { BlockData, Container } from '../types'
import { findFocusBlockData } from '../utils'

import AttributeEditor from './attribute-editor'
import ContainerAttribute from './attribute-editor/container-attribute'
import './style.scss'

export default defineComponent({
  setup() {
    const editorContext = inject(editorInjectionKey)
    const currentBlock = computed(() => editorContext?.blockState?.currentBlock)
    const container = computed(() => editorContext?.editorData?.container)
    const editorBlock = ref<BlockData>()
    const editorContainer = ref<Container>()
    watch(
      () => currentBlock.value,
      (newBlockData) => {
        if (newBlockData) {
          editorBlock.value = deepcopy(newBlockData)
        }
      },
      { immediate: true }
    )

    watch(
      () => container.value,
      (newContainer) => {
        if (newContainer) {
          editorContainer.value = deepcopy(newContainer)
        }
      },
      { immediate: true }
    )

    const applyBlock = (newBlockData: BlockData) => {
      editorContext?.commands?.updateBlock(deepcopy(newBlockData), currentBlock.value)
    }

    const applyPage = (newContainer: any) => {
      editorContext?.commands?.updateContainer(newContainer)
    }

    const initActiveBlockOperator = () => {
      const block: BlockData = findFocusBlockData(editorContext!.editorData!.blocks)!
      editorContext?.blockState?.updateCurrentBlock(block)
    }
    nextTick(() => initActiveBlockOperator())
    return () => {
      if (!currentBlock.value)
        return (
          <div class="operator-wrapper max-xl:hidden">
            <ContainerAttribute editorContainer={editorContainer.value!} apply={applyPage} />
          </div>
        )
      const component = editorContext?.componentMap[currentBlock.value.key]
      return (
        <div class="operator-wrapper max-xl:hidden">
          <el-tabs type="border-card">
            <el-tab-pane label="属性">
              <AttributeEditor
                key={editorBlock.value?._id}
                component={component}
                editorBlock={editorBlock.value}
                apply={applyBlock}
              />
            </el-tab-pane>
            <el-tab-pane label="事件">TODO</el-tab-pane>
          </el-tabs>
        </div>
      )
    }
  }
})
