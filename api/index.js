import axios from 'axios'
import store from '~/store'
import { API_HOST, API_PORT } from '../api/config'

export const baseHost = `${API_HOST}`
export const baseURL = baseHost + '/api/'

axios.defaults.baseURL = baseURL
axios.defaults.headers.common['X-CSRF-TOKEN'] = JSON.parse(localStorage.getItem('profile')).token

export function setAxiosToken() {
  axios.defaults.headers.common['X-CSRF-TOKEN'] = JSON.parse(localStorage.getItem('profile')).token
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

export function getCategoryProducts (catalogIdData) {
  return axios.post('/products', catalogIdData)
}

export function getMarkets (catalogIdData) {
  return axios.post('/markets', catalogIdData)
}

export function getCustomData (url, catalogIdData) {
  return axios.post(url, catalogIdData)
}

export function createSecret (userData) {
  return axios.post(baseHost + '/create_secret', userData)
}

export function getToken (userData) {
  return axios.post(baseHost + '/get_token', userData)
}

export function toggleLike (id) {
  console.log(`/api/product/${id}/like`)
  return axios.get(baseHost + `/api/product/${id}/like`)
}

export function toggleMarketLike (id) {
  console.log(`/api/market/${id}/like`)
  return axios.get(baseHost + `/api/market/${id}/like`)
}
