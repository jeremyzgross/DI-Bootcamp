const express = require('express')
const {
  randomQuestion,
  submitAnswer,
  getScore,
} = require('../Controllers/question.controller.js')

const router = express.Router()

router.get('/quiz', randomQuestion)
router.post('/quiz', submitAnswer)
router.get('/quiz/score', getScore)

module.exports = router
