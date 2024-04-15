//init express and routers
const express = require('express')
const app = express()
const todos_router = require('./Routes/todos.routes.js')

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//init port
app.listen(3000, () => {
  console.log('run on 3000!!')
})

app.use('/', todos_router)
