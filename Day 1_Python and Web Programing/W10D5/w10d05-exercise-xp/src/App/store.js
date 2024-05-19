import { configureStore } from '@reduxjs/toolkit'
import booksReducer from '../Features/Book Inventory/bookSlice'
export default configureStore({
  reducer: {
    booksReducer: booksReducer,
  },
})
