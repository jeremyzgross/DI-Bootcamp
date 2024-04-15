const root = document.getElementsByClassName('root')[0]
const choicesDiv = document.getElementsByClassName('choices')[0]
let randomQuestion = ''
let choices = {}
async function getQuestion() {
  const url = 'http://localhost:3001/question'
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    randomQuestion = data.question
    choices = data.options
    console.log(choices)
    render(randomQuestion, choices)
  } catch (error) {
    console.log(error)
  }
}

getQuestion()

function render(question, answerOptions) {
  console.log(answerOptions)
  for (let [choice, answer] of Object.entries(answerOptions)) {
    let choiceInput = document.createElement('input')
    let choiceLabel = document.createElement('label')
    choiceLabel.setAttribute('for', choice)
    choiceInput.setAttribute('type', 'radio')
    choiceInput.setAttribute('name', 'choice')
    choiceInput.setAttribute('value', choice)

    choiceLabel.innerHTML = `${choice}. ${answer}`
    choicesDiv.appendChild(choiceInput)
    choicesDiv.appendChild(choiceLabel)
    const br = document.createElement('br')
    choicesDiv.appendChild(br)
    choiceInput.onclick = sendAnswer
  }
  root.innerHTML = `Question: ${question}`
}

async function sendAnswer(event) {
  const url = 'http://localhost:3001/question'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      question: randomQuestion,
      guess: event.target.value,
    }),
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
    const messege = data.messege
    const playerScore = data.playerScore
    const score = document.getElementsByClassName('score')[0]

    root.innerHTML = ''
    choicesDiv.innerHTML = ''
    getQuestion()
    score.innerHTML = `${messege} ${playerScore}`
    // const score = document.getElementsByClassName('score')[0]
    // score.innerHTML = `${messege} ${playerScore}`
  } catch (error) {
    console.log(error)
  }
}
