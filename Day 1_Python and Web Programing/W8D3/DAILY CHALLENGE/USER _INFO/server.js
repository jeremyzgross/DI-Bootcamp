//init express and routers
const express = require('express')
const app = express()

//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router
// const ROUTER_NAME = require('/ROUTE PATH)

//use router
//app.use('/'. ROUTER_NAME)

const user_router = require('./3_Routes/route.users')

app.use('/', user_router)
app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(3001, () => {
  console.log('run on 3001!')
})
