//EX 1
/*
 Using this array :
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
1.Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

2.Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
Hint : Use the array methods taught in class. Look at the lesson Array Methods.
*/
// const colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']

function favColors(someArr) {
  someArr.forEach((item, index) => {
    console.log(`#${index + 1} choice is ${item}`)
    if (item === 'Violet') {
      console.log('YEAH')
    } else {
      console.log('No...')
    }
  })
}
// favColors(colors)
/* Results:
#1 choice is Blue
#2 choice is Green
#3 choice is Red
#4 choice is Orange
#5 choice is Violet
#6 choice is Indigo
#7 choice is Yellow
 */

//EX 2
/*Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
Hint : Use the array methods taught in class and ternary operator. */
// const colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']
// const ordinal = ['th', 'st', 'nd', 'rd']

// If the index of the color is greater than 2, we use the 0 index of ordinal.
//If the index of the color is 0, we use the 1 index of ordinal
//if the index of the color is 1, we use the 2 index of ordinal
//if the index of the color is 2, we use the 3 index of ordinal

function suffix(colors, ordinals) {
  colors.forEach((item, index) => {
    let ordinal = index > 2 ? ordinals[0] : ordinals[index + 1]
    console.log(`${index + 1}${ordinal} choice is ${item} `)
  })
}

suffix(colors, ordinal)

//Ex 3
/*Analyze these pieces of code before executing them. What will be the outputs ?
 */

const fruits = ['apple', 'orange']
const vegetables = ['carrot', 'potato']

const result = ['bread', ...vegetables, 'chicken', ...fruits]
console.log(result)

//output: [bread, carrot, potato, chicken, apple, orange]

//------2------
const country = 'USA'
console.log([...country])
//[usa]
//actual output was [ 'U', 'S', 'A' ]
//------Bonus------
let newArray = [...[, ,]]
console.log(newArray)
//,,
//actual output is [ undefined, undefined ]

//Ex 4
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor' },
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor' },
]
//Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this : const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]

const welcomeStudents = users.map((item) => {
  return `Hello ${item.firstName}`
})
console.log(welcomeStudents)

const fullStack = users.filter((item) => {
  if (item.role === 'Full Stack Resident') {
    return item
  }
})
console.log(fullStack)

//BONUS:
const fullStack = users
  .filter((item) => {
    if (item.role === 'Full Stack Resident') {
      return item
    }
  })
  .map((item) => {
    return item.lastName
  })
console.log(fullStack)

//EX 5
/*
Using this array const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

Use the reduce() method to combine all of these into a single string. */

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away']

let epicString = epic.reduce((total, item, index) => {
  let word = index === epic.length - 1 ? item : item + ' '
  return total + word
}, '')

console.log(epicString)

//Ex5
/*
Using the filter() method, create a new array, containing the students that passed the course.
 */

const students = [
  { name: 'Ray', course: 'Computer Science', isPassed: true },
  { name: 'Liam', course: 'Computer Science', isPassed: false },
  { name: 'Jenner', course: 'Information Technology', isPassed: true },
  { name: 'Marco', course: 'Robotics', isPassed: true },
  { name: 'Kimberly', course: 'Artificial Intelligence', isPassed: false },
  { name: 'Jamie', course: 'Big Data', isPassed: false },
]

students
  .filter((item) => {
    return item.isPassed
  })
  .forEach((item) => {
    console.log(
      `Good job ${item.name}, you passed the course in ${item.course}`
    )
  })
