
import { ref } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  function enable() {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }

  function disable() {
    isDark.value = false
    document.documentElement.classList.remove('dark')
  }

  function toggleDarkMode() {
    console.log(isDark.value);

    if (isDark.value) disable()
    else enable()
  }

  function isDarkMode() {
    return isDark.value;
  }

  // Optionally sync with localStorage or system prefs here

  return { isDark, enable, disable, toggleDarkMode, isDarkMode }
}
