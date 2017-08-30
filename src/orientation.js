import store from './store'

export default function addOrientationListener () {
  window.addEventListener('orientationchange', function () {
    console.log(window.screen.orientation)
    store.state.properties.orientation = window.screen.orientation
  })
}

