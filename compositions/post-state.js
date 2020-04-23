import { computed, onServerPrefetch, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/post/consts'

export default function usePostState () {
  const { $store, $route } = getCurrentInstance()

  const promise = $store.dispatch(name + '/' + ACTIONS.INIT, $route.params)
  onServerPrefetch(() => promise)
  return {
    metadata: computed(() => $store.state[name][DATA.METADATA]),
  }
}
