import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
  count1: 0,
}

//ASYNCHRONOUS THUNK
export const delayIncrementThunk = createAsyncThunk('counter/delay', () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(101)
    }, 3000)
  })
})

// The key names are important to keep the same
export const counterSlice = createSlice({
  name: 'counter', // Every slice is a unique action. It will be concatenated here
  initialState: initialState, // initialState key is a reserved word in the createSlice function
  reducers: {
    // Reducers contain the actions
    // action: counter/increment.
    // increment is the name of the action to dispatch
    increment: (state) => {
      state.count += 1 // New way, no need to clone the state

      // {...state, count: state.count + 1} old way
    },

    decrement: (state) => {
      state.count -= 1
    },
    reset: (state) => {
      state.count = 0
    },
    incrementByNumber: (state, action) => {
      state.count += action.payload
    },
    incrementWithPrepare: {
      reducer: (state, action) => {
        state.count += action.payload.param1 + action.payload.param2
      },
      prepare: (param1, param2) => {
        return { payload: { param1, param2 } }
      },
    },
    incremencount1: (state) => {
      state.count1 += 1 // New way, no need to clone the state
    },
    //ASYNCHRONOUS
    // delayIncrement: (state) => {
    //   setTimeout(() => {
    //     state.count += 101
    //   }, 3000)
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(delayIncrementThunk.pending, (state, action) => {
        state.count += 4
      })
      .addCase(delayIncrementThunk.rejected, (state, action) => {
        console.log(action)
        state.count = action.payload
      })
      .addCase(delayIncrementThunk.fulfilled, (state, action) => {
        state.count += action.payload //action.payload is the res promise (in this example, it is 101. see above)
      })
  },
})

export const {
  increment,
  decrement,
  reset,
  incrementByNumber,
  incrementWithPrepare,
  incremencount1,
  delayIncrement,
} = counterSlice.actions // Way to dispatch the increment action
export default counterSlice.reducer
