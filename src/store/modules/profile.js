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
    rootState.callbackUrl.url = router.history.current.path
    let profile = state.profile
    let userData = {
      fio: payload.profile.fio || profile.fio,
      phone: payload.profile.phone || profile.phone,
      mail: payload.profile.mail || profile.mail,
    }
    let promise = createSecret(userData)
    promise.then((response) => {
      if (response.data.success) {
        commit('setProfile', payload.profile)
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
        commit('setProfile', {token: response.data.token})
        router.push({name: "success"})
      }
      return true
    }).catch(err => {
      console.log(err)
      return false
    })
  },
  getOrderStatus ({ commit }, payload) {
    let promise = putOrder({shop_id: payload.shop_id, product_id: payload.product_id})
    console.log(payload, 'p_load')
    promise.then(response => {
      router.push({name: "success"})
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
