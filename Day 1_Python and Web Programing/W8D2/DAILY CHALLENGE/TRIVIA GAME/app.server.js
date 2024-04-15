const express = require('express')
const app = express()
const question_router = require('./Routes/question.routes.js')

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//init port
app.listen(3000, () => {
  console.log('run on 3000!!')
})

app.use('/', question_router)
