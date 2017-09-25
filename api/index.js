import axios from 'axios'
import router from '../src/main.js'
import store from '../src/store'

import { API_HOST, API_PORT } from '../api/config'

export const baseHost = API_HOST
export const baseURL = baseHost + '/api/'
export function setAxiosToken() {
  let data = localStorage.getItem('profile') != null ? JSON.parse(localStorage.getItem('profile')) : {}
  axios.defaults.headers.common['X-CSRF-TOKEN'] = data.token || ''
  axios.defaults.headers.common['Authorization'] = (() => {
    if ((data.phone) && (data.phone.slice(0, 2) === '+7')) {
      return '8' + data.phone.slice(2)
    }
    return ''
  })()
}

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
setAxiosToken()

export function getCategories (formData) {
  return axios.post('/catalogs', formData)
}

export function getCategory (categoryId) {
  return axios.get('/catalogs/' + categoryId)
}

export function getProduct (productId) {
  return axios.get('/products/' + productId)
}

export function getProductList (productData) {
  productData.sort = 'id'
  productData.order = 'asc'
  return axios.post('/products', productData)
}

export function getFavorites (productData) {
  productData.sort = 'id'
  productData.order = 'asc'
  return axios.get('/product/likes', productData)
}

export function getOrdered (productData) {
  productData.sort = 'id'
  productData.order = 'asc'
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

export function toggleProductLike (id) {
  return axios.get(baseHost + '/api/product/' + id + '/like')
}

export function toggleMarketLike (id) {
  return axios.get(baseHost + '/api/market/' + id + '/like')
}
