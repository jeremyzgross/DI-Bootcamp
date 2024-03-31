// #1
/*Analyse the code below, and predict what will be the value of a in all the following functions.
Write your prediction as comments in a js file. Explain your predictions. */

function funcOne() {
  const a = 5
  if (a > 1) {
    a = 3
  }
  alert(`inside the funcOne function ${a}`)
}
// #1.1 - run in the console:
// funcOne()
// #1.2 What will happen if the variable is declared
// it will be 3
// with const instead of let ?
//it will be an error becasue you are trying to reassign. Initially I thought it would ignore the attempt at reassigning

//#2
let a = 0
function funcTwo() {
  a = 5
  console.log(a)
}

function funcThree() {
  alert(`inside the funcThree function ${a}`)
}

// #2.1 - run in the console:
funcThree()
// alert 0
funcTwo()
//it wont do anything because no log or alert but it a is 5 because local scope
funcThree()
// 0
// #2.2 What will happen if the variable is declared
//
// with const instead of let ?
//three will return 0
//two will return it's local scope
//three will will return the same

//#3
function funcFour() {
  window.a = 'hello'
}

function funcFive() {
  alert(`inside the funcFive function ${a}`)
}

// #3.1 - run in the console:
funcFour() // hello (if a is declared it does not work?)
// funcFive() //0

//#4
let a = 1
function funcSix() {
  let a = 'test'
  alert(`inside the funcSix function ${a}`)
}

// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared
//it returns the local scope of test
// with const instead of let ?
//it would still return the local scope

//#5
let a = 2
if (true) {
  let a = 5
  alert(`in the if block ${a}`)
}
alert(`outside of the if block ${a}`)

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared
//it will return 5 because it can be redeclared with let
// with const instead of let ?
//return an error

//EX 2
/*
Transform the winBattle() function to an arrow function.
Create a variable called experiencePoints.
Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
Console.log the experiencePoints variable. */

function winBattle() {
  return true
}

const winBattle = () => true //making a arrow function

const experiencePoints = winBattle() ? 10 : 1 //defining experiencePoins by the results of winBattle. If it is true, you get 10 else get 1

console.log(experiencePoints)

//Ex3
/*
Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. The function should return true or false
Check out the example below to see the expected output */


//TRANSFORM THIS:
function isString(string) {
  if (typeof string === 'string') {
    return true
  } else {
    return false
  }
}

const isString2 = (string) => (true ? typeof string === 'string' : false)
console.log(isString('hello'))
console.log(isString2('hello'))

//Ex 4
/* Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.*/

const sum = (a, b) => console.log(a + b)
sum(2, 4)

//Ex 5
/*Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

First, use function declaration and invoke it.
Then, use function expression and invoke it.
Write in a one line comment, the difference between function declaration and function expression.
Finally, use a one line arrow function and invoke it. */

//kg to gram = kg *1000

function kgToG(kg) {
  return kg * 1000
}
console.log(kgToG(5))
const kgtoGfunction = function (kg) {
  return kg * 1000
}
console.log(kgtoGfunction(5))

//function declaration assigns a name to a function . Experession allows you to declare the function to a variable

const kgToG3 = (kg) => kg * 1000
console.log(kgToG3(5))
