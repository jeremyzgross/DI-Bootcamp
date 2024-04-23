
const express = require('express')

require('dotenv').config()
const apiKey = process.env.API_KEY

module.exports = {
  apiKey,
}
