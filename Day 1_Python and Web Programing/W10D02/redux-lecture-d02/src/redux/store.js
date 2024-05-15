import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from './reducer'

const store = configureStore({
  reducer: {
    counter: counterReducer, //reducer we imported. All reducers will go here if you had more than just counterReducer. Counter is just a key. we call counter in mapStateToProps
  },
})

export default store
