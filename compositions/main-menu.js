import { computed, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, GETTERS, name } from '../store/menus/consts'

export function fetchMenuLinks ($store) {
  return $store.dispatch(name + '/' + ACTIONS.FETCH_MENU_LINKS)
}

export function useMenuLinks () {
  const { $store } = getCurrentInstance()
  return computed(() => $store.getters[name + '/' + GETTERS.MAIN_MENU_LINKS])
}
