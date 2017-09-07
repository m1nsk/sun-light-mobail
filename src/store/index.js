import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import properties from './modules/properties'
import categories from './modules/categories'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    properties,
    categories
  }
})
