/* eslint-disable no-param-reassign */
import axios from 'axios'

import authOperations from '@/redux/auth/authOperations';

import store from '@/redux/store'

const { getState } = store; // direct access to redux store

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
axios.defaults.withCredentials = true

const $apiPrivate = axios.create()

$apiPrivate.interceptors.request.use(
  async (config) => {
    const { auth: { accessExpires } } = getState()

    if ((accessExpires - Date.now()) / 1000 < 5)
      await authOperations.refreshToken()

    const { auth: { accessToken } } = getState()

    config.headers.Authorization = `Bearer ${accessToken}`

    return config
  },
  error => {
    throw error
  }
)

$apiPrivate.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401 && error.response?.data?.message !== 'This txid is already in use.') return

    throw error
  }
)

export default $apiPrivate