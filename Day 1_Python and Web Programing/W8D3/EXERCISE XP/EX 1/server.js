//init express and routers
const express = require('express')
const app = express()
const postgres = require('postgres')
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router

const posts_router = require('./Routes/blog.route.js')

app.use('/', posts_router)

app.listen(3000, () => {
  console.log('run on 3000!!')
})
