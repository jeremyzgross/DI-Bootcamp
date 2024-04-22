
const express = require('express')
const app = express()

require('dotenv').config()
const apiKey = process.env.API_KEY

module.exports = {
  apiKey,
}
