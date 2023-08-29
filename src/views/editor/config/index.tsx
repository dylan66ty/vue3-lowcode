import type { ComponentData } from '../types'
import { register } from './register'

export const createEditorConfig = () => {
  const componentList: ComponentData[] = []
  const componentMap: Record<string, ComponentData> = {}
  const registerConfig = {
    componentList,
    componentMap,
    register: (component: ComponentData) => {
      componentList.push(component)
      componentMap[component.key] = component
    }
  }
  register(registerConfig)
  return registerConfig
}
