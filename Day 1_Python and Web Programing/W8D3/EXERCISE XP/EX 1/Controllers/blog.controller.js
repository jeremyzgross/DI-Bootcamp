//controler

const { _getAllPosts } = require('../Models/blog.model.js')

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

module.exports = {
  getAllPosts,
}
