const express = require('express')
const router = express.Router()



const {hello, world} = require('../1_Models/model')
router.get('/hello', hello)
router.post('/world', world)

module.exports = router
