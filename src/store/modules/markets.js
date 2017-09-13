import { toggleMarketLike, getMarketList } from 'api/index'

// initial state
const state = {
}


// getters
const getters = {
}

// actions
const actions = {
  toggleMarketLike ({ commit,state }, payload) {
    let promise = toggleMarketLike(payload.id)
    promise.then(response => {
      commit('setMarketLike', payload.id)
    })
  }
}

// mutations
const mutations = {
}

export default {
  state,
  getters,
  actions,
  mutations
}
