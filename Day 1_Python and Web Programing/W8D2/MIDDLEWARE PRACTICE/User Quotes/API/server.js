//init express and routers
const express = require('express')
const app = express()
const postgres = require('postgres')
const { auth, logger } = require('./4_Middleware/middleware.quotes')
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router
const quote_router = require('./3_Routes/route.quotes')

//use router
app.use(logger)
app.use(auth)

app.use('/', quote_router)
// app.get('/login', (req, res) => {
//   res.sendfile('login.html')
// })

app.listen(3001, () => {
  console.log('run on 3001!')
})
