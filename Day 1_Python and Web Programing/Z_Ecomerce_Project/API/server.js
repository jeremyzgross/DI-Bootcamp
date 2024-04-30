//init express and routers
const express = require('express')
const app = express()

const { logger } = require('./4_Middleware/middleware.ecommerce')
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router
const ecommerce_router = require('./3_Routes/route.ecommerce')

//use middleware
app.use(logger)

//use router
app.use('/', express.static(__dirname + '/Public'))


app.use('/api', ecommerce_router)

app.listen(3001, () => {
  console.log('run on 3001!')
})
