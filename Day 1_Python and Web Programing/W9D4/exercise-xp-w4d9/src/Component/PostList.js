import posts from '../exercisetwo.json'
const PostList = (props) => {
  const firstPost = posts[0]
  const secondPost = posts[1]
  console.log(firstPost)
  console.log(secondPost)

  return (
    <>
      <h1>Hi This is a Title</h1>
      <h1>{firstPost.title}</h1>
      <p>{firstPost.content}</p>
      <h1>{secondPost.title}</h1>
      <h1>{secondPost.content}</h1>
    </>
  )
}

export default PostList
