import { inject } from 'vue'
import { editorInjectionKey } from '../context'

export const useEditorContext = () => {
  const editorContext = inject(editorInjectionKey)
  return {
    editorContext
  }
}
