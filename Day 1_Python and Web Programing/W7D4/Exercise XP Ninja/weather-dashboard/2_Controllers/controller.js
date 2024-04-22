const express = require('express')
const app = express()
const { _getWeather } = require('../1_Models/model')

const getWeather = async (req, res, next) => {
  try {
    const { zipCode, countryCode } = req.query
    const result = await _getWeather(zipCode, countryCode)
    res.json(result)
  } catch (error) {
    console.error('Error getting weather', error)
    next(error)
  }
}

module.exports = {
  getWeather,
}
