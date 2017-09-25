// initial state
const state = {
  marketListReloadFlag: false,
  productsListReloadFlag: false
}


// getters
const getters = {
  getMarketListReload: state => state.marketListReloadFlag,
  getProductListReload: state => state.productsListReloadFlag
}

// actions
const actions = {
}

// mutations
const mutations = {
  setMarketListReloadFlag (state, flag) {
    state.marketListReloadFlag = flag
  },
  setProductListReloadFlag (state, flag) {
    state.productsListReloadFlag = flag
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
