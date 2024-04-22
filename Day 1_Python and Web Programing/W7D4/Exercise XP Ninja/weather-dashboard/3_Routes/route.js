const express = require('express')
const router = express.Router()

const { getWeather } = require('../2_Controllers/controller')

router.get('/weather', getWeather)

module.exports = router
