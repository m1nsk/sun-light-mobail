import { getProduct } from 'api/index'

// initial state
const state = {
  card: [
    {
      id: ''
    }
  ],
  productsItems: {
    bannerImage: '/static/logo.png'
  },
  productsLoaded: false
}

// getters
const getters = {
  productCode: state => state.card[0],
  getProductsItems: state => state.productsItems,
  isProductsLoaded: state => state.productsLoaded
}

// actions
const actions = {
  getProducts ({ commit }, payload) {
    let promise = getProduct(payload.id)
    promise.then((response) => {
      commit('setProductItems', response.data.data)
      commit('setProductsLoadedStatus', true)
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
  setProductItems (state, catalogItems) {
    state.productsItems = catalogItems
  },
  setProductsLoadedStatus (state, status) {
    state.productsLoaded = status
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
