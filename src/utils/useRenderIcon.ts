import { h, type Component } from "vue"
import { NIcon } from 'naive-ui'

export function renderIcon(icon: Component) {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}
