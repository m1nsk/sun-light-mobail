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
  orientation: ''
}

// getters
const getters = {
  getBannerSize: state => state.bannerSize,
  getWindowSize: state => state.windowSize,
  getWindowOrientation: state => state.orientation
}

// actions
const actions = {

}

// mutations
const mutations = {
  setWindowSize (state) {
    state.windowSize = document.documentElement.clientHeight
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
