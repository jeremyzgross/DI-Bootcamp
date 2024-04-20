//init express and routers
const express = require('express')
const app = express()
const postgres = require('postgres')
const path = require('path')
const cors = require('cors')

//middleware
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '..', 'index.html'))
})

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const finance_router = require('./Routes/route.finance.js')

app.use('/finance', finance_router)

app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(500).json({ error: 'Internal server error' })
})

app.listen(3001, () => {
  console.log('run on 3001!')
})
