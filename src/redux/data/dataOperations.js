import { Notify } from 'notiflix/build/notiflix-notify-aio';

import {
  setCareer,
  setDownloadUrls,
  setHistory,
  setPartners,
  setPortfolio,
  setReviews,
  setSendFeedback,
  setStatistics,
  setTeam
} from '@/redux/data/dataSlice';

import dataService from '@/services/dataService';

const getHistory = () => async dispatch => {
  try {
    const response = await dataService.getHistory()
    const { data: { data } } = response
    dispatch(setHistory(data))
  } catch (e) {
    Notify.failure(e.response?.data?.message || 'Request GetHistory failure')
  }
}

const getStatistics = () => async dispatch => {
  try {
    const response = await dataService.getStatistics()
    const { data: { data } } = response
    dispatch(setStatistics(data))
  } catch (e) {
    Notify.failure(e.response?.data?.message || 'Request GetStatistics failure')
  }
}

const getPartners = () => async dispatch => {
  try {
    const response = await dataService.getPartners()
    const { data: { data } } = response
    const banks = data.filter(({ position }) => position === 1)
    const developers = data.filter(({ position }) => position === 2)
    dispatch(setPartners({ banks, developers }))
  } catch (e) {
    Notify.failure(e.response?.data?.message || 'Request GetPartners failure')
  }
}

const getReviews = () => async dispatch => {
  try {
    const response = await dataService.getReviews()
    const { data: { data } } = response
    dispatch(setReviews(data))
  } catch (e) {
    Notify.failure(e.response?.data?.message || 'Request GetReviews failure')
  }
}

const getTeam = () => async dispatch => {
  try {
    const response = await dataService.getTeam()
    const { data: { data } } = response
    dispatch(setTeam(data))
  } catch (e) {
    Notify.failure(e.response?.data?.message || 'Request GetTeam failure')
  }
}

const getPortfolio = () => async dispatch => {
  try {
    const response = await dataService.getPortfolio()
    const { data: { data } } = response
    dispatch(setPortfolio(data))
  } catch (e) {
    Notify.failure(e.response?.data?.message || 'Request GetPortfolio failure')
  }
}

const sendFeedback = ({ phone, name, context }) => async dispatch => {
  try {
    await dataService.sendFeedback({ phone, name, context })
    dispatch(setSendFeedback(context))
  } catch (e) {
    Notify.warning('Произошла ошибка при отправке данных')
    console.error(e.response?.data?.message)
  }
}
// consultation_question
// dream_apartment_consultation
// dream_house_consultation
// commercial_profit
// sell_apartment_agent
// installment_catalog
// countryside_catalog
// commercial_catalog
// career

const getCareer = () => async dispatch => {
  try {
    const response = await dataService.getCareer()

    dispatch(setCareer(response.data))
  } catch (e) {
    Notify.failure(e.response?.data?.message || 'Request GetCareer failure')
  }
}

const getDownloadUrls = () => async dispatch => {
  try {
    const response = await dataService.getDownloadUrls()

    dispatch(setDownloadUrls(response.data))
  } catch (e) {
    Notify.failure(e.response?.data?.message || 'Request GetDownloadUrls failure')
  }
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