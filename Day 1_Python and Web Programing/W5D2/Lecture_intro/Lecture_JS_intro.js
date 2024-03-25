// JS variable types are determined in the start with let

// let name = value;
let str = 'text';
let num = 5; 
let bool = 4 > 5;
// let void = null;
let un = undefined
let arr = [];
let obj = {};

let name2; //this is the same of a variable be "undefinded"
name2 = 5 //we are now defining it later

//string can be defined with single quote ('') double quote (""), and backtick (``)
let str2 =``;

let greeting = 'hello'
//RULES: cant start a variable name with a number, can't user the saem variable neme twice 
let name3 = 'nadav'
let fullGreeting = greeting + name3;

console.log(greeting, name3);

let longStr = "This is a very long string which needs\
to wrap across multiple lines because \
otherwise, my code is unreadable.";

console.log(longStr.length);
console.log(longStr.indexOf('long'));
//if you give an item that is not in the string it will return -1, which means it is not there

console.log(longStr.indexOf(15, 18)); //the range of the indexOf for what you are looking for. Returns 'long'
let small = longStr.toLocaleLowerCase()
let big = longStr.toUpperCase()
console.log(small);
console.log(big);

//------------------------

//numbers


let num2 = 15
console.log(isNaN(num2)); //this will return false because num2 is a number 
let numString = num2.toString() //make a string
console.log(numString);

let frac = 7.565044 //fraction 

console.log(frac.toFixed(2)); //toFixed round up to two digit

//------------------------

//booleans

let bool2 = true
let checkBool = Boolean(bool2) //Boolean method will tell us what type of boolean a variable is 

console.log(checkBool);

//comparison 

let compare = 10 == 5 //we use two equals for equals. Single equals sign is only for assigning
//above will give us false becaue they are not equal
console.log(compare);

//string comparison

let compare2 = 10 ==='10' //this will return false because they are strictly not the same. == would return true

let or = 10 > 5 || 5 > 15 //this will return true because one of them is ture between the two 'ors'
let and = 15 > 2 && 5 <18 //this will return false because they are both not true. And is saying and this are both ture. whereas or is only one needs to be true

let num3 = 5
num3++ //this will add one to a number 
num3-- //substract one 

//----------------------------------

//user interface functions

// alert('hello world') // throws a window at the user. Anything bellow this in the code will not execute until you click 'ok'
// confirm('Hello two world') //yes or no question. It will return the response from the user. See below 
// let conf = confirm('confirm for me to be true') //will save true or false to the variable
// prompt('and what is your name?') //allows the user to write things. Like confirm it will return to a variable if you choose 


//------------------------------------

//Arrays

let arr2 = [1,2,3,4,5]

let colors = ['blue', 'red', 'green']

console.log(colors[1]);

colors[2] = 'pink' //this will replace the 2nd index from green to pink

colors[-1] = 'pink' //this will add on to the end, not replace

console.log(colors); //['blue', 'red', 'pink', -1: 'pink']

colors.push('yellow') //this will add a new value at the end unless there is -1
console.log(colors); //['blue', 'red', 'pink', 'yellow', -1: 'pink']

colors.pop() //removes the last elemenet in the list
colors.shift() //removes the first element 
colors.unshift('blue') //add to the first element

colors.splice(0, 1) // removes 0 index and 1 index
console.log(colors); 

colors.splice(0,0,'yellow', 'orange') //first 0 index is where to start, second 0 is how many things you want to remove. Then insert at the begining everything after second digit

let sliced = colors.slice(1,3) //creates a new list from things you removed. Not inclusive for second number

//------------------------------------------

//objects


let obj2 ={
    key: 'value'
}

let car = {
    owner: 'nadav',
    year: '2016',
    model: 'ford focus'
}

console.log(car['year']); //access items in an object
console.log(car.model); //access items in an object

//to change something in the object:
car.color = 'gold' //will add a new thing to the list can also be used to update existing keys

//deleting objects
delete car.thing //deletes the thing key 

//------------------------------------------

//if else conditional statements
//syntax:

if (car.year > 2022){ //round brackets is the condition
    console.log(`that's a new car`); //curly brackets is what should happen if condition is met
} else if (car.year < 2005){
    console.log(`That's an old car`);
} else {
    console.log(`not a new car`); 
}


//switch cases 

switch(car.owner){ //like if else statements but... it will look for the if statement that is true and return everything below it. In this case nadav is the owner therefore everything below it will happen.
    case 'gil':
    console.log('gils car');

    case 'nadav':
    console.log('that is nadavs car');
    break // a break will stop the switch case after here

    case 'fred':
    console.log('who is fred anyways');

    default:
    console.log('that is the default'); //sorta like the else in an if-else
}

//----------------------------------------------
//loops

let nums = [48,35,78,12]
for (let index = 0; index < 10; index++) { //the start, the end, and what to incramenet
    console.log(index);

}

for (let i = 0; i < nums.length; i++){
    console.log(nums[i]);
}


//for of loop 

for (let num of nums){
    
    console.log(num);
}

//for in loop

for (const key in car){
    console.log(key);
    let value = car[key]
}

//while loops

let counter = 0
while (counter < 10){
    console.log(counter); //counter
    counter++ //add to counter incramentingly
}


let counter2 = 0
while (counter2 < 10){
    counter2++  //these are the same regardless of the position in the curly brackets
    console.log(counter2); //counter
}

//do-while loops

let counter3 = 0 
do { //do the thing first and then check if the condition is met 
    console.log(counter3);
    counter3++

}while (counter < 10);

//----------------------------------------

//keywords and scopes

{
    let stuff = 'stuff'
}

// console.log(stuff) //this will not work becuase stuff is inside a curely braket making it a local variable (not is scope)

var nadav = 'nadav' //var is considered legacy because it has problems with issues with scope
var nadav = 'not nadav' // another problem is it can be redefined 

//let is the solution to this. Because it can't be redeclared and it does not have scope issues

let nadavthing = 'nadav'
nadavthing = 'Nadav' //this can change it 

const nadavthingtwo = 'nadav'
nadavthingtwo = 'Nadav' //this will not change because const