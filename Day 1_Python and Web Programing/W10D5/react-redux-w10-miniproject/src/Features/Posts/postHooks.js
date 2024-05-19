import { createSelector } from '@reduxjs/toolkit'
import { useSelector, useDispatch } from 'react-redux'
import { posts, fetchPosts } from './postsSlice'
import { useCallback } from 'react'
//custom hook to return post.post instead of state.postsReducer.posts
export const usePostsSelector = () => {
  const selectorPosts = createSelector(posts, (posts) => posts.posts) //first post is the state of post, second posts is an array that is of the post (3rd post)
  return useSelector(selectorPosts)
}

export const useFetchPost = () => {
  const dispatch = useDispatch()
  return useCallback(() => {
    dispatch(fetchPosts())
  }, [dispatch])
}
