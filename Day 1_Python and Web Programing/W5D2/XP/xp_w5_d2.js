//1
/*
Write code to remove “Greg” from the people array.

Write code to replace “James” to “Jason”.

Write code to add your name to the end of the people array.

Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

Write code to make a copy of the people array using the slice method.
The copy should NOT include “Mary” or your name.
Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
Hint: Check out the documentation for the slice method

Write code that gives the index of “Foo”. Why does it return -1 ?

Create a variable called last which value is the last element of the array.
Hint: What is the relationship between the index of the last element in the array and the length of the array?

Using a loop, iterate through the people array and console.log each person.

Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
Hint: take a look at the break statement in the lesson.

*/


const people = ["Greg", "Mary", "Devon", "James"];
people.shift()
console.log(people);

people.splice(2, 3, 'Jason')
console.log(people);

people.push('Jeremy')
console.log(people);

console.log(people.indexOf('Mary'));

let peopleSliced = people.slice(1,3)
console.log(peopleSliced);

console.log(people.indexOf('Foo'));
//-1 because it does not exist

let last = people
// console.log(last[-1]); //this does not work like in python because js is zero based indexing
console.log(last[last.length - 1]);

//Using a loop, iterate through the people array and console.log each person.
for (index = 0; index < people.length; index++){
    console.log(people[index]);
}

Using a loop, iterate through the people array and exit the loop after you console.log “Devon” .
Hint: take a look at the break statement in the lesson.

for (index = 0; index <= people.indexOf('Devon'); index++){
    console.log(people[index]);
}


//2

/*
Create an array called colors where the value is a list of your five favorite colors.
Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
*/

let colors = ['blue', 'red', 'green', 'pink', 'orange']

for(let color in colors){
    let value = colors[color];
    let message = `My # ${color} choice is ${value}`
    console.log(message);

} //I know this is not the right way but I wasnt sure how else to do

// 3
/*
Prompt the user for a number.
Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

While the number is smaller than 10 continue asking the user for a new number.
Tip : Which while loop is more relevant for this situation?
*/

do {
    userInput = prompt('feed me a number greater than 10')
}while (parseInt(userInput) < 10)

//4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

Console.log the number of floors in the building.
console.log(building.numberOfFloors);

//Console.log how many apartments are on the floors 1 and 3.

console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

//Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);

//Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
let sarahRent = building.numberOfRoomsAndRent.sarah[1]
let davidRent = building.numberOfRoomsAndRent.david[1]

let sarahAndDavidRent = sarahRent + davidRent
console.log(sarahAndDavidRent);

building.numberOfRoomsAndRent.dan[1] = 1200
console.log(building.numberOfRoomsAndRent.dan[1]);

//5
/* 
Create an object called family with a few key value pairs.
Using a for in loop, console.log the keys of the object.
Using a for in loop, console.log the values of the object.*/

let family ={
    Dad: 60,
    Mom: 55,
    Son: 25,
    Daugher: 20,
}

for (let member in family){
    console.log(member);
    console.log(family[member]);
}

//6
//Given the object below and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

  for (let word in details){
    console.log(word);
    console.log(details[word]);
  }


//7
/*A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
Hint: a string is an array of letters
Console.log the name of their secret society. The output should be “ABJKPS” */

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const namesSort = names.sort()
// console.log(namesSort);

let secretArray = []
for (let firstName of namesSort){
    secretArray.push(firstName[0]);
}

let secretString = secretArray.join('');
console.log(secretString);