<script lang="ts">
  import type { PropType } from 'vue'
  import { defineComponent, nextTick, onUnmounted, ref, watch } from 'vue'
  import { setLocaleData } from 'monaco-editor-nls'
  const zh_CN = require('monaco-editor-nls/locale/zh-hans.json')
  setLocaleData(zh_CN)

  const monaco = require('monaco-editor/esm/vs/editor/editor.api')

  export default defineComponent({
    props: {
      code: {
        type: String,
        default: ''
      },
      language: {
        type: String as PropType<'javascript' | 'typescript' | 'json' | 'scss' | 'css'>,
        default: 'json'
      }
    },
    emits: ['change'],
    setup(props, { emit }) {
      const containerRef = ref<HTMLElement>()
      let editor: any
      const initMonacoEditor = () => {
        if (!containerRef.value) return
        if (editor) {
          editor.setValue(props.code)
          return
        }

        editor = monaco.editor.create(containerRef.value!, {
          theme: 'vs',
          language: props.language,
          value: props.code,
          automaticLayout: true,
          tabSize: 2,
          minimap: {
            enabled: false
          },
          scrollBeyondLastLine: false,
          overviewRulerBorder: false
        })

        editor.onDidChangeModelContent(() => {
          emit('change', editor.getValue())
        })

        editor.setValue(props.code)
      }

      onUnmounted(() => {
        editor.dispose()
        editor = null
      })

      watch(
        () => props.code,
        () => {
          nextTick(() => initMonacoEditor())
        },
        {
          immediate: true
        }
      )

      return {
        containerRef
      }
    }
  })
</script>

<template>
  <div id="monaco-editor" ref="containerRef"></div>
</template>

<style lang="scss">
  #monaco-editor {
    height: 360px;
  }
</style>
