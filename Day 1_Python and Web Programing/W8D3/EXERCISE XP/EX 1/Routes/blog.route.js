const express = require('express')

const {
  getAllPosts,
  getPost,
  createNewPost,
  updatePost,
  deletePost,
} = require('../Controllers/blog.controller.js')

const router = express.Router()

router.get('/posts', getAllPosts)
router.get('/posts/:id', getPost)
router.post('/posts', createNewPost)
router.put('/posts/:id', updatePost)
router.delete('/posts/:id', deletePost)

module.exports = router
