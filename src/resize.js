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
  let shopCardSize
  store.state.properties.windowSize = {
    height: height,
    width: width
  }
  console.log(store.state.properties.windowSize)
  size = Math.round((width * 8 / 10) / 2 - 10)
  console.log(size, 'size1')
  size = size < 233.2 ? size : 233.2
  console.log(size, 'size2')
  bannerSize = {
    width: size,
    height: size
  }
  store.state.properties.bannerSize = bannerSize
  console.log(store.state.properties.bannersize)
  size = Math.round((width * 8 / 10) / 2 - 10)
  size = size < 233.2 ? size : 233.2
  shopCardSize = {
    width: size,
    height: '100%'
  }
  store.state.properties.shopCardSize = shopCardSize
}

export { addResizeListener, resizeProcess }
