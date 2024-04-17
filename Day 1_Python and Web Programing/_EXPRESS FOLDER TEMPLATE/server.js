//init express and routers
const express = require('express')
const app = express()
const postgres = require('postgres')
//middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

//router
// const ROUTER_NAME = require('/ROUTE PATH)

//use router
//app.use('/'. ROUTER_NAME)

app.listen(3001, () => {
  console.log('run on 3001!')
})
