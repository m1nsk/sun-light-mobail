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
  callbackUrl: {url: 'catalog'},
  card: [
    {
      id: ''
    }
  ]
}

// getters
const getters = {
  productCode: state => state.card[0],
  getBannerSize: state => state.bannerSize,
  getWindowSize: state => state.windowSize,
  getWindowOrientation: state => state.orientation,
  getAnimationFlag: state => state.animationFlag,
  getCallbackUrl: state => state.callbackUrl.url,
  restCount: state => Math.ceil(state.windowSize.height / state.bannerSize.height)
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
  },
  setWindowSize (state) {
    state.windowSize = document.documentElement.clientHeight
  },
  setAnimationFlag (state, payload) {
    state.animationFlag = payload.state
  },
  setCallbackUrl (state, payload) {
    state.callbackUrl = {url: payload.url}
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
