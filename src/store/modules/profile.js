import { createSecret, getToken, setAxiosToken, putOrder } from 'api/index'
import router from '~/main'
// initial state
const state = {
  profile: JSON.parse(localStorage.getItem('profile') === null ? '' : localStorage.getItem('profile')) || ''
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
      fio: payload.profile.fio || profile.fio,
      phone: payload.profile.phone || profile.phone,
      mail: payload.profile.mail || profile.mail,
    }
    let promise = createSecret(userData)
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
      debugger
      if (response.data.success === true) {
        commit('setProfile', {token: response.data.token})
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
    commit('setProfile', payload.profile)
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
