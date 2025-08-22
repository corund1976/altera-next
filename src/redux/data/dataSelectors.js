const history = (state) => state.data.history
const statistics = (state) => state.data.statistics
const banks = (state) => state.data.partners.banks
const developers = (state) => state.data.partners.developers
const reviews = (state) => state.data.reviews
const team = (state) => state.data.team
const portfolio = (state) => state.data.portfolio

const sendFeedback = (state) => state.data.sendFeedback

const career = (state) => state.data.career

const downloadUrls = (state) => state.data.downloadUrls

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  history,
  statistics,
  banks,
  developers,
  reviews,
  team,
  portfolio,

  sendFeedback,

  career,

  downloadUrls,
}