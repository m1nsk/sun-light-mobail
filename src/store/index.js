import Vue from 'vue'
import Vuex from 'vuex'
import properties from './modules/properties'
import categories from './modules/categories'
import scrollContainer from './modules/scrollContainer'
import profile from './modules/profile'
import filters from './modules/filters'
import chat from './modules/chat'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    properties,
    categories,
    scrollContainer,
    profile,
    filters,
    chat
  }
})
