"use strict";
//type alias
let userStatus = "success";
//function return and type gaurds
const add = (a, b) => {
    //type gaurds ensuring results
    if (typeof b === "string") {
        return -1;
    }
    return a + b;
};
function addOverload(a, b) {
    return a + b;
}
console.log(addOverload(2, 3));
console.log(addOverload('s', 'd'));
// console.log(addOverload('s', 1)); //can't use this despite the last function because it has to be the above types
//Function not return value:
const greet = (name) => {
    console.log(`Hello ${name}`);
};
const someAddFunction = (a, b) => {
    return a + b;
};
//optional parameter
const addOptional = (a, b) => {
    return a + (b || 0);
};
//default parameter
const addDefault = (a, b = 0) => {
    return a + b;
};
//rest parameter
const addRest = (a, ...rest) => {
    return a + rest.reduce((acc, val) => acc + val, 0);
};
console.log(addRest(2, 3, 4, 5, 6));
//never type
const throwError = (message) => {
    throw new Error(message);
};
let a = 'hello';
let b = a; //'hello
b = 2; // 2
let c = a;
let d = "world"; //same as let d: One
let e = "aaa";
//assertion becomes more useful in DOM elements
// const img = document.querySelector('img')
// img.src = 'https://google.com' //typescript does allow this because it can be null
//to change:
// const img2 = document.querySelector('img') as HTMLImageElement // only if you are sure it is present in html 
// img2.src = 'google.com'
//casting example 
// const input = <HTMLInputElement> document.querySelector('input')
const year = document.getElementById("year");
const thisYear = new Date().getFullYear().toString();
year.setAttribute("datetime", thisYear);
year.textContent = thisYear;
