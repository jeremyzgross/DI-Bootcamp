import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from '../Features/tasksSlice'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    tasks: tasksReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})
