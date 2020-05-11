import { useState } from 'vuex-composition-helpers/dist'

export function fetchConfiguration ($store) {
  return $store.dispatch('init')
}

export function useConfiguration () {
  const { config } = useState(['config'])
  return config
}
