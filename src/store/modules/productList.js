import { toggleProductLike, getProductList } from 'api/index'

// initial state
const state = {
  productItemList: [],
  reloadProductFlag: false,
  loadedProductFlag: false,
  totalProductCount: 0,
  productCounter: 0,
  columnNum: 2,
  productsOnPage: 0
}


// getters
const getters = {
  productItemList: state => state.productItemList,
  reloadProductFlag: state => state.reloadProductFlag,
  loadedProductFlag: state => state.loadedProductFlag,
  totalProductCount: state => state.totalProductCount,
  productCounter: state => state.productCounter,
  productsOnPage: state => state.productsOnPage
}

// actions
const actions = {
  toggleProductLike ({ commit,state }, payload) {
    let promise = toggleProductLike(payload.id)
    promise.then(response => {
      console.log(response.data, 'like fine')
      commit('setProductLike', payload.id)
    })
  },
  getProductList ({commit, state, rootState}, productData) {
    let payload = productData.payload
    let that = this
    this.productsOnPage = (() => {
      if (!this.loadedProductFlag) {
        let restCount = Math.ceil(rootState.parameters.windowSize.height / rootState.parameters.bannerSize.height)
        return restCount - that.productCounter % restCount
      }
      return 0
    })()
    state.reloadProductFlag = true
    payload.sort = 'id'
    payload.order = 'asc'
    payload.take = (function () {
      if (!state.loadedProductFlag) {
        let restCount = Math.ceil(rootState.properties.windowSize.height / rootState.properties.bannerSize.height)
        return restCount - state.productCounter % restCount
      }
      return 0
    })()
    payload.skip = state.productCounter
    let promise = getProductList(payload)
    promise.then(response => {
      state.productCounter += payload.take
      state.totalProductCount = response.data.totalCount
      commit('setProductList', response.data.data)
      state.reloadProductFlag = false
      if (state.productCounter >= state.totalProductCount) {
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
    state.loadedProductFlag = false
    state.reloadProductFlag = false
    state.productItemList = []
    state.totalProductCount = 0
    state.productCounter = 0
  },
  setProductLike (state, id) {
    for (let index = 0; index < state.productItemList.length; index++) {
      if (state.productItemList[index].id === id) {
        state.productItemList[index].like = !state.productItemList[index].like
      }
    }
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
