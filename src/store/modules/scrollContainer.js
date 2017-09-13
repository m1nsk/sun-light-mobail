import { toggleMarketLike, getMarketList } from 'api/index'

// initial state
const state = {
  scrollItemList: [],
  reloadScrollFlag: false,
  loadedScrollFlag: false,
  totalScrollCount: 0,
  scrollCounter: 0,
  columnNum: 1
}


// getters
const getters = {
  getScrollItemList: state => state.scrollItemList,
  getScrollReloadStatus: state => state.reloadScrollFlag,
  getScrollLoadedFlag: state => state.loadedScrollFlag
}

// actions
const actions = {
  getScrollList ({commit, state, rootState, rootGetters}, scrollData) {
    console.log(scrollData, 'scrollData')
    let payload = scrollData.payload
    let getFunction = scrollData.getFunction
    state.reloadScrollFlag = true
    payload.sort = 'id'
    payload.order = 'asc'
    payload.take = (function () {
      if (!state.loadedScrollFlag) {
        let restCount = Math.ceil(rootState.properties.windowSize.height / rootState.properties.bannerSize.height)
        return restCount - state.scrollCounter % restCount
      }
      return 0
    })()
    console.log(payload, 'payload')
    payload.skip = state.scrollCounter
    let promise = getFunction (payload)
    promise.then(response => {
      state.scrollCounter += payload.take
      state.totalScrollCount = response.data.totalCount
      commit('setScrollItemList', response.data.data)
      state.reloadScrollFlag = false
      if (state.scrollCounter >= state.totalScrollCount) {
        state.loadedScrollFlag = true
      }
    })
  }
}

// mutations
const mutations = {
  setScrollItemList (state, scrollItemList) {
    for (let index = 0; index < scrollItemList.length; index++) {
      state.scrollItemList.push(scrollItemList[index])
    }
  },
  setScrollLike (state, id) {
    for (let index = 0; index < state.scrollItemList.length; index++) {
      if (state.scrollItemList[index].id == id) {
        state.scrollItemList[index].like = !state.scrollItemList[index].like
      }
    }
  },
  setScrollToDefault (state) {
    state.loadedScrollFlag = false
    state.reloadScrollFlag = false
    state.scrollItemList = []
    state.totalScrollCount = 0
    state.scrollCounter = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
