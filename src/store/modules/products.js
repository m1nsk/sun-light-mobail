// initial state
const state = {
  productList: [
    {
      img: '/static/logo.png',
      price: 1000,
      isHit: true,
      id: 0
    },
    {
      img: '/static/logo.png',
      price: 2000,
      isHit: false,
      id: 1
    },
    {
      img: '/static/logo.png',
      price: 3000,
      isHit: true,
      id: 2
    },
    {
      img: '/static/logo.png',
      price: 4000,
      isHit: false,
      id: 3
    },
    {
      img: '/static/logo.png',
      price: 5000,
      isHit: false,
      id: 4
    }
  ]
}

// getters
const getters = {
  allProducts: state => state.productList
}

// actions
const actions = {
  //
}

// mutations
const mutations = {
  //
}

export default {
  state,
  getters,
  actions,
  mutations
}
