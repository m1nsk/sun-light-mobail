import { toggleProductLike, getProductList } from 'api/index'

// initial state
const state = {
  productList: [],
  reloadProductFlag: false,
  loadedProductFlag: false,
  totalProductCount: 0,
  scrollCounter: 0,
  columnNum: 2
}


// getters
const getters = {
}

// actions
const actions = {
  getProductList ({commit, state, rootState}, scrollData) {
    let payload = scrollData.payload
    state.reloadProductFlag = true
    payload.sort = 'id'
    payload.order = 'asc'
    payload.take = (function () {
      if (!state.loadedProductFlag) {
        let restCount = Math.ceil(rootState.properties.windowSize.height / rootState.properties.bannerSize.height)
        return restCount - state.scrollCounter % restCount
      }
      return 0
    })()
    payload.skip = state.scrollCounter
    let promise = getProductList(payload)
    promise.then(response => {
      state.scrollCounter += payload.take
      state.totalProductCount = response.data.totalCount
      commit('setProductList', response.data.data)
      state.reloadProductFlag = false
      if (state.scrollCounter >= state.totalProductCount) {
        state.loadedProductFlag = true
      }
    })
  }
}

// mutations
const mutations = {
  setProductList (state, productItemList) {
    for (let index = 0; index < productItemList.length; index++) {
      state.productItemList.push(productItemList[index])
    }
  },
  setProductToDefault (state) {
    state.loadedScrollFlag = false
    state.reloadScrollFlag = false
    state.productItemList = []
    state.totalScrollCount = 0
    state.productCounter = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
