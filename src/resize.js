import store from './store'

export default {
  addResizeListener () {
    console.log(store)
    window.addEventListener('resize', function () {
      let height = document.documentElement.clientHeight
      let width = document.documentElement.clientWidth
      let size
      let bannerSize
      store.state.properties.windowSize = {
        height: height,
        width: width
      }
      size = width * 8 / 10 - 10
      bannerSize = {
        width: size,
        height: size
      }
      store.state.properties.bannerSize = bannerSize
    })
  }
}
