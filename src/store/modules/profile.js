import { createSecret, getToken, setAxiosToken, putOrder } from 'api/index'
import router from '~/main'
// initial state
const state = {
  profile:  localStorage.getItem('profile') != null ? JSON.parse(localStorage.getItem('profile')) : {}
}

// getters
const getters = {
  getProfile: state => state.profile
}

// actions
const actions = {
  getSecretCode ({ commit, state, rootState }, payload) {
    let profile = state.profile
    let userData = {
      profile: {}
    }
    for (let value of Object.keys(payload.profile)) {
      userData.profile[value] = payload.profile[value] || profile[value]
    }
    let promise = createSecret(userData.profile)
    promise.then((response) => {
      if (response.data.success) {
        commit('setProfile', userData)
        router.push({name: "code"})
      }
    }).catch(err => {
      console.log(err)
    })
  },
  getToken ({ commit, rootState }, payload) {
    let secretCode = {
      secret: payload.code
    }
    let promise = getToken(secretCode)
    promise.then((response) => {
      if (response.data.success === true) {
        commit('setProfile', {profile: {token: response.data.token}})
        router.push(rootState.properties.callbackUrl.url)
      }
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  },
  getOrderStatus ({ commit }, payload) {
    let promise = putOrder({shop_id: payload.shop_id, product_id: payload.product_id})
    commit('setProfile', payload)
    promise.then(response => {
      router.push({
        name: "success",
        params: {
          id: payload.product_id
        }
      })
    })
  }
}

// mutations
const mutations = {
  setProfile (state, payload) {
    let profile = localStorage.getItem('profile') != null ? JSON.parse(localStorage.getItem('profile')) : {}
    for (let value of Object.keys(payload.profile)) {
      profile[value] = payload.profile[value] || profile[value]
    }
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
