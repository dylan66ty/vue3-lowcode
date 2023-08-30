import { ElDialog, ElButton } from 'element-plus'
import { createVNode, defineComponent, reactive, render } from 'vue'
import type { PropType, RenderFunction, VNode } from 'vue'
import MonacoEditor from './monaco-editor.vue'

export interface DialogOptions {
  title?: string
  language?: 'javascript' | 'json'
  content?: string
  code?: string
  onConfirm?: (content?: string) => void
  footer?: boolean
  default?: RenderFunction
}

const DialogComponent = defineComponent({
  props: {
    options: {
      type: Object as PropType<DialogOptions>,
      default: () => ({})
    }
  },
  setup(props, ctx) {
    const state = reactive({
      options: props.options,
      visible: false
    })
    ctx.expose({
      // 让外界可以调用组件方法
      show(options: DialogOptions) {
        state.options = options
        state.visible = true
      },
      hide() {
        state.visible = false
      }
    })
    const onCancel = () => {
      state.visible = false
    }
    const onConfirm = () => {
      state.options.onConfirm && state.options.onConfirm(state.options.code)
    }
    return () => {
      return (
        <ElDialog v-model={state.visible} title={state.options.title} width={600}>
          {{
            // @ts-ignore: input rows
            default:
              state.options.default ||
              (() => (
                <MonacoEditor language={state.options.language} code={state.options.content} onChange={(val: string) => (state.options.code = val)} />
              )),
            footer: () =>
              state.options.footer && (
                <div>
                  <ElButton onClick={onCancel}>取消</ElButton>
                  <ElButton type="primary" onClick={onConfirm}>
                    确定
                  </ElButton>
                </div>
              )
          }}
        </ElDialog>
      )
    }
  }
})

let vm: VNode
export function $dialog(options: DialogOptions) {
  if (!vm) {
    const el = document.createElement('div')
    vm = createVNode(DialogComponent, { options })
    render(vm, el)
    document.body.appendChild(el.firstElementChild!)
  }
  // 将组件渲染到这个el元素上
  const { show, hide } = vm.component?.exposed || {}
  show && show(options)

  return () => hide()
}
