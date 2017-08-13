import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'

import Vum from './vum.js'

// demos
import Index from './app/Index'
import Page from './demos/Page'
import CategoryPage from '~/app/category/CategoryPage.vue'
import ProductPage from '~/app/product/ProductPage.vue'

Vue.use(Router)
Vue.use(Vum)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/page',
      component: Page
    },
    {
      path: '/:category',
      component: CategoryPage
    },
    {
      path: '/product/:id',
      component: ProductPage
    }
  ]
})

new Vue({
  router
}).$mount('#app')

Vum.router(router)

FastClick.attach(document.body)
