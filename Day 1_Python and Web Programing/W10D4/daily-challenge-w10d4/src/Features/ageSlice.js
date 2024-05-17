import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

const initialState = {
  age: 0,
  status: null,
}

export const ageUpAsync = createAsyncThunk('age/up', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate an async operation by resolving after 2 seconds
      resolve()
    }, 2000)
  })
})
export const ageDownAsync = createAsyncThunk('age/down', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulate an async operation by resolving after 2 seconds
      resolve()
    }, 2000)
  })
})

export const ageSlice = createSlice({
  name: 'age',
  initialState: initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(ageUpAsync.fulfilled, (state, action) => {
        state.age += 1
        state.status = 'you are a year older'
      })
      .addCase(ageUpAsync.pending, (state, action) => {
        state.status = 'loading age up'
      })
      .addCase(ageDownAsync.pending, (state, action) => {
        state.status = 'loading age down'
      })
      .addCase(ageDownAsync.fulfilled, (state, action) => {
        state.age -= 1
        state.status = 'you are a year younger'
      })
  },
})

export default ageSlice.reducer
