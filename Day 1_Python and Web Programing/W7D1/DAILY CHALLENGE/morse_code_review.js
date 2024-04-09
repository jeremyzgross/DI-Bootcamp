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

const toJs = (jsonString) => {
  return new Promise((res, rej) => {
    let objMorse
    try {
      objMorse = JSON.parse(jsonString)
    } catch (error) {
      rej('This is not a valid Json')
    }
    if (Object.keys(objMorse).length === 0) {
      rej('This is an empty Object')
    }
    res(objMorse)
  })
}

const toMorse = (morseObj) => {
  const userStr = prompt('Enter a word')
  if (!userStr) {
    return Promise.reject('No input provided')
  }
  const arrStr = userStr.toLowerCase().split('')
  const returnArr = arrStr.map((char) => {
    if (char in morseObj) {
      return morseObj[char]
    } else {
      return Promise.reject(`Char ${char} not exist in the morse code`)
    }
  })
  return Promise.resolve(returnArr)
}

const joinWords = (morseToHtml) => {
  return morseToHtml.map((element) => `<div>${element}</div>`)
}

toJs(morse) //JS object
  .then((morseObj) => {
    return toMorse(morseObj) //from tojs aka jsonString
  })
  .then((morseArr) => {
    console.log(morseArr)
    return morseArr
  })
  .then((morseArr) => {
    document.getElementById('root').innerHTML = morseArr.join('')
  })
  .catch((error) => {
    console.log(error)
  })
