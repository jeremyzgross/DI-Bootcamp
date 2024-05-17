import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  status: null,
}
const url = 'https://jsonplaceholder.typicode.com/users'
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}

export const getUsersThunk = createAsyncThunk('users/get', async () => {
  const res = await fetch(url, options)
  const data = await res.json()
  return data
})

export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.users = action.payload
        state.status = 'Here are your users!'
      })
      .addCase(getUsersThunk.pending, (state, action) => {
        state.status = 'Loading...'
      })
  },
})

export default usersSlice.reducer
