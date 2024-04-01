/*
Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
The new array should look like this :
const usernames = ["john!", "becky!", "susy!", "tyson!"]
 */
const gameInfo = [
  {
    username: 'john',
    team: 'red',
    score: 5,
    items: ['ball', 'book', 'pen'],
  },
  {
    username: 'becky',
    team: 'blue',
    score: 10,
    items: ['tape', 'backpack', 'pen'],
  },
  {
    username: 'susy',
    team: 'red',
    score: 55,
    items: ['ball', 'eraser', 'pen'],
  },
  {
    username: 'tyson',
    team: 'green',
    score: 1,
    items: ['book', 'pen'],
  },
]

//Part 1 //Create an array using forEach that contains all the usernames from the gameInfo array, add an exclamation point (ie. “!”) to the end of every username.
function exclamationUser(someObj) {
  let usernames = []
  const usernamesAsArray = someObj.map((item) => {
    usernames.push(item.username)
  })
  usernamesWithEx = []
  usernames.forEach((item) => {
    usernamesWithEx.push(item + '!')
  })
  console.log(usernamesWithEx)
}

exclamationUser(gameInfo) //[ 'john!', 'becky!', 'susy!', 'tyson!']

//Part 2 const winners = ["becky", "susy"]

function scoreBiggerFive(someObj) {
  const winners = []
  someObj.forEach((item) => {
    if (item.score > 5) {
      winners.push(item.username) // Add username to the winners array
    }
  })
  return winners
}

const winners = scoreBiggerFive(gameInfo)
console.log(winners)

//part 3 Find and display the total score of the users. (Hint: The total score is 71)

function totalScore(someObj) {
  let sum = 0
  someObj.forEach((item) => {
    sum += item.score
  })
  return sum
}

let scoreOfUsers = totalScore(gameInfo)

console.log(scoreOfUsers) //71
