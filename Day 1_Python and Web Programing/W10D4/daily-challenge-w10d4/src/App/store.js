import { configureStore, } from '@reduxjs/toolkit'
import ageReducer from '../Features/ageSlice'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    ageReducer: ageReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
