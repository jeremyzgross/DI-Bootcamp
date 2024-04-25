//model
const postgres = require('postgres')
const { db } = require('../Config/blog.config.js')

const _getAllPosts = async () => {
  try {
    return db.raw(`select * from posts`)
  } catch (error) {
    console.error('Error fetching all posts:', error)
    throw error
  }
}

const _getPost = async (postId) => {
  try {
    return await db.select('*').from('posts').where('id', postId)
  } catch (error) {
    console.error('Error fetching all posts:', error)
    throw error
  }
}
const _createPost = async (postData) => {
  const { title, the_content } = postData

  try {
    return await db('posts').insert({ title, the_content }, ['id'])
  } catch (error) {
    console.error('Error fetching adding post:', error)
    throw error
  }
}

const _updatePost = async (postData, postId) => {
  const { title, the_content } = postData
  try {
    return await db('posts')
      .update({ title, the_content }, ['id', 'the_content', 'title'])
      .where('id', postId)
  } catch (error) {
    console.error('Error fetching adding post:', error)
    throw error
  }
}

const _deletePost = async (postId) => {
  try {
    return await db.delete('*').from('posts').where('id', postId)
  } catch (error) {
    console.error('Error delete posts:', error)
    throw error
  }
}

module.exports = {
  _getAllPosts,
  _getPost,
  _createPost,
  _updatePost,
  _deletePost,
}
