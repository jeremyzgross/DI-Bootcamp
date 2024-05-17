import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'

const initialState = {
  users: [],
  status: null, //will change to loading, fullfilled, rejected
}

const url = 'https://jsonplaceholder.typicode.com/users'
const options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
}
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time))

export const getUsersThunk = createAsyncThunk('users/get', async () => {
  await delay(2000)
  const shouldReject = false //to simulate a reject, change to true
  if (shouldReject) {
    throw new Error('Simulated network error')
  }
  const res = await fetch(url, options)
  const data = await res.json()
  return data
})
export const usersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    adduser: (state, action) => {
      state.users.push({ id: nanoid(), name: action.payload })
    },
    adduserPrepared: {
      reducer(state, action) {
        state.users.push(action.payload)
      },
      prepare: (text) => {
        return {
          payload: { id: nanoid, name: text },
        }
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getUsersThunk.fulfilled, (state, action) => {
        state.users = action.payload
        state.status = 'Here are your users!'
      })
      .addCase(getUsersThunk.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getUsersThunk.rejected, (state, action) => {
        state.status = 'something went wrong, your request was rejected'
      })
  },
})

export default usersSlice.reducer
export const { adduser, adduserPrepared } = usersSlice.actions
