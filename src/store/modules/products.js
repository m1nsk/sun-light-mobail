// initial state
const state = {
  card: [
    {
      id: ''
    }
  ]
}

// getters
const getters = {
  productCode: state => state.card[0]
}

// actions
const actions = {
  //
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
