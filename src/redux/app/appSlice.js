import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  screenHeight: 600,
  screenWidth: 1280,
  windowScrollY: 0,

  headerView: 'init',
  theme: 'light',

  displayLoader: false,
  displayModal: false,
  displayMenu: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setScreenHeight: (state, action) => { state.screenHeight = action.payload },
    setScreenWidth: (state, action) => { state.screenWidth = action.payload },
    setWindowScrollY: (state, action) => { state.windowScrollY = action.payload },

    setHeaderView: (state, action) => { state.headerView = action.payload },
    setTheme: (state, action) => { state.theme = action.payload },

    setDisplayLoader: (state, action) => { state.displayLoader = action.payload },
    setDisplayModal: (state, action) => { state.displayModal = action.payload },
    setDisplayMenu: (state, action) => { state.displayMenu = action.payload },

    resetApp: () => initialState,
  }
})

export const {
  setScreenHeight,
  setScreenWidth,
  setWindowScrollY,

  setHeaderView,
  setTheme,

  setDisplayLoader,
  setDisplayModal,
  setDisplayMenu,

  resetApp,
} = appSlice.actions

export default appSlice.reducer
