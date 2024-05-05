/**
 * class review
 */

class NameOfClass {
  constructor() {
    this.x = 5
  }
  getX() {
    return this.x
  }
  setX(num) {
    this.x = num
  }
}

const a = new NameOfClass()

// console.log(a.getX())

class SubOfNameOfClass extends NameOfClass {
  constructor() {
    super() //brings in Nameofclass methods
    this.y = 6
  }
}

/**
 * arrow function
 */

const sum = (x, y) => {
  return x + y
}

/**
 * object
 */

let obj = {
  name: 'John',
  age: 25,
}

//to access them
obj.name //method
obj['name'] //array
const { name } = obj //destructure

let aName = 'dan'
let email = 'e@email.com'

let user = { aName, email } //makes an obj without specificy key
// console.log(user)

function getuser(props) {
  console.log(props.aName, props.email)
}

getuser(user)

/**
 * arrays
 */

let arr = [1, 2, 3]
const [c, b] = arr //a will be 1 and b will be 2

//map array method

const newarr = arr.map((item, i) => {
  return item * i //i is the index position
}) //apply index to each item in arr

// console.log(newarr)

//arr of divs
const anotherArr = arr.map((item, i) => {
  return `<div>${item}</div>` //div for each item
})

/**
 * promises
 * 1) pending
 * 2) Fulfilled -resolve
 * 3) Reject
 */

const newPromise = new Promise(res, rej)

async function x() {
  // return 5
  throw new Error('nothing but zicush')
}

let options = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-access-key': 'some sort of key',
  },
  body: JSON.stringify({...})
}
fetch(url, options)


/**
 * cloning
 */

let someOtherArr = [1]
let arr2 = [...arr]

let anotherObj = {x:1}
let obj2 = {...anotherObj, w:5} //cloning and then adding another item in the second arg


/**
 * Ternary Operator
 */

let operator = anotherVar === 5 ? 8:9