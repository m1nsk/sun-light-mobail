import axios from 'axios'
import router from '../src/main.js'
import properties from '../src/store/modules/properties'
import store from '../src/store'

import { API_HOST, API_PORT } from '../api/config'

export const baseHost = API_HOST
export const baseURL = baseHost + '/api/'

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (500 === error.response.status) {
    store.state.properties.callbackUrl.url = router.history.current.path
    router.push({name: 'login'})
  } else {
    return Promise.reject(error);
  }
});

axios.defaults.baseURL = baseURL
// TODO: get a real way to fix this
axios.defaults.headers.common['X-CSRF-TOKEN'] = JSON.parse(localStorage.getItem('profile') === null ? '' : localStorage.getItem('profile')).token || ''

export function setAxiosToken() {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = JSON.parse(localStorage.getItem('profile') === null ? '' : localStorage.getItem('profile')).token || ''
}

export function getCategories (formData) {
  return axios.post('/catalogs', formData)
}

export function getProduct (productId) {
  return axios.get('/products/' + productId)
}

export function getProductList (productData) {
  productData.sort = 'id'
  productData.order = 'asc'
  console.log(productData, 'productData')
  return axios.post('/products', productData)
}

export function getFavorites (productData) {
  productData.sort = 'id'
  productData.order = 'asc'
  console.log(productData, 'productData')
  return axios.get('/product/likes', productData)
}

export function getOrdered (productData) {
  productData.sort = 'id'
  productData.order = 'asc'
  console.log(productData, 'productData')
  return axios.post('/orders', productData)
}

export function putOrder (productData) {
  return axios.put('/orders/create', productData)
}

export function getMarketList (catalogIdData) {
  return axios.post('/markets', catalogIdData)
}

export function getMarket (marketId) {
  return axios.get('/markets/' + marketId)
}

export function createSecret (userData) {
  return axios.post(baseHost + '/create_secret', userData)
}

export function getToken (userData) {
  return axios.post(baseHost + '/get_token', userData)
}

export function toggleLike (id) {
  return axios.get(baseHost + '/api/product/' + id + '/like')
}

export function toggleMarketLike (id) {
  return axios.get(baseHost + '/api/shop/' + id + '/like')
}
