import { getProduct, toggleLike, getProductsList } from 'api/index'

// initial state
const state = {
  card: [
    {
      id: ''
    }
  ],
  productItem: {},
  productItemList: [],
  productsLoaded: false
}


// getters
const getters = {
  productCode: state => state.card[0],
  getProductsItem: state => state.productItem,
  getProductItemList: state => state.productItemList,
  isProductsLoaded: state => state.productsLoaded
}

// actions
const actions = {
  getProduct ({ commit }, payload) {
    let promise = getProduct(payload.id)
    promise.then((response) => {
      commit('setProductItems', response.data.data)
      commit('setProductsLoadedStatus', true)
    })
  },
  getProducts ({commit, state}, payload) {
    payload.sort = 'id'
    payload.order = 'asc'
    let promise = getProductsList (payload)
    promise.then(response => {
      commit('setProductItemList', response.data.data)
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
  setProductItems (state, product) {
    state.productItem = product
  },
  setProductsLoadedStatus (state, status) {
    state.productsLoaded = status
  },
  setProductItemList (state, productItemsList) {
    for (let index = 0; index < productItemsList.length; index++) {
      state.productItemList.push(productItemsList[index])
    }
  },
  clearProductItemList (state) {
    state.productItemList = []
  },
  setProductLike (state, id) {
    for (let index = 0; index < state.productItemList.length; index++) {
      if (state.productItemList[index].id == id) {
        state.productItemList[index].like = !state.productItemList[index].like
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
