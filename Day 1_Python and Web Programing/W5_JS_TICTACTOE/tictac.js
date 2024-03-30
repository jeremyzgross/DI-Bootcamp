//change player
//fill square
//reset the game
let player = 'x'
let board = document.getElementsByClassName('board')
let button = document.querySelector('button')

let allSquares = document.getElementsByClassName('square')

board[0].addEventListener('click', fillSquare)

function fillSquare(event) {
  if (event.target.innerHTML === '' && player === 'x') {
    event.target.innerHTML = 'x'
    player = 'o'
  } else if (event.target.innerHTML === '') {
    event.target.innerHTML = 'o'
    player = 'x'
  }
}

button.addEventListener('click', resetBoard)

function resetBoard() {
  for (let i = 0; i < allSquares.length; i++) {
    allSquares[i].innerHTML = ''
  }
}
