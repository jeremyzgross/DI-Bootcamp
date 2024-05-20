// let username = "John";
// let age = 25;

// username = 'daniel'
// // username = 25

// // age = '25'

// let a = 12 
// let b = '12'
// let c = 2

// console.log(a+b); //this will be astring '1212'

// // console.log(a+b); //gives a red line because you cant divide a string and an int


// let a: number = 12 
// let b: string 

// b='12'
// b=123 //error

// let yesno: boolean = true 
// yesno = false 

let num1 = 12
//better way 
let num2:number = 12

//type any

let anyVar: any //not strict 

//functions 
const sum = (a:number,b:number) : number=>{
  return a+b
}
//the 3rd type above is what is expected of the function return 
// console.log(sum(3,'2')); //it wont compile

//UNION type with | (or)
let union: number | string = 12
let union2: number | string | boolean

// union = true //wont work
union2 =true //can be one of 3

const concatinate = (a: number, b:string | number)=>{
  if (typeof b === 'string') {
    return 'yes'
  }
}

// type RegEXp

// let re: RegExp = /\w+g

//type array

let strarr: string[] = ['a', 'b', 'c'] // string[] means array of string

//UNION Array
let numStr: (string|number)[] = ["a", 1, "b", 2]

//type tuple

let myTuple: [string, number, boolean] = ["a", 1, true] //in this syntax the array has to be in the order of types. First a string, then a number, then a boolean. It also can take 3 elements not any more or less

//type OBJECTS

let myObj: object ={}

myObj = [] // will not get an error becaue JS recognizes an array as an object

const myObj2 = {
  name: "john",
  age: 25,
}

// myObj2.name = 5 //wont let you do that becaue name is a string

myObj2.age = 2 // checks out

//type & interface
type User = {
  name: string,
  age: number,
}

let user : User = {
name: "john",
age: 21  
} //this works because user follows the principles of your custom type "User"

// user.address = 'abc' //will not work because the type User does not have this


//INTERFACE

interface MyUser {
  name: string,
  age: number,
  address: string
} //doesnt have equals sign to define. Used for objects whereas type could be anything 

//example
const printUser = (someUser:User) =>{
  console.log(someUser);
  
}
printUser({name: "john",
age: 21 })

// printUser({name: "john",
// age: 21, status: 'something'}) //get's an error: Object literal may only specify known properties, and 'status' does not exist in type 'User

//type ENUM

enum Grade {
  U,
  D,
  C,
  B,
  A,
}

console.log(Grade.A); //shows 4 because it is the 4th index

console.log(Grade[0]); //shows U which is at index 0


//in the compuled js it looks like this:
//var Grade;
// (function (Grade) {
//     Grade[Grade["U"] = 0] = "U";
//     Grade[Grade["D"] = 1] = "D";
//     Grade[Grade["C"] = 2] = "C";
//     Grade[Grade["B"] = 3] = "B";
//     Grade[Grade["A"] = 4] = "A";
// })(Grade || (Grade = {}));
// console.log(Grade.A); //shows 4 because it is the 4th index
// console.log(Grade[0]); //shows U which is at index 0

//type literal
let literal: "loading" | "success"| "failed"
