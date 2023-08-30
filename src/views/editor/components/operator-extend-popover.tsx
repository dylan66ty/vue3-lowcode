import { defineComponent, createVNode, render, reactive, onMounted, onUnmounted, ref } from 'vue'
import type { RenderFunction, VNode, PropType } from 'vue'
import { Close } from '@element-plus/icons-vue'
import { ElIcon } from 'element-plus'

interface PopoverOptions {
  content: RenderFunction
}

const PopoverComponent = defineComponent({
  props: {
    options: {
      type: Object as PropType<PopoverOptions>,
      default: () => ({})
    }
  },
  setup(props, { expose }) {
    const state = reactive<Record<string, any>>({
      visible: false,
      options: props.options
    })
    const popoverRef = ref<HTMLElement>()

    const close = () => {
      state.visible = false
    }

    expose({
      show(options: PopoverOptions) {
        state.visible = true
        state.options = options
      }
    })

    const handleClickOutside = (e: MouseEvent) => {
      if (!popoverRef.value?.contains(e.target as HTMLElement)) {
        close()
      }
    }

    onMounted(() => {
      document.body.addEventListener('click', handleClickOutside, true)
    })
    onUnmounted(() => {
      document.body.removeEventListener('click', handleClickOutside)
    })

    return () => {
      return (
        <div class="operator-extend-popover shadow-md shadow-gray-300" ref={popoverRef} v-show={state.visible}>
          <div class="flex justify-between p-4">
            <div></div>
            <div class="w-6 h-6 flex items-center justify-center cursor-pointer hover:bg-gray-100 active:bg-gray-200" onClick={close}>
              <ElIcon>
                <Close />
              </ElIcon>
            </div>
          </div>
          <div class="operator-extend-body">{state.options?.content?.()}</div>
        </div>
      )
    }
  }
})

let vm: VNode

export function $operatorExtend(options: PopoverOptions) {
  if (!vm) {
    const el = document.createElement('div')
    vm = createVNode(PopoverComponent, { options })
    render(vm, el)
    document.body.appendChild(el.firstElementChild!)
  }
  // 将组件渲染到这个el元素上
  const { show } = vm.component?.exposed || {}

  show && show(options)
}
