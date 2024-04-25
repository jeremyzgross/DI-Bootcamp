//controler

const {
  _getAllPosts,
  _getPost,
  _createPost,
  _updatePost,
  _deletePost,
} = require('../Models/blog.model.js')

const getAllPosts = (req, res) => {
  _getAllPosts()
    .then((data) => {
      res.json(data.rows)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ error: 'Internal server error' })
    })
}

const getPost = async (req, res) => {
  try {
    const postId = req.params.id
    const result = await _getPost(postId)
    res.json(result)
  } catch (error) {
    console.error('Error getting post with ID', error)
    next(error)
  }
}

const createNewPost = async (req, res) => {
  try {
    const postData = req.body
    const result = await _createPost(postData)
    res.json(result)
  } catch (error) {
    console.error('Error creating new post', error)
    next(error)
  }
}

const updatePost = async (req, res) => {
  try {
    const postId = req.params.id
    const postData = req.body
    const result = await _updatePost(postData, postId)
    res.json(result)
  } catch (error) {
    console.error('Error updating new post', error)
    next(error)
  }
}

const deletePost = async (req, res) => {
  try {
    const postId = req.params.id
    const result = await _deletePost(postId)
    res.json(`ID number ${postId} post was deleted`)
  } catch (error) {
    console.error('Error deleting post with ID', error)
    next(error)
  }
}
module.exports = {
  getAllPosts,
  getPost,
  createNewPost,
  updatePost,
  deletePost,
}
