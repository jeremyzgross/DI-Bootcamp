const express = require('express')
const app = express()

const logger = require('./4_Middleware/middleware')

//middleware
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const cors = require('cors')

//router
const hello_router = require('./3_Routes/route')

//use middleware
app.use(logger)
app.use(cors())

app.use('/api', hello_router)

app.listen(3001, () => {
  console.log('run on 3001!')
})
