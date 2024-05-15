import { configureStore } from '@reduxjs/toolkit'
import { dayTasksReducer } from '../Features/Tasks/TasksReducer'

export default configureStore({
  reducer: {
    dayTasksReducer,
  },
})
