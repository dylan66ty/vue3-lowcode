import { ElIcon } from 'element-plus'
import type { RenderFunction, StyleValue, VNode } from 'vue'
import {
  createVNode,
  ref,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  render,
  computed
} from 'vue'

interface DropdownOptions {
  content?: RenderFunction | Array<Record<string, any>>
  el?: HTMLElement
  offsetX?: number
  offsetY?: number
}

interface DropdownState {
  options: DropdownOptions
  visible: boolean
  top: number
  left: number
}

// eslint-disable-next-line vue/one-component-per-file
const DropdownComponent = defineComponent({
  props: {
    options: {
      type: Object,
      default: () => ({})
    }
  },
  setup(_props, { expose }) {
    const state = reactive<DropdownState>({
      options: {},
      visible: true,
      top: 0,
      left: 0
    })

    const style = computed(() => {
      const style: StyleValue = {
        top: state.top + 'px',
        left: state.left + 'px'
      }
      return style
    })

    expose({
      show(options: DropdownOptions) {
        state.visible = true
        state.options.content = options.content
        const { left, top } = options.el!.getBoundingClientRect()
        state.top = top + options.offsetY!
        state.left = left + options.offsetX!
      },
      hide() {
        state.visible = false
      }
    })

    const dropdownRef = ref<HTMLElement>()

    const onmousedownDocument = (e: MouseEvent) => {
      if (!dropdownRef.value?.contains(e.target as HTMLElement)) {
        state.visible = false
      }
    }

    const contentVNode = computed(() => {
      const content = state.options.content
      if (!content) return
      if (Array.isArray(content)) {
        return content.map((item, index) => (
          <DropdownItem key={index} handler={item.handler}>
            <ElIcon>{item.icon}</ElIcon>
            <span>{item.label}</span>
          </DropdownItem>
        ))
      }

      return (state.options.content as RenderFunction)()
    })

    onMounted(() => {
      document.body.addEventListener('mousedown', onmousedownDocument, true)
    })
    onUnmounted(() => {
      document.body.removeEventListener('mousedown', onmousedownDocument)
    })

    return () => {
      return (
        <div class="dropdown-service" style={style.value} ref={dropdownRef} v-show={state.visible}>
          {contentVNode.value}
        </div>
      )
    }
  }
})

let vm: VNode
export const $dropdown = (options: DropdownOptions) => {
  if (!vm) {
    vm = createVNode(DropdownComponent, { options })
    const container = document.createElement('div')
    render(vm, container)
    document.body.appendChild(container.firstChild!)
  }
  const { show, hide } = vm.component?.exposed || {}
  show && show(options)
  return () => hide()
}

// eslint-disable-next-line vue/one-component-per-file
export const DropdownItem = defineComponent({
  props: {
    handler: {
      type: Function,
      default: () => {}
    }
  },
  setup(props, { slots }) {
    const handleClick = (e: MouseEvent) => {
      props.handler && props.handler(e)
    }

    return () => {
      return (
        <div class="dropdown-option flex items-center gap-1" onClick={(e) => handleClick(e)}>
          {{
            default: () => slots.default?.()
          }}
        </div>
      )
    }
  }
})
