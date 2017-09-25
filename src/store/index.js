import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import properties from './modules/properties'
import categories from './modules/categories'
import profile from './modules/profile'
import filters from './modules/filters'
import chat from './modules/chat'
import flags from './modules/flags'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    properties,
    categories,
    profile,
    filters,
    chat,
    flags
  }
})
