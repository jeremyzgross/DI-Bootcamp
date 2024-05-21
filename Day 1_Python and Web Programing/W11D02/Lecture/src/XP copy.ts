//type alias

type StrOrNum = string | number | boolean
type StrOrNumArray = (string | number) [] //type alias. Essentaily our own types that we make   

type student = {
  name: string,
  age: number, 
  isGood: StrOrNumArray,
}

type user = {
  name: string,
  isGood: StrOrNum
}

//type literal 

type Name = "John" | "Jane" | "Doe"

// let username : Name = "Dan"

type status = "success" | "error"

let userStatus: status = "success"

//function return and type gaurds
const add = (a :number,b: number | string): number => {
  //type gaurds ensuring results
  if (typeof b ==="string"){
    return -1
  }
  return a + b
}

//function overload
function addOverload (a: number, b: number):number; 
function addOverload (a: string, b: string):string; 
function addOverload (a: any, b: any):any{
  return a + b
}

console.log(addOverload(2,3));
console.log(addOverload('s', 'd'));
// console.log(addOverload('s', 1)); //can't use this despite the last function because it has to be the above types

//Function not return value:

const greet = (name: string): void =>{ //void means you dont want to return anyhting else aside from what you wrote IF you are not returning
  console.log(`Hello ${name}`);
}

//Type function

type addFunc = (a: number, b: number) => number //if you want to reuse this function, you wouldnt need to redefine the types. See example:
const someAddFunction : addFunc = (a,b) =>{
  return a+b
}

//optional parameter

const addOptional = (a: number, b?: number): number =>{ //the ? means optional
  return a + (b||0)
}

//default parameter
const addDefault = (a: number, b: number = 0): number =>{
  return a + b
}

//rest parameter

const addRest = (a: number, ...rest: number[]): number =>{
  return a + rest.reduce((acc, val)=> acc+val, 0)
}
console.log(addRest( 2,3,4,5,6));

//never type

const throwError = (message:string): never =>{
  throw new Error(message)
}

//assertion or type casting
//alliases type 

type One = string 
type Two = string | number
type Three = 'hello' //literal

let a: One = 'hello'
let b = a as Two //'hello
b = 2 // 2
let c = a as Three

let d = <One>"world"  //same as let d: One
let e = <string | number> "aaa"

//assertion becomes more useful in DOM elements

// const img = document.querySelector('img')
// img.src = 'https://google.com' //typescript does allow this because it can be null
//to change:
// const img2 = document.querySelector('img') as HTMLImageElement // only if you are sure it is present in html 
// img2.src = 'google.com'

//casting example 
// const input = <HTMLInputElement> document.querySelector('input')


const year = document.getElementById("year") as HTMLSpanElement
const thisYear :string = new Date().getFullYear().toString()
year.setAttribute("datetime", thisYear)
year.textContent = thisYear

