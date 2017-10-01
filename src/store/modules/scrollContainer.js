import { getProductList, getMarketList, getFavorites, getOrdered, toggleProductLike, toggleMarketLike } from 'api/index'

// initial state
const state = {
  products: {
    scrollItemList: [],
    reloadScrollFlag: false,
    loadedScrollFlag: false,
    totalScrollCount: 0,
    scrollCounter: 0,
    columnNum: 2,
    getFunction: getProductList
  },
  markets: {
    scrollItemList: [],
    reloadScrollFlag: false,
    loadedScrollFlag: false,
    totalScrollCount: 0,
    scrollCounter: 0,
    columnNum: 1,
    getFunction: getMarketList
  },
  favorites: {
    scrollItemList: [],
    reloadScrollFlag: false,
    loadedScrollFlag: false,
    totalScrollCount: 0,
    scrollCounter: 0,
    columnNum: 2,
    getFunction: getFavorites
  },
  ordered: {
    scrollItemList: [],
    reloadScrollFlag: false,
    loadedScrollFlag: false,
    totalScrollCount: 0,
    scrollCounter: 0,
    columnNum: 2,
    getFunction: getOrdered
  },
  currentStore: 'product'
}


// getters
const getters = {
  scrollItemList: state => state[state.currentStore].scrollItemList,
  scrollProductList: state => state.products.scrollItemList,
  scrollMarketList: state => state.markets.scrollItemList,
  scrollFavoritesList: state => state.favorites.scrollItemList,
  scrollOrderedList: state => state.ordered.scrollItemList,
  reloadScrollFlag: state => state[state.currentStore].reloadScrollFlag,
  loadedScrollFlag: state => state[state.currentStore].loadedScrollFlag,
  totalScrollCount: state => state[state.currentStore].totalScrollCount,
  scrollCounter: state => state[state.currentStore].scrollCounter,
  columnNum: state => state[state.currentStore].columnNum
}


// actions
const actions = {
  getScrollList ({commit, state, rootState, rootGetters}, scrollData) {
    let payload = scrollData.payload
    commit('setReloadScrollFlag', true)
    payload.sort = 'id'
    payload.order = 'asc'
    payload.take = (function () {
      if (!state[state.currentStore].loadedScrollFlag) {
        let restCount = rootGetters.restCount
        return restCount - state[state.currentStore].scrollCounter % restCount
      }
      return 0
    })()
    payload.skip = state[state.currentStore].scrollCounter

    let promise = state[state.currentStore].getFunction (payload)
    promise.then(response => {
      commit('incrScrollCounter', payload.take)
      commit('setTotalScrollCount', response.data.totalCount)
      commit('setScrollItemList', response.data.data)
      commit('setReloadScrollFlag', false)
      if (state[state.currentStore].scrollCounter >= state[state.currentStore].totalScrollCount) {
        commit('setLoadedScrollFlag', true)
      }
    })
  },
  toggleProductLike ({commit}, id) {
    let promise = toggleProductLike(id)
    promise.then((response) => {
      console.log(id)
      commit('setProductLike', id)
    })
  },
  toggleMarketLike ({commit}, id) {
    let promise = toggleMarketLike(id)
    promise.then((response) => {
      commit('setMarketLike', id)
    })
  }
}

// mutations
const mutations = {
  setReloadScrollFlag (state, value) {
    state[state.currentStore].reloadScrollFlag = value
  },
  setLoadedScrollFlag (state, value) {
    state[state.currentStore].loadedScrollFlag = value
  },
  setTotalScrollCount (state, value) {
    state[state.currentStore].totalScrollCount = value
  },
  setScrollCounter (state, value) {
    state[state.currentStore].scrollCounter = value
  },
  incrScrollCounter (state, value) {
    state[state.currentStore].scrollCounter += value
  },
  setScrollItemList (state, scrollItemList) {
    state[state.currentStore].scrollItemList = state[state.currentStore].scrollItemList.concat(scrollItemList)
  },
  setProductLike (state, id) {
    for (let index = 0; index < state.products.scrollItemList.length; index++) {
      if (state.products.scrollItemList[index].id === id) {
        state.products.scrollItemList[index].like = !state.products.scrollItemList[index].like
      }
    }
  },
  setMarketLike (state, id) {
    for (let index = 0; index < state.markets.scrollItemList.length; index++) {
      if (state.markets.scrollItemList[index].id === id) {
        state.markets.scrollItemList[index].like = !state.markets.scrollItemList[index].like
      }
    }
  },
  setScrollToDefault (state) {
    state[state.currentStore].reloadScrollFlag = false
    state[state.currentStore].loadedScrollFlag = false
    state[state.currentStore].totalScrollCount = 0
    state[state.currentStore].scrollCounter = 0
    state[state.currentStore].scrollItemList = []
  },
  setNamedScrollToDefault (state, name) {
    state[name].reloadScrollFlag = false
    state[name].loadedScrollFlag = false
    state[name].totalScrollCount = 0
    state[name].scrollCounter = 0
    state[name].scrollItemList = []
  },
  setCurrentStore (state, currentStore){
    state.currentStore = currentStore
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
