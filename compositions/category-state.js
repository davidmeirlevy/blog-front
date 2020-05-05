import { computed, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/category/consts'

export function fetchCategory ($store, $route) {
  const category = $route.params.category
  return $store.dispatch(name + '/' + ACTIONS.INIT, category)
}

export function useCategoryState () {
  const { $store } = getCurrentInstance()
  return {
    posts: computed(() => $store.state[name][DATA.POSTS]),
    metadata: computed(() => $store.state[name][DATA.METADATA]),
  }
}
