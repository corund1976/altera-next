import axios from 'axios'

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL
// axios.defaults.withCredentials = true

const $apiPublic = axios.create()

$apiPublic.interceptors.request.use(
  config => config,
  error => {
    throw error
  }
)

$apiPublic.interceptors.response.use(
  response => response,
  error => {
    throw error
  }
)

export default $apiPublic