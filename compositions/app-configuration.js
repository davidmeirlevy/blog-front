import { computed, getCurrentInstance } from '@vue/composition-api'

export function fetchConfiguration ($store) {
  return $store.dispatch('init')
}

export function useConfiguration () {
  const { $store } = getCurrentInstance()
  return computed(() => $store.state.config)
}
