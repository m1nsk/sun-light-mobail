import { toggleMarketLike, getMarketList } from 'api/index'

// initial state
const state = {
  marketItemList: [],
  reloadMarketFlag: false,
  loadedMarketFlag: false,
  totalMarketCount: 0,
  marketCounter: 0,
  columnNum: 1
}


// getters
const getters = {
  getMarketItemList: state => state.marketItemList,
  getMarketReloadStatus: state => state.reloadMarketFlag,
  getMarketLoadedFlag: state => state.loadedMarketFlag
}

// actions
const actions = {
  getMarketList ({commit, state, rootState, rootGetters}, payload) {
    state.reloadMarketFlag = true
    payload.sort = 'id'
    payload.order = 'asc'
    payload.take = (function () {
      if (!state.loadedMarketFlag) {
        // debugger
        let restCount = Math.ceil(rootState.properties.windowSize.height / rootState.properties.bannerSize.height)
        return restCount - state.marketCounter % restCount
      }
      return 0
    })()
    console.log(payload, 'payload')
    payload.skip = state.marketCounter
    let promise = getMarketList (payload)
    promise.then(response => {
      state.marketCounter += payload.take
      state.totalMarketCount = response.data.totalCount
      commit('setMarketItemList', response.data.data)
      state.reloadMarketFlag = false
      if (state.marketCounter >= state.totalMarketCount) {
        state.loadedMarketFlag = true
      }
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
  setMarketLike (state, id) {
    for (let index = 0; index < state.marketItemList.length; index++) {
      if (state.marketItemList[index].id == id) {
        state.marketItemList[index].like = !state.marketItemList[index].like
      }
    }
  },
  setMarketsToDefault (state) {
    state.loadedMarketFlag = false
    state.reloadMarketFlag = false
    state.marketItemList = []
    state.totalMarketCount = 0
    state.marketCounter = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
