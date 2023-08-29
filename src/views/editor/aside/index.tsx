import type { WritableComputedRef } from 'vue'
import { defineComponent, computed } from 'vue'
import { Close } from '@element-plus/icons-vue'
import FixedIcon from '../icons/fixed.vue'
import UnfixedIcon from '../icons/unfixed.vue'
import { useEditorContext } from '../hooks/useEditorContext'
import MapIcon from '../icons/map.vue'
import ContainerIcon from '../icons/container.vue'
import Base from './panes/base.vue'
import Container from './panes/container.vue'

import './style.scss'

export default defineComponent({
  setup() {
    const { editorContext } = useEditorContext()
    const active: WritableComputedRef<number> = computed({
      get() {
        return editorContext?.editorData?.aside?.activePane as number
      },
      set(newIndex) {
        editorContext!.editorData!.aside!.activePane = newIndex as number
      }
    })
    const tabs = [
      { label: '基本组件', icon: <MapIcon />, pane: <Base /> },
      { label: '容器组件', icon: <ContainerIcon />, pane: <Container /> }
    ]

    const paneContainer = computed(() => {
      const target = tabs[active.value]
      return target
    })

    const handleTabItem = (index: number) => {
      if (active.value === index) {
        active.value = -1
        return
      }
      active.value = index
    }

    const handleClose = () => {
      active.value = -1
    }

    const isTop: WritableComputedRef<boolean> = computed({
      get() {
        return editorContext?.editorData?.aside?.isPaneTop as boolean
      },
      set(topStatus) {
        editorContext!.editorData!.aside.isPaneTop = topStatus as boolean
      }
    })

    const toggleTop = () => {
      isTop.value = !isTop.value
    }

    return () => {
      return (
        <aside class="aside-wrapper">
          <div class="aside-tabs">
            {tabs.map((item, index) => (
              <div
                class={[
                  'aside-tab',
                  {
                    'is-active': active.value === index
                  }
                ]}
                key={index}
                onClick={() => handleTabItem(index)}
              >
                <el-icon size={20}>{item.icon}</el-icon>
                <span class="text-xs">{item.label}</span>
              </div>
            ))}
          </div>
          <div class={['aside-pane', { 'is-top': isTop.value }]} v-show={active.value > -1}>
            <div class="absolute left-0 top-1 w-full px-3 py-2 flex justify-between items-center">
              <span class="text-sm font-bold">{paneContainer.value?.label}</span>
              <div class="flex justify-between items-center gap-3">
                <el-icon class="cursor-pointer" color="#666" onClick={toggleTop}>
                  {isTop.value ? <FixedIcon /> : <UnfixedIcon />}
                </el-icon>
                <el-icon class="cursor-pointer" onClick={handleClose}>
                  <Close />
                </el-icon>
              </div>
            </div>
            {paneContainer.value?.pane}
          </div>
        </aside>
      )
    }
  }
})
