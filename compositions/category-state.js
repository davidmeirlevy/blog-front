import { computed, onServerPrefetch, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/category/consts'

export default function useCategoryState () {
  const { $store, $route } = getCurrentInstance()
  const category = $route.params.category

  const promise = $store.dispatch(name + '/' + ACTIONS.INIT, category)
  onServerPrefetch(() => promise)
  return {
    posts: computed(() => $store.state[name][DATA.POSTS]),
    metadata: computed(() => $store.state[name][DATA.METADATA]),
  }
}
