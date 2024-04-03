//1
/*Analyze the code below. What will be the output?
 */
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207],
  },
}
const {
  name,
  location: {
    country,
    city,
    coordinates: [lat, lng],
  },
} = person

console.log(
  `I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`
)
//I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)

//2
/*
Using the code below, destructure the parameter inside the function and return a string as the example seen below:
output : 'Your full name is Elie Schoppik'
 */

function displayStudentInfo(objUser) {
  const { first, last } = objUser
  console.log(`Your full name is ${first} ${last} `)
}

displayStudentInfo({ first: 'Elie', last: 'Schoppik' })

// Expected output: 'Your full name is Elie Schoppik'

//3
/*Using this object const users = { user1: 18273, user2: 92833, user3: 90315 }

Using methods taught in class, turn the users object into an array:
Excepted output: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
FYI : The number is their ID number.
 */

const users = {
  user1: 18273,
  user2: 92833,
  user3: 90315,
}
let usersEntries = Object.entries(users)
console.log(usersEntries)
//[ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]

let usersEntriesMult = Object.entries(users)

/*Modify the outcome of part 1, by multipling the user’s ID by 2.
Excepted output: [ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ] */

// const result = []
// for (const user of usersEntriesMult) {
//   result.push([user[0], user[1] * 2])
// }
// console.log(result)

const result = []
for (const [user, userid] of usersEntriesMult) {
  result.push([user, userid * 2])
}
console.log(result)

//4
/*
Analyze the code below. What will be the output?
 */

class Person {
  constructor(name) {
    this.name = name
  }
}

const member = new Person('John')
console.log(typeof member) //obj

//5
/*Using the Dog class below: Analyze the options below. Which constructor will successfully extend the Dog class?
 */

class Dog {
  constructor(name) {
    this.name = name
  }
}

// 5.1
class Labrador extends Dog {
  constructor(name, size) {
    this.size = size
  }
}
//not 1 because it isnt using a super to extend from the dog

// 5.2
class Labrador extends Dog {
  constructor(name, size) {
    super(name)
    this.size = size
  }
}

//this is right because it extends the construct and adds it to the super
// 5.3
class Labrador extends Dog {
  constructor(size) {
    super(name)
    this.size = size
  }
}
//this doesnt have a name constructor to match the super

// 5.4
class Labrador extends Dog {
  constructor(name, size) {
    this.name = name
    this.size = size
  }
}
//not 4 because this isnt properly extending. It is not using a super and is essentially cloning the parent construction on it's own

//6
/*
Evaluate these (ie True or False)

[2] === [2] 
{} === {}
*/

//These are false, despite appearing the same becasue their are two seperate objects in memory

/*
What is, for each object below, the value of the property number and why?
*/

const object1 = { number: 5 } // obj number: 5 because it's declared
const object2 = object1 //also obj number:5 because it's a reference
const object3 = object2 //also obj number:5 because it's a reference
const object4 = { number: 5 } // obj number 5. Not a reference to 1

object1.number = 4
console.log(object2.number)
console.log(object3.number)
console.log(object2.number)
console.log(object4.number)

/*
Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
For example: Moooo I'm a cow, named Lily and I'm brown and white
 */

class Animal {
  constructor(name, type, color) {
    this.name = name
    this.type = type
    this.color = color
  }
}

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color)
  }
  sound(animalSound) {
    return `${animalSound}, I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
  }
}

let farmerCow = new Mamal('Lily', 'Cow', 'Brown and White')

let cow = farmerCow.sound('Moo')

console.log(cow)
