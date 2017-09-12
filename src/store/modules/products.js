import { getProduct, toggleLike } from 'api/index'

// initial state
const state = {
  card: [
    {
      id: ''
    }
  ],
  productItem: {},
  productItemLoaded: false,
  productItemList: [],
  reloadProductFlag: false,
  loadedProductFlag: false,
  totalProductCount: 0,
  productCounter: 0,
  columnNum: 2
}


// getters
const getters = {
  productCode: state => state.card[0],
  getProductsItem: state => state.productItem,
  getProductItemLoaded: state => state.productItemLoaded,
  getProductItemList: state => state.productItemList,
  getProductReloadStatus: state => state.reloadProductFlag,
  getProductLoadedFlag: state => state.loadedProductFlag
}

// actions
const actions = {
  getProduct ({ commit }, payload) {
    let promise = getProduct(payload.id)
    promise.then((response) => {
      commit('setProduct', response.data.data)
      state.productItemLoaded =true
    })
  },
  getProductList ({commit, state, rootState, rootGetters}, payloadFunction) {
    state.reloadProductFlag = true
    let payload = rootGetters.getFilterForResponse
    payload.sort = 'id'
    payload.order = 'asc'
    payload.take = (function () {
      if (!state.loadedProductFlag) {
        // debugger
        let restCount = Math.ceil(rootState.properties.windowSize.height / rootState.properties.bannerSize.height)
        return restCount - state.productCounter % restCount
      }
      return 0
    })()
    payload.skip = state.productCounter
    let promise = payloadFunction (payload)
    promise.then(response => {
      state.productCounter += payload.take
      state.totalProductCount = response.data.totalCount
      commit('setProductItemList', response.data.data)
      state.reloadProductFlag = false
      if (state.productCounter >= state.totalProductCount) {
        state.loadedProductFlag = true
      }
    })
  },
  toggleLike ({ commit,state }, payload) {
    let promise = toggleLike(payload.id)
    promise.then(response => {
      commit('setProductLike', payload.id)
    })
  }
}

// mutations
const mutations = {
  setCardCode (state, id) {
    state.card = [
      {
        id: id
      }
    ]
  },
  setProduct (state, product) {
    state.productItem = product
  },
  setProductItemList (state, productItemsList) {
    for (let index = 0; index < productItemsList.length; index++) {
      state.productItemList.push(productItemsList[index])
    }
  },
  setProductLike (state, id) {
    for (let index = 0; index < state.productItemList.length; index++) {
      if (state.productItemList[index].id == id) {
        state.productItemList[index].like = !state.productItemList[index].like
      }
    }
  },
  setProductsToDefault (state) {
    state.loadedProductFlag = false
    state.reloadProductFlag = false
    state.productItemList = []
    state.totalProductCount = 0
    state.productCounter = 0
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
