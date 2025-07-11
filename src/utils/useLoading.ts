
import { ElLoading } from 'element-plus';
import { shallowRef } from 'vue';

type LoadingOptions = Partial<Parameters<typeof ElLoading.service>[0]>

let loadingInstance: ReturnType<typeof ElLoading.service> | null = null
const isLoading = shallowRef(false)

export function useLoading() {
  function open(options?: LoadingOptions) {
    if (loadingInstance) return loadingInstance

    isLoading.value = true

    loadingInstance = ElLoading.service({
      lock: options?.lock ?? true,
      text: options?.text ?? 'Loading...',
      background: options?.background ?? 'rgba(0, 0, 0, 0.7)',
    })

    const originalClose = loadingInstance.close
    loadingInstance.close = () => {
      originalClose.call(loadingInstance)
      loadingInstance = null
      isLoading.value = false
    }

    return loadingInstance
  }

  function close() {
    if (loadingInstance) {
      loadingInstance.close()
    }
  }

  return { open, close, isLoading }
}
