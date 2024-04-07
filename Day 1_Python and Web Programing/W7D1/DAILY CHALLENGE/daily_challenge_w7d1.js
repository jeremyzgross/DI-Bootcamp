// // /*Create two functions. Each function should return a promise.
// // The first function called makeAllCaps(), takes an array of words as an argument
// // If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// // else, reject the promise with a reason.
// // The second function called sortWords(), takes an array of words uppercased as an argument
// // If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// // else, reject the promise with a reason. */

// // /*function makeAllCaps(arr) {
// //   return new Promise((resolve, reject) => {
// //     for (i = 0; i < arr.length; i++) {
// //       if (typeof arr[i] === 'string') {
// //         resolve(arr[i].toUpperCase())
// //       } else {
// //         reject('not all a string')
// //       }
// //     }
// //   })
// // }*/

// function makeAllCaps(arr) {
//   return new Promise((resolve, reject) => {
//     const capsArray = []
//     for (let i = 0; i < arr.length; i++) {
//       if (typeof arr[i] === 'string') {
//         capsArray.push(arr[i].toUpperCase())
//       } else {
//         reject('not all strings')
//         return
//       }
//     }
//     resolve(capsArray)
//   })
// }

// function sortWords(arr) {
//   return new Promise((resolve, reject) => {
//     if (arr.length >= 4) {
//       resolve(arr.sort())
//     } else {
//       reject('arr too short')
//     }
//   })
// }

// // //in this example, the catch method is executed
// makeAllCaps([1, 'pear', 'banana'])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))

// //in this example, the catch method is executed
// makeAllCaps(['apple', 'pear', 'banana'])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error))
// //in this example, you should see in the console,
// // the array of words uppercased and sorted
// makeAllCaps(['apple', 'pear', 'banana', 'melon', 'kiwi'])
//   .then((arr) => sortWords(arr))
//   .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//   .catch((error) => console.log(error))

//part 2
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJS(morse) {
  return new Promise((resolve, reject) => {
    if (morse.length === 0) {
      reject('morse string is empty')
    } else {
      const morseObject = JSON.parse(morse)
      resolve(morseObject)
    }
  })
}

function toMorse(morseJS) {
  const word = prompt('Feed me a word: ')
  return new Promise((resolve, reject) => {
    const availibleLetters = Object.keys(morseJS)
    if (word.split('').some((letter) => !availibleLetters.includes(letter))){
      reject('please type lowercase')
    }else{
      resolve('Thank you')
    }
  })
}

toJS(morse)
  .then((morseObject) => toMorse(morseObject))
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
