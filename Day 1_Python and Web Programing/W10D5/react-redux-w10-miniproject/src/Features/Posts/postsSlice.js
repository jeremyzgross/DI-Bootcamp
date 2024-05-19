import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  posts: [],
  status: null, //loading, success, failed
}

const url = 'https://jsonplaceholder.typicode.com/posts'
// const options = {
//   method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// }
// export const getPostsThunk = createAsyncThunk('users/get', async () => {
//   const res = await fetch(url, options)
//   const data = await res.json()
//   return data
// })

//axios method
export const fetchPosts = createAsyncThunk('posts/fetchposts', async () => {
  const res = await axios.get(url)
  return res.data
})

export const postsSlice = createSlice({
  name: 'posts',
  initialState: initialState,
  reducers: {
    incrementReaction: (state, action) => {
      const { postId, reaction } = action.payload
      const existingPost = state.posts.find((post) => post.id === postId)
      if (existingPost) {
        existingPost.reaction[reaction]++
      }
    },
  },
  extraReducers(builder) {
    builder
      // .addCase(getPostsThunk.fulfilled, (state, action) => {
      //   state.posts = action.payload
      //   state.status = 'Here are your posts!'
      // })
      // .addCase(getPostsThunk.pending, (state, action) => {
      //   state.status = 'Loading...'
      // })
      //AXIOS methods
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'Loading...'
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'Here are your posts!'
        const loadedPosts = action.payload.map((posts) => {
          posts.reaction = {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          }
          return posts
        })
        state.posts = action.payload
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'Failed'
      })
  },
})

export const posts = (state) => state.postsReducer
export const status = (state) => state.postsReducer.status

export default postsSlice.reducer
export const { incrementReaction } = postsSlice.actions
