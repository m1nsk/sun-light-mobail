import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import properties from './modules/properties'
import categories from './modules/categories'
import scrollContainer from './modules/scrollContainer'
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
    scrollContainer,
    profile,
    filters,
    chat,
    flags
  }
})
