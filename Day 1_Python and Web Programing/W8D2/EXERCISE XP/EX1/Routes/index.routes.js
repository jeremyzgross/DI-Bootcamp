//import express to use
const express = require('express')
//where importing functions from controllers...
const { welcome, about } = require('../Controllers/index.controller.js')

//init router from express

const router = express.Router()

router.get('/', welcome)
router.get('/about', about)

module.exports = router
