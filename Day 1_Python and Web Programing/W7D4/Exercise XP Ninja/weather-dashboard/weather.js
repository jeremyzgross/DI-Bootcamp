//init express and routers
const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, './public')))

const weather_router = require('./3_Routes/route')

app.use('/', weather_router)

app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(3001, () => {
  console.log('run on 3001!')
})
