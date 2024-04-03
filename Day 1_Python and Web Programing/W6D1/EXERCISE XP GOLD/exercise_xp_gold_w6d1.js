//1

// let landscape = function () {
//   let result = ''

//   let flat = function (x) {
//     for (let count = 0; count < x; count++) {
//       result = result + '_'
//     }
//   }

//   let mountain = function (x) {
//     result = result + '/'
//     for (let counter = 0; counter < x; counter++) {
//       result = result + "'"
//     }
//     result = result + '\\'
//   }

//   flat(4) //____
//   mountain(4)////
//   flat(4)// ____\\

//   return result
// }

// console.log(landscape())

let landscape = () => {
  let result = ''
  let flat = (x) => {
    for (let count = 0; count < x; count++) {
      result = result + '_'
    }
  }
  let mountain = (x) => {
    result = result + '/'
    for (let counter = 0; counter < x; counter++) {
      result = result + "'"
    }
    result = result + '\\'
  }
  flat(4)
  mountain(4)
  flat(4)

  return result
}
console.log(landscape())


//2 Analyse the code below, and before executing it, predict the outcome of the last line.

const addTo = (x) => (y) => x + y
const addToTen = addTo(10)
let results = addToTen(3)

console.log(results);

