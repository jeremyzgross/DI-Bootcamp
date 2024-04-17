//init express and routers
const express = require('express')
const app = express()
//router
const task_router = require('./Routes/task.route')
// const postgres = require('postgres')
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



//use router
app.use('/', task_router)

app.listen(3001, () => {
  console.log('run on 3001!')
})
