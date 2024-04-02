//why will you get get

// let b = 3

// d = b //3

// u = b //3

// ++d = 4 //plus 1 from variable

// const tree = ++3 * d*b *b b++ + + --d+ + +n-- + + d*b+ + u

// ++d = //before the action
// --d = //before the action

// d++ = //after the action
// d-- = //after the action

//example 2
//birthday cake candles. This array are birday cake candles you can blwo only the tallest candles. Birthday candles function will return how many candles you can blow.

// let arr = [2,4,4,1]

/*forEach*/

let users = ['john', 'marry', 'dan', 'anne']
//we can loop through with the traditional for loops or we can use for each

// users.forEach((item, index, arr) => {
  //the arr is a reference built in to forEach that points to the users array allow you to manipulate it. The item refers to the item the index refers to the index of each item in the array
//   console.log(item, index)
//   arr[index] = item + '@gmail.com'
// })

// console.log(users)
/*[
  'john@gmail.com',
  'marry@gmail.com',
  'dan@gmail.com',
  'anne@gmail.com'
] */

//SOME method

// let result = users.some((item) => {
//   //looking for the item
//   return item === 'dan'
// })

// console.log(result)

// //EVERY Method

// let result2 = users.every((item) => {
//   return item === 'Dan'
// })
// console.log(result2) //returns false because not every item is dan. Only one

//Exercise
/*
create a function that get an array of Numbers as input and return a new array with all numbers multiply by 2. 
For example given this array: [1,2,3,4]
results: [2,4,6,8]
*/

function multiplyArray(someArray) {
  someArray.forEach((item, index, arr) => {
    //important to use references and not new empty list
    arr[index] = item * 2
  })
  console.log(someArray)
}

multiplyArray([1, 2, 3, 4])

// //MAP Method

// numbers = [1, 2, 4, 5]

// let arr = numbers.map((item) => {
//   return item * 2
// })
// console.log(arr)

// let users2 = [
//   { userid: 1, name: 'john', email: 'johnemail@email.com' },
//   { userid: 2, name: 'marry', email: 'marry@email.com' },
//   { userid: 2, name: 'Anne', email: 'Anne@email.com' },
// ]

// function render(user2) {
  let html = users2.map((item) => { //map through each item(object) in the array
    //return a string element:
    return `<div>
    <h2> ${item.userid}</h2>
    <h4> ${item.name}</h4>
    <p>${item.email}</p>
    </div>`
  }) //loops throught he users2 arr and takes each obj out of obj and into an array to them be used to append the dom
  console.log(html)
  document.getElementById('root').innerHTML = html.join('')
}

// render(users2)

/* Exercise
 * Create an function that get an array of Numbers as input
 * and return a new array with all numbers greater than 3
 * For example:
 * Give this array [0,1,1,2,3,5,8]
 * result [5,8]
 */
//ATTEMPT MAP DOES NOT WORK FOR THIS
// let thisArr = [0, 1, 1, 2, 3, 5, 8]
// function greaterThanThree(someArray) {
//   let eachNumber = someArray.map((item) => {
//     //map returns every item. Would not work in this case. Should use each
//     if (item > 3) {
//       return item
//     }
//   })
//   return eachNumber
// }
// // console.log(greaterThanThree(thisArr))

// //SOLUTION which is the same as filter method
function filter(arr) {
  let newArr = []
  for (item of arr) {
    if (item > 3) newArr.push(item)
  }
  return newArr
}
console.log(filter(thisArr)) //[5,8]

//FILTER FUNCTION

let newArry = thisArr.filter((item) => {
  return item > 3
})

// console.log(newArry);

//example. Return users with a name that includes the letter o (not case sensative). Return a new array with the object

// const arr = [
//   { id: 1, name: 'John', email: 'jjj@gmail.com' },
//   { id: 2, name: 'Mor', email: 'mmm@gmail.com' },
//   { id: 3, name: 'Marry', email: 'marry@gmail.com' },
//   { id: 4, name: 'Or', email: 'or@gmail.com' },
// ]

//ATTEMPT
// function findO(someArray){
//   for (let obj of someArray){
//     userName = obj.name
//     console.log(userName);
//   }
// }

// findO(arr)

//SOLUTION

// const newArr = arr.filter(item =>{
//   return item.name.toLowerCase().includes('o')
// })

// console.log(newArr);

/**  Exercise
 * Create an function that get an array of Numbers as input
 * and return the sum of all numbers
 * For example:
 * Give this array [2, 5, 10,100]
 * result 117
 */

//RESULTS
thisarray = [2, 5, 10, 100]
function reduce(someArray) {
  let sum = 0
  someArray.forEach((item) => {
    sum += item
  })
  return sum
}
console.log(reduce(thisarray))

//USING BUILT IN REDUCE FUNCTION

let arrExample = [2, 5, 10, 100]
let sum = arrExample.reduce((total, item) => { //total is previous item total is new item
  return total + item
})

console.log(sum);


let epic2 = ['Jeremy', 'learns', 'code']
console.log(epic2.reduce(reducer, 'The story is '));
let epicString = epic.reduce(reducer,'The story is ')

console.log(epicString)


let arrExample = [2, 5, 10, 100]
let sum = arrExample.reduce((total, item) => { //total is previous item total is new item
  return total + item
},200)

console.log(sum);

//FIND METHOD

// const arr = [
//   { id: 1, name: 'John', email: 'jjj@gmail.com' },
//   { id: 2, name: 'Mor', email: 'mmm@gmail.com' },
//   { id: 3, name: 'Marry', email: 'marry@gmail.com' },
//   { id: 4, name: 'Or', email: 'or@gmail.com' },
// ]

// let user = arr.find((item) => {
//   return item.id === 4
// }) //returns 'Or' obj
// console.log(user);

//FINDINDEX METHOD

// const arr = [
//   { id: 1, name: 'John', email: 'jjj@gmail.com' },
//   { id: 2, name: 'Mor', email: 'mmm@gmail.com' },
//   { id: 3, name: 'Marry', email: 'marry@gmail.com' },
//   { id: 4, name: 'Or', email: 'or@gmail.com' },
// ]

// let indx = arr.findIndex((item) => {
//   return item.id === 2
// })

// console.log(indx) //returns index 1 since id = 2

//example

/** 
Birthday Cake Candles
This array are Birthday Cake Candles
You can blow only the tallest candles
let arr = [2,8,4,4,8,1,8]
birthdayCakeCandles function will return
how many candles you can blow
*/

// let candles = [2, 8, 4, 4, 8, 1, 8]
// function birthdayCakeCandles(someArray) {
//   let maxNum = Math.max(...someArray)
//   let filtered = someArray.filter((item) => {
//     return item === maxNum
//   })
//   return filtered.length
// }

// console.log(birthdayCakeCandles(candles)); //returns 3 candles because there are 3 of the tallest

// DESTRUCTURING

// let arr = [1, 2, 3]
// // let a = arr[0]
// // let b = arr[1]
// // let c = arr[2]

// let [b, a, c] = arr //assigning index of arr to each letter
// console.log(a, b, c)


//destructering with spread operator

let arr4 = [1,2,3,4,5,6]

let [e,f, ...rest] = arr4 //assigning e and f to the 0 and 1 index. The three dots will take the spread and apply to rest variable
console.log(e,f,rest); // results 1 2 [ 3, 4, 5, 6 ]