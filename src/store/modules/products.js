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
}


// getters
const getters = {
  productCode: state => state.card[0],
  getProductsItem: state => state.productItem,
  getProductItemLoaded: state => state.productItemLoaded,
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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
