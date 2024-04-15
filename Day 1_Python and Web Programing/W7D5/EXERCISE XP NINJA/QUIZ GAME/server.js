const express = require('express')
const cors = require('cors') //solve potential cors issues
const app = express()
const { questions } = require('./questions')
app.use(express.static(__dirname + '/public')) //makes path to static html files. FINDS INDEX.HTML BY DEFAULT
app.use(cors()) //solve potential cors issues

//body parser request
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3001, () => {
  console.log('run on 3001!!')
})

//route to get all questions
app.get('/question', (req, res) => {
  const randomIndx = Math.floor(Math.random() * questions.length)
  const randomquestion = questions[randomIndx]
  console.log(randomquestion)
  res.json(randomquestion)
})

let playerScore = 0

app.post('/question', (req, res) => {
  const { question, guess } = req.body
  const questionObj = questions.find((item) => {
    return item.question === question
  })
  if (guess === questionObj.answer) {
    playerScore++
    res.json({ messege: 'Correct', playerScore })
  } else {
    res.json({ messege: 'Try Again', playerScore, answer: questionObj.answer })
  }
})
