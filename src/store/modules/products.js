import { getProduct, toggleProductLike } from 'api/index'

// initial state
const state = {
  card: [
    {
      id: ''
    }
  ],
  productItemLoaded: false
}


// getters
const getters = {
  productCode: state => state.card[0],
  getProductItem: state => state.productItem,
}

// actions
const actions = {
}

// mutations
const mutations = {
  setCardCode (state, id) {
    state.card = [
      {
        id: id
      }
    ]
  }
}


export default {
  state,
  getters,
  actions,
  mutations
}
