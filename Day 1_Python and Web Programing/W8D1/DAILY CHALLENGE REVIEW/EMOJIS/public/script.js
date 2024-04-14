const feedback = document.getElementsByClassName('feedback')[0]
const score = document.getElementsByClassName('score')[0]
const correct = document.getElementsByClassName('correct')[0]

let randomEmoji = {}
// We need to fetch from our URL (server)

function getRandom() {
  fetch('http://localhost:3001/emojis')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      randomEmoji = data.randomemojis
      let options = data.shuffleEmoji
      render(randomEmoji, options)
    })
    .catch((err) => {
      console.log(err)
    })
}

getRandom() // This will get the random and shuffle emojis from the server endpoint

/**
 * randomemojis:
 *   1:
 *     emoji: "🐶"
 *     name: "Dog"
 *   2:
 *     emoji: "🌮"
 *     name: "Taco"
 *   3:
 *     emoji: "😀"
 *     name: "Smile"
 */

function render(emoji, options) {
  //   const html = options.map((item) => {
  //     return `${item.name}`
  //   })
  //   const root = document.getElementById('root')
  //   root.innerHTML = 'Options: ' + html.join(', ') + ' Hint: ' + emoji.emoji
  // } // Param is the random emoji and the options to choose from

  //without options
  // const html = options.map((item) => {
  //   return `${item.name}`
  // })
  const root = document.getElementById('root')
  root.innerHTML = ' Hint: ' + emoji.emoji
} // Param is the random emoji and the options to choose from

function guessAnEmoji(event) {
  event.preventDefault()
  const guess = document.getElementById('guess').value.toLowerCase()
  const guessInput = document.getElementById('guess')

  console.log(guess)
  const name = randomEmoji.name.toLowerCase()
  console.log(name)

  fetch('http://localhost:3001/emojis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, guess }),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Feedback:')
      console.log(data)
      feedback.innerHTML = data.messege
      score.innerHTML = `Player Score: ${data.playerScore}`
      if (feedback.innerHTML !== 'Correct') {
        correct.innerHTML = `The correct answer was : ${data.answer} ${randomEmoji.emoji}`
      } else {
        correct.innerHTML = ''
      }
      guessInput.value = ''
    })
    .catch((err) => {
      console.error('Error:', err)
    })
  getRandom()
}
