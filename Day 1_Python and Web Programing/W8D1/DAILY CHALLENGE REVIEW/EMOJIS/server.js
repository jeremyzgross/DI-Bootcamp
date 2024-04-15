const express = require('express')
const cors = require('cors') //solve potential cors issues
const { emojis } = require('./emojis')
// console.log(emojis)
const app = express()
app.use(express.static(__dirname + '/public')) //makes path to static html files. FINDS INDEX.HTML BY DEFAULT
app.use(cors()) //solve potential cors issues

//body parser request
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.listen(3001, () => {
  console.log('run on 3001')
})

//getting a random emoji uses shuffleArray to resondom to the client with a random object from the array
app.get('/emojis', (req, res) => {
  const randomIndx = Math.floor(Math.random() * emojis.length)
  const randomemojis = emojis[randomIndx]
  const shuffleEmoji = shuffleArray(emojis)
  res.json({ randomemojis, shuffleEmoji }) //gets random single emojis json and whole list as emojis.
  //IMPORTANT: THE CURELY BRACKET ALLOWS YOU TO SEND TWO ITEMS. Cannot have two responses
})
//SHUFFLE ARRAY ALGORITHM
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}

//post request. Client sends a json with a name and guess. The rest is logic if they are correct

let playerScore = 0
app.post('/emojis', (req, res) => {
  const { name, guess } = req.body
  if (guess === name) {
    playerScore++
    return res.json({ messege: 'Correct', playerScore })
  } else {
    res.json({ messege: 'Try Again', playerScore, answer: name })
  }
})
