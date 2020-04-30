import { onServerPrefetch, ref, watchEffect, getCurrentInstance } from '@vue/composition-api'

export default function useSearch (query) {
  const { $axios } = getCurrentInstance()
  const posts = ref(null)

  function getPosts () {
    if (query.value.trim().length < 2) {
      posts.value = []
      return Promise.resolve()
    }
    return $axios.$get(`api/posts`, { params: { q: query.value, target: 'front' } }).then(list => {
      posts.value = list
    })
  }

  watchEffect(getPosts)
  onServerPrefetch(getPosts)

  return {
    posts
  }
}
