import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import properties from './modules/properties'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    products,
    properties
  }
})
