import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import Vum from './vum.js'
import RouteConfig from './route.js'
import { addResizeListener, resizeProcess } from './resize.js'
import addOrientationListener from './orientation.js'
import App from '~/app/App'
import 'vue-smooth-picker/dist/css/style.css'
import SmoothPicker from 'vue-smooth-picker'
import 'animate.css/animate.min.css'
import store from './store'
import VueLazyload from 'vue-lazyload'
import 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter)
Vue.use(Vum)
Vue.use(SmoothPicker)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '/static/myIcons/no-image.svg',
  loading: '/static/loading.gif',
  attempt: 1
})

const router = new VueRouter(RouteConfig)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app').$nextTick(function () {
  addOrientationListener()
  addResizeListener()
  resizeProcess()
})

// Vum.router(router)
FastClick.attach(document.body)

export default router;
