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

module.exports = {
  _getAllPosts,
}
