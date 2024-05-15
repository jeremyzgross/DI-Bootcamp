import { configureStore } from '@reduxjs/toolkit'
import { tasksReducer } from '../Features/Tasks/tasksReducers'


export default configureStore({
  reducer:{
    tasksReducer,
  },
})
