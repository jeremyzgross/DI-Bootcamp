const express = require('express')

const { getAllPosts } = require('../Controllers/blog.controller.js')

const router = express.Router()

router.get('/posts', getAllPosts)

module.exports = router
