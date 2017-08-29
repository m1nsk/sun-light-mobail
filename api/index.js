import axios from 'axios'
import { API_HOST, API_PORT } from '../api/config'

export const baseHost = `${API_HOST}`
export const baseURL = baseHost + '/api/'

axios.defaults.baseURL = baseURL

export function getCatalogs (formData) {
  return axios.post('/catalogs', formData)
}

export function getProduct (productId) {
  return axios.get('/products/' + productId)
}

export function getCategoryProducts (catalogIdData) {
  console.log(catalogIdData, 'catalogData')
  return axios.post('/products', catalogIdData)
}