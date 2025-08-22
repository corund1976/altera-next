import { combineReducers, configureStore } from '@reduxjs/toolkit'

import appReducer from '@/redux/app/appSlice'
import dataReducer from '@/redux/data/dataSlice'

const rootReducer = combineReducers({
  app: appReducer,
  data: dataReducer,
})

const customizedMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({ serializableCheck: false })

const store = configureStore({
  reducer: rootReducer,
  middleware: customizedMiddleware,
  devTools: process.env.NEXT_PUBLIC_NODE_ENV === 'development',
})

export default store