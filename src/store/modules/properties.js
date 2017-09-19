// initial state
const state = {
  bannerSize: {
    height: 120,
    width: 120
  },
  shopCardSize: {
    height: 120,
    width: 120
  },
  windowSize: {
    height: '',
    width: ''
  },
  orientation: '',
  animationFlag: false,
  callbackUrl: {url: 'catalog'}

}

// getters
const getters = {
  getBannerSize: state => state.bannerSize,
  getWindowSize: state => state.windowSize,
  getWindowOrientation: state => state.orientation,
  getAnimationFlag: state => state.animationFlag,
  getCallbackUrl: state => state.callbackUrl.url
}

// actions
const actions = {
}

// mutations
const mutations = {
  setWindowSize (state) {
    state.windowSize = document.documentElement.clientHeight
  },
  setAnimationFlag (state, payload) {
    state.animationFlag = payload.state
  },
  setCallbackUrl (state, payload) {
    state.callbackUrl = payload.url
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
