import $apiPublic from '@/api/apiPublic'

const getHistory = async () => {
  const response = await $apiPublic.get('/histories')
  return response
}

const getStatistics = async () => {
  const response = await $apiPublic.get('/statistics')
  return response
}
const getPartners = async () => {
  const response = await $apiPublic.get('/partners')
  return response
}

const getReviews = async () => {
  const response = await $apiPublic.get('/reviews')
  return response
}

const getTeam = async () => {
  const response = await $apiPublic.get('/teams')
  return response
}

const getPortfolio = async () => {
  const response = await $apiPublic.get('/zens')
  return response
}

const sendFeedback = async (data) => {
  const response = await $apiPublic.post('/feedback', data)
  return response
}

const getCareer = async () => {
  const response = await $apiPublic.get('/career')
  return response
}

const getDownloadUrls = async () => {
  const response = await $apiPublic.get('/downloads')
  return response
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHistory,
  getStatistics,
  getPartners,
  getReviews,
  getTeam,
  getPortfolio,
  sendFeedback,
  getCareer,
  getDownloadUrls,
}