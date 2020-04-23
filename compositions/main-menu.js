import { computed, onServerPrefetch, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, GETTERS, name } from '../store/menus/consts'

export default function useMenuLinks () {
  const { $store } = getCurrentInstance()

  const promise = $store.dispatch(name + '/' + ACTIONS.FETCH_MENU_LINKS)

  onServerPrefetch(() => promise)
  return computed(() => $store.getters[name + '/' + GETTERS.MAIN_MENU_LINKS])
}
