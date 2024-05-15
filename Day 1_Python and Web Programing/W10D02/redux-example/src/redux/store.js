import { configureStore } from '@reduxjs/toolkit'
import { exampleReducer } from './reducer'

const store = configureStore({
  reducer: {
    exampleReducer,
  },
})

export default store
