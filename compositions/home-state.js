import { computed, getCurrentInstance } from '@vue/composition-api'
import { ACTIONS, DATA, name } from '../store/home/consts'

export function fetchHomeData ($store) {
  return $store.dispatch(name + '/' + ACTIONS.INIT)
}

export function useHomeState () {
  const { $store } = getCurrentInstance()

  return {
    posts: computed(() => $store.state[name][DATA.POSTS]),
    tags: computed(() => $store.state[name][DATA.TAGS]),
  }
}
