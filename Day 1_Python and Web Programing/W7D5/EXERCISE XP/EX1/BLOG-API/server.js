/*
Create a directory named blog-api.

Inside the blog-api directory, open a terminal and run npm init to initialize a new Node.js project. Follow the prompts to set up your project.

Install the express package by running npm install express in the terminal.

Create a file named server.js.

In server.js, require the express package and set up an Express app.

Create a data array to simulate a database. Each item in the array should represent a blog post with properties like id, title, and content.

Implement the following routes using Express:
GET /posts: Return a list of all blog posts.
GET /posts/:id: Return a specific blog post based on its id.
POST /posts: Create a new blog post.
PUT /posts/:id: Update an existing blog post.
DELETE /posts/:id: Delete a blog post.

Implement error handling for invalid routes and server errors.

Start the Express app and listen on a specified port (e.g., 3000).
 */

// Import the express module
const express = require('express')
// Create an Express application
const app = express()

app.use(express.urlencoded({ extended: false })) // Parse URL-encoded bodies
app.use(express.json()) // Parse JSON bodies

app.listen(3001, () => {
  console.log('Server is running on port 3001')
})

const blogPosts = [
  { id: 101, title: 'Title A', content: 'Title A is pretty good' },
  { id: 102, title: 'Title B', content: 'Title B is better' },
  { id: 103, title: 'Title C', content: 'Title C is the best' },
]

//GET /posts: Return a list of all blog posts.
app.get('/blogposts', (request, response) => {
  response.json(blogPosts)
})

/** DISPLAYS THE FOLLOWING: http://localhost:3001/blogposts
 * [
  {
    "id": 101,
    "title": "Title A",
    "content": "Title A is pretty good"
  },
  {
    "id": 102,
    "title": "Title B",
    "content": "Title B is better"
  },
  {
    "id": 103,
    "title": "Title C",
    "content": "Title C is the best"
  }
]
 */

//GET /posts/:id: Return a specific blog post based on its id

app.get('/blogposts/:id', (request, response) => {
  const { id } = request.params
  const blog = blogPosts.find((item) => item.id == id)

  if (!blog) {
    return response.status(404).json({ message: 'Blog not found' })
  }
  // If the product is found, return it with a 200 status
  response.json(blog)
})

/**Displays the following http://localhost:3001/blogposts/101
 * {
  "id": 101,
  "title": "Title A",
  "content": "Title A is pretty good"
}
 */

//POST /posts: Create a new blog post.
app.post('/blogposts/', (request, response) => {
  // response.send('ok product created')
  console.log(request.body)
  blogPosts.push(request.body)
  response.json(blogPosts)
})

//using postman
/**[
    {
        "id": 101,
        "title": "Title A",
        "content": "Title A is pretty good"
    },
    {
        "id": 102,
        "title": "Title B",
        "content": "Title B is better"
    },
    {
        "id": 103,
        "title": "Title C",
        "content": "Title C is the best"
    },
    {
        "id": 104,
        "title": "Title D",
        "content": "Title D is pretty swell"
    }
] */

//PUT /posts/:id: Update an existing blog post.

app.put('/blogposts/:id', (request, response) => {
  const { id } = request.params
  const { title, content } = request.body

  const index = blogPosts.findIndex((item) => item.id == id)

  if (index === -1) {
    return response.status(404).json({ message: 'Blog not found' })
  }

  blogPosts[index] = {
    ...blogPosts[index],
    title,
    content,
  }

  // Return the updated list of products
  response.json(blogPosts)
})

//DELETE /posts/:id: Delete a blog post.
app.delete('/blogposts/:id', (request, response) => {
  const { id } = request.params
  const index = blogPosts.findIndex((item) => item.id == id)

  // If the product is not found, return 404 status with a message
  if (index === -1) {
    return response.status(404).json({ message: 'Blog not found' })
  }

  // Remove the product from the array
  blogPosts.splice(index, 1)

  // Return the updated list of products
  response.json(blogPosts)
})
