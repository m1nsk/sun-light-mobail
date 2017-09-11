import { toggleMarketLike } from 'api/index'

// initial state
const state = {
  marketItemList: []
}


// getters
const getters = {
  getMarketItemList: state => state.marketItemList
}

// actions
const actions = {
  getMarkets ({commit, state}, payload) {
    payload.sort = 'id'
    payload.order = 'asc'
    let promise = getProductsList (payload)
    promise.then(response => {
      commit('setProductItemList', response.data.data)
    })
  },
  toggleMarketLike ({ commit,state }, payload) {
    let promise = toggleMarketLike(payload.id)
    promise.then(response => {
      commit('setMarketLike', payload.id)
    })
  }
}

// mutations
const mutations = {
  setMarketItemList (state, marketItemList) {
    for (let index = 0; index < marketItemList.length; index++) {
      state.marketItemList.push(marketItemList[index])
    }
  },
  clearMarketItemList (state) {
    state.marketItemList = []
  },
  setMarketLike (state, id) {
    for (let index = 0; index < state.marketItemList.length; index++) {
      if (state.marketItemList[index].id == id) {
        state.marketItemList[index].like = !state.marketItemList[index].like
      }
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
