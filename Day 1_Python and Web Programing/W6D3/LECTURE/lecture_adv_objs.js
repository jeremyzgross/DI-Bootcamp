//ATTEMPT
function getOneDigit(n) {
  console.log(...String(n))
}
getOneDigit(115)

//Solution using recursion

function calcDigit(num) {
  let arr = new String(num).split('') //converting the int into a string
  let theReturn = 0
  for (let i in arr) {
    theReturn = theReturn + new Number(arr[i]) //converting back to an int and adds to the variable
  }
  if (theReturn < 10) {
    // if the number is less than 10. end the function. Otherwise run the new number through the function until it is a single digit
    return theReturn
  }
  return calcDigit(theReturn)
}
console.log(calcDigit(16))

// //Solution using Reduce method

// function calcDigit2(num) {
//   let arr = new String(num).split('')
//   let newNumber = arr.reduce((total, num) => {
//     return total + Number(num)
//   }, 0)
//   return newNumber < 10 ? newNumber : calcDigit2(newNumber)
// }

// //in summary, you need a new variable to store the number to put it in the recursion

// console.log(calcDigit2(456))

// /*
// OBJECT METHODS
// */

// let obj = {
//   username: 'john',
//   email: 'email@email.com',
//   age: 26,
// }
// //using destructering (object destructuring)
// const { email, username, age } = obj

// console.log(email) //email@email.com
// //unlike with srrays, the email will be assigned to the obj.email in the obj. Not by the index

// //also in functions
// function getUserInfo(obj1) {
//   const { email, username, age } = obj
//   return email + ' ' + username + ' ' + age
// }

// console.log(getUserInfo(obj))

//object method destructuring with an object inside

let obj3 = {
  username1: 'john',
  email1: 'email@email.com',
  age1: 26,
  address1: {
    city: 'Tel Aviv',
  },
}

const {
  email1,
  username1,
  age1,
  address1: { city },
} = obj3

console.log(city) //Tel Aviv

//LOOPING THROUGH OBJ

// for (let x in obj3){
//   console.log(x, obj3[x]);
// }

//CONVERTING OBJ TO ARR

//OBJECT.KEYS
let keys = Object.keys(obj3) //returns the keys as an array without writting a loop
console.log(keys)

//OBJECT.VALUES
let values = Object.values(obj3)
console.log(values)

// OBJECT.ENTIRES
let entries = Object.entries(obj3)
console.log(entries) //an array of arrays with the key and value in each array

//using object entires and arr methods to get keys and values at individual str
entries.forEach(([key, value]) => {
  console.log(key, value)
}) /*username1 john
email1 email@email.com
age1 26
address1 { city: 'Tel Aviv' } */

//converting 2D array back to obj
//OBJECT.FROMENTRIES
let arr = [
  ['username1', 'john'],
  ['email1', 'email@email.com'],
  ['age1', 26],
  ['address1', { city: 'Tel Aviv' }],
]

let obj = Object.fromEntries(arr)
console.log(obj)

//CLONE NOT REFER
let newObj = { ...obj3 } //now we have a clone as opposed ot a reference
/*JSON */
//STRINGIFY

let userJson = JSON.stringify(obj3)
console.log(userJson) //{"username1":"john","email1":"email@email.com","age1":26,"address1":{"city":"Tel Aviv"}}

//CONVERT JSON TO OBJ
let userObj = JSON.parse(userJson)
console.log(userObj) /*{
  username1: 'john',
  email1: 'email@email.com',
  age1: 26,
  address1: { city: 'Tel Aviv' }
} */

//object will not convert to json when there is a function inside it. It will skip the function

//SPREADING
let newUser = { ...obj3, username1: 'Aaron', status: 'Single' } //clone the object and change a value in it's key. Can also adding a new key and value if it is not there already

console.log(newUser)

//THIS.
let objExample = {
  name: 'john',
  getName: function () {
    return name
  },
}
// console.log(objExample.getName()); //return undefined. You would need to use THIS in the obj to get the name liek this:
let objExampleWithThis = {
  name: 'john',
  getName: function () {
    return this.name
  },
}
console.log(objExampleWithThis.getName())

//CLASS
class Animal {
  constructor(type,name) {
    //initializer
    this.type = type //this is similar to self in python
    this.name = name
  } //methods
  getType() {
    return this.type
  }
  setName(name) {
    this.name = name
  }
  getTypeAndName() {
    return this.type + ' ' + this.name
  }
}

let myDog = new Animal('dog', 'kelev')
let yourDog = new Animal()
console.log(myDog) //Animal { type: 'Dog', name: 'Kelev' }


//EXTENDS (INHERITING)
class Dog extends Animal{ //dog inherits from animal (extends)
  constructor(name) {
    super('Dog', name) //will call parent constructor
  }
}

let dogExample = new Dog('Shadow')

console.log(dogExample); // Dog { type: 'Dog', name: 'Shadow' }
console.log(dogExample.getType()); //returns Dog class

class Cat extends Animal{
  constructor(name){
    super('Cat', name)
  }
  setType(param){ 
    this.type = param //utilizing from animal parent
  }
  getType(){
    return "Guhh" //overiding parent getType() method
  }
}

let cat1 = new Cat('Chatouli')
console.log(cat1);