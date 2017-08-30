import store from './store'

function addResizeListener () {
  window.addEventListener('resize', function () {
    resizeProcess()
  })
}

function resizeProcess () {
  let height = document.documentElement.clientHeight
  let width = document.documentElement.clientWidth
  let size
  let bannerSize
  store.state.properties.windowSize = {
    height: height,
    width: width
  }
  size = Math.round((width * 8 / 10) / 2 - 10)
  bannerSize = {
    width: size,
    height: size
  }
  store.state.properties.bannerSize = bannerSize
}

export { addResizeListener, resizeProcess }
