import { MUTATIONS, ACTIONS } from './consts'

export default {
  [ACTIONS.INIT] ({ dispatch }) {
    return Promise.all([
      dispatch(ACTIONS.LOAD_POSTS),
      dispatch(ACTIONS.LOAD_TAGS),
    ])
  },
  [ACTIONS.LOAD_POSTS] ({ commit }) {
    return this.$axios.$get(`api/posts`, { params: { target: 'front' } })
      .then(list => commit(MUTATIONS.SET_POSTS, list))
  },
  [ACTIONS.LOAD_TAGS] ({ commit }) {
    return this.$axios.$get(`api/tags`)
      .then(list => commit(MUTATIONS.SET_TAGS, list))
  },
}
