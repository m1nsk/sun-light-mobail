import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import properties from './modules/properties'
import categories from './modules/categories'
import profile from './modules/profile'
import markets from './modules/markets'
import filters from './modules/filters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    properties,
    categories,
    profile,
    markets,
    filters
  }
})
