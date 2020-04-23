import { MUTATIONS, ACTIONS } from './consts'

export default {
  [ACTIONS.FETCH_MENU_LINKS] ({ commit }) {
    return this.$axios.$get('api/menus/main')
      .then(menu => commit(MUTATIONS.SET_MAIN_MENU, menu))
      .catch(() => null)
  }
}
