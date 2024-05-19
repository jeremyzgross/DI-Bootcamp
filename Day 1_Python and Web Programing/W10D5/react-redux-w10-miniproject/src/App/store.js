import { configureStore } from '@reduxjs/toolkit'
import postsReducer from '../Features/Posts/postsSlice'

export default configureStore({
  reducer: {
    postsReducer: postsReducer,
  },
})
