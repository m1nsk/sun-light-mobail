import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import Vum from './vum.js'
import RouteConfig from './route.js'
import App from '~/app/App'
import 'vue-smooth-picker/dist/css/style.css'
import SmoothPicker from 'vue-smooth-picker'
import 'animate.css/animate.min.css'
import store from './store'

Vue.use(VueRouter)
Vue.use(Vum)
Vue.use(SmoothPicker)

const router = new VueRouter(RouteConfig)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

// Vum.router(router)

FastClick.attach(document.body)
