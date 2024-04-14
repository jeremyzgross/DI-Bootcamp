// Import the express module
const express = require('express')
// Create an Express application
const app = express()

const fetchPosts = require('./data/dataService.js')

app.listen(5001, () => {
  console.log('Server is running on port 5001')
}) //for some reason 5000 keeps giving errors on my computer

app.get('/', (request, response) => {
  response.send('Welcome to the homepage of your axios project')
})

app.get('/posts', async (request, response) => {
  try {
    const posts = await fetchPosts()
    response.json(posts)
    console.log('Posts data sent successfully.')
  } catch (error) {
    // Handle errors
    console.error('Error fetching posts:', error)
    res.status(500).json({ error: 'Internal server error' })
  }
})
