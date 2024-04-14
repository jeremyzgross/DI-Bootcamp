const axios = require('axios')

const fetchPosts = async () => {
  try {
    // Make a GET request to the specified URL and await the response
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    return response.data
  } catch (error) {
    console.error('Error fetching posts:', error)
    throw error
  }
}

module.exports = fetchPosts
