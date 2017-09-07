import { getCategories } from 'api/index'

// initial state
const state = {
  categoryItems: [],
  categoryLoaded: false
}

// getters
const getters = {
  getCatalogItems: state => state.categoryItems,
  isCategoriesLoaded: state => state.categoryLoaded
}

// actions
const actions = {
  getCategories ({ commit }) {
    let promise = getCategories()
    promise.then((response) => {
      commit('setCatalogItems', response.data.data)
      commit('setCategoriesLoadedStatus', true)
    })
  }
}

// mutations
const mutations = {
  setCatalogItems (state, catalogItems) {
    state.categoryItems = catalogItems
  },
  setCategoriesLoadedStatus (state, status) {
    state.categoryLoaded = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
