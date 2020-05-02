import { computed, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/post/consts'

export function usePostState () {
  const { $store } = getCurrentInstance()

  return {
    post: computed(() => $store.state[name][DATA.METADATA]),
  }
}

export function useFetchPost ($store, $route, error) {
  return $store.dispatch(name + '/' + ACTIONS.INIT, $route.params).catch(() => {
    error({ statusCode: 404, message: 'Post not found' })
  })
}
