const express = require('express')

const triviaQuestions = require('../Config/data_questions.js')

const randomQuestion = (req, res) => {
  const randomIndx = Math.floor(Math.random() * triviaQuestions.length)
  const randomquestion = triviaQuestions[randomIndx]
  res.json(randomquestion.question)
}

let playerScore = 0
const submitAnswer = (req, res) => {
  const { question, answer } = req.body
  const questionObj = triviaQuestions.find((item) => item.question === question)
  const isCorrect = questionObj.answer === answer

  if (isCorrect) {
    playerScore++
  }
  res.json({ messege: `answer is ${isCorrect}` })
}

const getScore = (req, res) => {
  res.json({ playerScore })
}

module.exports = { randomQuestion, submitAnswer, getScore }
