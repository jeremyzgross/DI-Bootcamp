//it is called index html because this is what servers will look for by default

console.log('test')

// //scope
// //anything within a block is a local scope and can't be used

// for (var index = 0; index < 5; index++) {} //var will make a variable global outside the scope

// console.log(index) //index will log as 5

// for (let i = 0; i < 5 i++) {} //var will make a variable global outside the scope

// console.log(i) //index will log as 5

// let x = 5

// function y() {
//   let x = 6
//   console.log(x)
// }

// y()
// console.log(x)

//you get two different values for x because of scoping

//default parameters functions

// function sum(a = 2, b = 3) {
//   console.log(a + b)
// }
// sum() //will go to default =
// sum(1, 2) //will use arguments

//conditional operators
// let y
// let x = 5
// if (x > 3) {
//   y = true
// } else {
//   y = false
// }
// console.log(y)

//ternary operators
//another way of writting conditional statements
// let x = 5
// let y = x ? true : false
// console.log(y)

// let x = 5
// let y = x > 3 ? true : x == 1 ? 1 : flase
// console.log(y)

//template strings

// let name = 'john'

// let greeting = name + ' hello,'

// console.log(greeting)

// let greeting2 = `Hello ${name}`

// console.log(greeting2)

// //function

// function sum(a,b){
//   return a + b
// }

// let ab = sum(2,4) //function return is asigning to a variable
// console.log(ab)

//can you call a function before it is defined? Yes, the engine reads the whole file, not line by line in python

// let a = x()
// console.log(a)
// function x() {
//   return 5
// }

// function expressions. Declare variable as a function
// console.log(greeting('Jeremy')) // greeting  is nothing before you create the function and it wont log
// const greeting = function (name) {
//   return `Hello, ${name}`
// }
// console.log(greeting('Jeremy')) //after it will work

//arrow functions

// const helloPerson = (name) => `Hello, ${name}`

// //the arrow is the same as declaring a function to a variable and returning

// console.log(helloPerson('Jeremy')) //returns 'Hello, Jeremy'

//nested functions

// function x() {
//   function y() {
//     return 5
//   }
//   return y
// }

// let a = x() //returning the function x not 5. This is because you are not calling the function without ()
// console.log(a()) //another way to look at this is a()() which is accessing the function x and within it's function y

//currying

// const y = (a) => {
//   return (b) => {
//     return a + b
//   }
// }

// console.log(y(5)(6)) // Returns 11 same as nested but with arrows

// //example using above
// let productVAT = y(1.17)
// console.log(productVAT(60))
// console.log(productVAT(100))

// //compose function

// const sum2 = (number) => number * 2
// const sum = (number) => number + 1

// const x = (a, b) => (c) => a(b(c)) //use of a function inside of a function

// let result = x(sum2, sum)(6)
// console.log(result)

//BY VALUE VS BY REFERENCE:

// let arr = [1, 2, 3]
// let arr2 = arr

// arr2[1] = 5 //changes both

// console.log(arr)
// console.log(arr2)
// //[1, 5, 3]
// //[1, 5, 3]

// //what if you wanted to avoid

// //you have to use cloning

// let arr3 = [1, 2, 3]
// let arr4 = [...arr3] //the three dots are a spread operator
// arr4[1] = 5

// console.log(arr3)
// console.log(arr4)

let obj = {
  //this also applies to objects
  a: 10,
}

let obj2 = { ...obj }
obj2.a = 22

console.log(obj)
console.log(obj2)

//more examples

let obj5 = {
  a: 10,
  b: {
    c: 5,
  },
}

let obj6 = { ...obj5 }
obj6.b.c = 22

console.log(obj5)
console.log(obj6)

//returns {a: 10, b: {…}} for both

//more examples

let user = {} //user is an object
let post = new Object() //post is an object

user.name = 'John' // name is addded to object
user['email'] = 'email@email.com' //email is added to object
console.log(user['name']) // locating the name but it's name

let a2 = 'name' //a2 is a string
let user1 = {
  //you can then apply this value to the key like so
  [a2]: 'John',
}
//advantage of this is you can change the key without going into object
console.log(user1)

//loop through an object

for (let x in user) {
  console.log(x, user[x])
}
