import {useSelector, useDispatch,} from 'react-redux'
import { useEffect } from 'react'
import { getPostsThunk, fetchPosts } from './postsSlice'
// import { posts } from './postsSlice'
import ReactionButton from './ReactionButton'
import { usePostsSelector,useFetchPost } from './postHooks'

const Post = (props) =>{
  const dispatch = useDispatch()
  // const posts = useSelector((state)=> state.postsReducer.posts)
  // const postsList = useSelector(posts)
  const posts = useFetchPost()
  const postsList = usePostsSelector(posts) //custom post selector hook
  const status = useSelector((state)=> state.postsReducer.status)
  //   useEffect(() => {
  //   dispatch(fetchPosts())
  // }, [dispatch])
    useEffect(() => {
    // dispatch(fetchPosts())
    posts()
  }, [])

  if (status === 'Loading...') return <h2>Loading...</h2> //or some loading animation
  if (status === 'Failed') return <h2>Something went wrong...</h2> //or some loading animation



  //   useEffect(() => {
  //   dispatch(getPostsThunk())
  // }, [dispatch])


  // console.log(posts);
  
  return(

    <>
    <h2>Post Component</h2>
    <br />
    <div>
      <h3>Post Generate Here</h3>
       {status}
       {postsList.map((post)=>(
        <article key={post.id} id={post.id}> Title: <br />{post.title} <br /> Body:  <br />{post.body}
        <ReactionButton  post={post}/> </article>
      ))}

    </div>
    </>
  )
}

export default Post