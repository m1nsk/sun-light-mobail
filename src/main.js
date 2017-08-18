import Vue from 'vue'
import VueRouter from 'vue-router'
import FastClick from 'fastclick'
import Vum from './vum.js'
import RouteConfig from './route.js'

Vue.use(VueRouter)
Vue.use(Vum)

const router = new VueRouter(RouteConfig)

new Vue({
  router
}).$mount('#app')

Vum.router(router)

FastClick.attach(document.body)
