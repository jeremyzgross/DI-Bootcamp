//init express and routers
const express = require('express')
const app = express()
const postgres = require('postgres')
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// router
const user_router = require('./Routes/users.route.js')

//use router
app.use('/users', user_router)

app.listen(3001, () => {
  console.log('run on 3001!')
})
