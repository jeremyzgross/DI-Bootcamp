//create element

const mainDiv = document.querySelector('.MainDiv')

// function randomColors() {
//   let letters = '0123458789ABCDEF'
//   let color = '#'
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(math.random() * 16)]
//   }
//   return color
// }

const colorsArr = [
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#800080', // Purple
  '#FFA500', // Orange
  '#008000', // Dark Green
  '#000080', // Navy
  '#A52A2A', // Brown
  '#003399', // Smalt
  '#FF1493', // Deep Pink
  '#FFD700', // Gold
  '#32CD32', // Lime Green
  '#4682B4', // Steel Blue
  '#800000', // Maroon
  '#808000', // Olive
  '#008080', // Teal
  '#800080', // Purple
  '#008080', // Aqua
]

function createColors() {
  const colorPallete = document.querySelector('.colorPallete')
  for (let i = 0; i < 22; i++) {
    let colorsDiv = document.createElement('div')
    colorsDiv.style.backgroundColor = colorsArr[i]

    colorPallete.appendChild(colorsDiv)
  }
}

function createBoard() {
  let board = document.querySelector('.colorGrid')
  for (let i = 0; i < 3000; i++) {
    let gridDiv = document.createElement('div')
    gridDiv.style.backgroundColor = 'gray'
    board.appendChild(gridDiv)
  }
}

createColors()
createBoard()
