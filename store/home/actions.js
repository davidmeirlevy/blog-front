import { MUTATIONS, ACTIONS, DATA } from './consts'

export default {
  [ACTIONS.INIT] ({ dispatch }) {
    return Promise.all([
      dispatch(ACTIONS.LOAD_POSTS),
      dispatch(ACTIONS.LOAD_TAGS),
    ])
  },
  [ACTIONS.LOAD_POSTS] ({ commit, state }) {
    if (state[DATA.POSTS] && state[DATA.POSTS].length) {
      return Promise.resolve(state[DATA.POSTS])
    }
    return this.$axios.$get(`api/posts`, { params: { target: 'front' } })
      .then(list => commit(MUTATIONS.SET_POSTS, list))
  },
  [ACTIONS.LOAD_TAGS] ({ commit, state }) {
    if (state[DATA.TAGS].length) {
      return Promise.resolve(state[DATA.TAGS])
    }
    return this.$axios.$get(`api/tags`)
      .then(list => commit(MUTATIONS.SET_TAGS, list))
  },
}
