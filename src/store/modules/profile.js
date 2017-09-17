import { createSecret, getToken, setAxiosToken, putOrder } from 'api/index'
// initial state
const state = {
  profile: JSON.parse(localStorage.getItem('profile') === null ? '{}' : localStorage.getItem('profile')) || {}
}

// getters
const getters = {
  getProfile: state => state.profile
}

// actions
const actions = {
  getSecretCode ({ commit, state }, payload) {
    console.log(payload, 'payload')
    console.log(state.profile, 'profile.fio')
    let profile = state.profile
    let userData = {
      fio: payload.fio || profile.fio,
      phone: payload.phone || profile.phone,
      mail: payload.mail || profile.mail,
    }
    let promise = createSecret(userData)
    promise.then((response) => {
      commit('setProfile', userData)
      payload.router.router.push(payload.router.params)
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  },
  getToken ({ commit }, payload) {
    let secretCode = {
      secret: payload.code
    }
    console.log(secretCode)
    let promise = getToken(secretCode)
    promise.then((response) => {
      console.log(response.data)
      if (response.data.success === true) {
        commit('setProfile', {token: response.data.token})
        payload.router.router.push(payload.router.params)
      }
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  },
  getOrderStatus ({ commit }, payload) {
    let promise = putOrder({shop_id: payload.shop_id, product_id: payload.product_id})
    promise.then(response => {
      payload.router.router.push(payload.router.params)
    })
  }
}

// mutations
const mutations = {
  setProfile (state, payload) {
    let profile = JSON.parse(localStorage.getItem('profile')) || {}
    console.log(profile, 'profile')
    profile['token'] = payload['token'] || profile.token
    profile['fio'] = payload['fio'] || profile.fio
    profile['phone'] = payload['phone'] || profile.phone
    profile['mail'] = payload['mail'] || profile.mail
    profile = JSON.stringify(profile)
    localStorage.setItem('profile', profile)
    state.profile = JSON.parse(localStorage.getItem('profile'))
    setAxiosToken()
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
