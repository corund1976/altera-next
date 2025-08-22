import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  history: [],
  statistics: {},
  partners: [],
  reviews: [],
  team: [],
  portfolio: [],

  sendFeedback: '',

  career: {},

  downloadUrls: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setHistory: (state, action) => { state.history = action.payload },
    setStatistics: (state, action) => { state.statistics = action.payload },
    setPartners: (state, action) => { state.partners = action.payload },
    setReviews: (state, action) => { state.reviews = action.payload },
    setTeam: (state, action) => { state.team = action.payload },
    setPortfolio: (state, action) => { state.portfolio = action.payload },

    setSendFeedback: (state, action) => { state.sendFeedback = action.payload },

    setCareer: (state, action) => { state.career = action.payload },

    setDownloadUrls: (state, action) => { state.downloadUrls = action.payload },

    resetData: () => initialState,
  },
})

export const {
  setHistory,
  setStatistics,
  setPartners,
  setReviews,
  setTeam,
  setPortfolio,

  setSendFeedback,

  setCareer,

  setDownloadUrls,

  resetData
} = dataSlice.actions

export default dataSlice.reducer
