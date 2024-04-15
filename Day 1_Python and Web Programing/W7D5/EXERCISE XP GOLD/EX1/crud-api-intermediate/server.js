const express = require('express')
const cors = require('cors') //solve potential cors issues
const axios = require('axios')
const app = express()
//body parser request
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3001, () => {
  console.log('run on 3001!')
}) //5001 causes issues on my computer

let url = 'https://jsonplaceholder.typicode.com/posts'

//default endpoint
app.get('/api', (req, res) => {
  const welcome = 'welcome'
  res.json(welcome)
})
//ENDPOINTS
//read all post
app.get('/api/posts', (req, res) => {
  axios
    .get(url)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.status(500).json({ error: error.message })
    })
})

//read single post
app.get('/api/posts/:id', (req, res) => {
  const postId = req.params.id //
  const postUrl = `${url}/${postId}`

  axios
    .get(postUrl)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({ error: error.message })
    })
})

//create post
app.post('/api/posts', (req, res) => {
  //NEED TO USE POSTMAN?
  // res.json({post, })
  const postData = req.body
  axios
    .post(url, postData)
    .then((response) => {
      res.json(response.data)
    })
    .catch((error) => {
      res.status(500).json({ error: error.message })
    })
})

//update post
app.put('/api/posts/:id', (req, res) => {})
//delete post
app.delete('/api/posts/:id', (req, res) => {})
