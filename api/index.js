import axios from 'axios'
import { API_HOST, API_PORT } from '../api/config'

export const baseHost = `${API_HOST}`
export const baseURL = baseHost + '/api/'

axios.defaults.baseURL = baseURL

export function getCategories (formData) {
  return axios.post('/catalogs', formData)
}

export function getProduct (productId) {
  return axios.get('/products/' + productId)
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
  console.log(userData)
  return axios.post(baseHost + '/create_secret', userData)
}
