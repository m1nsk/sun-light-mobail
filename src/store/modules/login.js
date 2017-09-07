import { createSecret } from 'api/index'
// initial state
const state = {
  token: ''
}

// getters
const getters = {
  getToken: state => state.token
}

// actions
const actions = {
  getToken ({ commit }, payload) {
    let userData = {
      fio: payload.fio,
      phone: payload.phone
    }
    console.log(userData)
    let promise = createSecret(userData)
    promise.then((response) => {
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  }
}

// mutations
const mutations = {
  setToken (state, token) {
    state.token = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
