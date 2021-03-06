import * as types from './mutation-types'
import { getField, updateField } from 'vuex-map-fields'
import * as db from '../lib/db'

const TRANSITION_DURATION = 0.3

export const state = () => ({
  themeTransition: false,
  theme: db.get('ui.theme') || 'dark',
  zenMode: false
})

export const getters = {
  getField
}

export const mutations = {
  updateField,

  [types.SET_THEME] (state, theme) {
    state.theme = theme
  },

  [types.SET_THEME_TRANSITION] (state, transition) {
    state.themeTransition = typeof transition !== 'undefined'
      ? Boolean(transition)
      : !state.transition
  }
}

export const actions = {
  toggleTheme ({ dispatch, commit, state }) {
    dispatch('setThemeTransition')
    const theme = state.theme === 'dark' ? 'light' : 'dark'
    commit(types.SET_THEME, theme)

    db.set('ui.theme', theme)
  },

  setThemeTransition ({ commit }) {
    commit(types.SET_THEME_TRANSITION, true)

    setTimeout(() => {
      commit(types.SET_THEME_TRANSITION, false)
    }, TRANSITION_DURATION * 1000)
  }
}
