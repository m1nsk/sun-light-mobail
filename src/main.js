import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'

import Vum from './vum.js'

// demos
import Index from '~/app/Index'
import CatalogPage from '~/app/catalog/CatalogPage.vue'
import FavoritesPage from '~/app/favorites/FavoritesPage.vue'
import ProductPage from '~/app/product/ProductPage.vue'
import ProfilePage from '~/app/profile/ProfilePage.vue'
import StockPage from '~/app/stock/StockPage.vue'
import CategoryPage from '~/app/category/CategoryPage.vue'
import ReservePage from '~/app/reserve/ReservePage.vue'

Vue.use(Router)
Vue.use(Vum)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: 'catalog',
          name: 'catalog',
          component: CatalogPage
        },
        {
          path: 'stock',
          component: StockPage
        },
        {
          path: 'profile',
          component: ProfilePage
        },
        {
          path: 'favorites',
          component: FavoritesPage
        },
        {
          path: 'catalog/:category',
          name: 'category',
          component: CategoryPage
        },
        {
          path: 'catalog/:category/:product',
          name: 'product',
          component: ProductPage
        },
        {
          path: 'catalog/:category/:product/reserve',
          name: 'reserve',
          component: ReservePage
        }
      ]
    }
  ]
})

new Vue({
  router
}).$mount('#app')

Vum.router(router)

FastClick.attach(document.body)
