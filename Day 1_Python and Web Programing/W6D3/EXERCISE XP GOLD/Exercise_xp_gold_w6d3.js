//1
/*
printFullName({first: 'Elie', last:'Schoppik'}) 
'Your full name is Elie Schoppik` */

let nameObj = {
  first: 'Jeremy',
  last: 'Gross',
}

function printFullName(someObj) {
  const { first, last } = someObj
  return `Your full name is ${first} ${last}`
}

console.log(printFullName(nameObj))

//2
/*
Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]] */

let theObj = { a: 1, b: 2, c: 3 }

function keysOfObj(someObj) {
  let values = Object.values(someObj)
  console.log(values)
}

keysOfObj(theObj)

class Bird {
  constructor() {
    console.log("I'm a bird. 🦢")
  }
}

class Flamingo extends Bird {
  constructor() {
    super()
    console.log("I'm pink. 🌸")
  }
}

const pet = new Flamingo()
