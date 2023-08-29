import { nextTick, ref } from 'vue'
export const useReload = () => {
  const isReload = ref(true)

  const reload = () => {
    isReload.value = false
    nextTick(() => {
      isReload.value = true
    })
  }

  return {
    isReload,
    reload
  }
}
