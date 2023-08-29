import { computed, defineComponent, provide, reactive, ref } from 'vue'
import type { PropType, Ref, WritableComputedRef } from 'vue'

import { useRoute, useRouter } from 'vue-router'
import { uid } from 'uid'
import EditorHeader from './header'
import EditorAside from './aside'
import EditorOperator from './operator'
import EditorCanvas from './canvas/index.vue'

import { createEditorConfig } from './config'
import { editorInjectionKey } from './context'
import type { EditorData } from './types'

import './editor.scss'
import { useBlock } from './hooks/useBlock'
import useCommand from './hooks/useCommand'

import { createContainer, crateAside, createBlocks } from './utils'
import { pageSave } from '@/utils/page-save'

export default defineComponent({
  name: 'Editor',
  props: {
    modelValue: {
      type: Object as PropType<EditorData>,
      default: undefined
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const { replace } = useRouter()
    const { query } = useRoute()
    console.log(1111)
    if (!query.saveId) {
      replace({ path: `/editor`, query: { ...query, saveId: uid(6) } })
    }

    const getDefaultEditorData = () => {
      return {
        aside: {},
        blocks: [],
        container: {
          style: {}
        }
      }
    }

    const selfModel: Ref<any> = ref(getDefaultEditorData())
    const editorData: WritableComputedRef<EditorData> = computed({
      get() {
        const data = props.modelValue || selfModel.value
        return data
      },
      set(newVal) {
        emit('update:modelValue', newVal)
        selfModel.value = newVal
      }
    })

    // 重置一些属性
    const mergeEditorData = () => {
      editorData.value.container = createContainer(editorData.value.container)
      editorData.value.aside = crateAside(editorData.value.aside)
      editorData.value.blocks = createBlocks(editorData.value.blocks)
    }

    mergeEditorData()

    const { commands } = useCommand(editorData)
    const blockState = useBlock(editorData, commands)

    const registerConfig = createEditorConfig()

    provide(
      editorInjectionKey,
      reactive({
        componentList: registerConfig.componentList,
        componentMap: registerConfig.componentMap,
        register: registerConfig.register,
        isDrag: false,
        editorData,
        commands,
        blockState
      })
    )

    const initData = async () => {
      const data = pageSave.get(query.saveId as string)
      if (data) {
        console.log(data)
        selfModel.value = data
      }
    }

    initData()

    return () => {
      return (
        <div class="editor">
          <EditorHeader />
          <section class="content-wrapper">
            <EditorAside />
            <EditorCanvas />
            <EditorOperator />
          </section>
        </div>
      )
    }
  }
})
