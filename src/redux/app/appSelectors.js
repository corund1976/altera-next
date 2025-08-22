const screenHeight = (state) => state.app.screenHeight
const screenWidth = (state) => state.app.screenWidth
const windowScrollY = (state) => state.app.windowScrollY

const headerView = (state) => state.app.headerView
const theme = (state) => state.app.theme

const displayLoader = (state) => state.app.displayLoader
const displayModal = (state) => state.app.displayModal
const displayMenu = (state) => state.app.displayMenu

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  screenHeight,
  screenWidth,
  windowScrollY,

  headerView,
  theme,

  displayLoader,
  displayModal,
  displayMenu,
}