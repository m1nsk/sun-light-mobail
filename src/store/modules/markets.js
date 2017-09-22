import { toggleMarketLike, getMarketList } from 'api/index'

// initial state
const state = {
  marketListReloadFlag: false
}


// getters
const getters = {
  getMarketListReload: state => state.marketListReloadFlag,
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
  setMarketListReloadFlag (state, flag) {
    state.marketListReloadFlag = flag
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
