import { configureStore } from '@reduxjs/toolkit'
import { listReducer } from './reducer'

const store = configureStore({
  reducer: {
    listReducer: listReducer,
  },
})

export default store
