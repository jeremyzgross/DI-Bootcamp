import './style.css'

//ex 3
/**
 * 
 * What You Will Learn:

How to use intersection types to combine multiple types into a new type.
How to create a function that returns an object with properties from both input objects.
How to use the spread operator to combine properties from different objects.
Description: Create a function that combines two objects using intersection types and returns a new object containing all properties from both objects.



Instructions
Create a function combineObjects that accepts two objects and combines them using intersection types. The function should return a new object containing all properties from both input objects.

In this exercise, a function combineObjects accepts two objects of types T and U and returns a new object containing all properties from both input objects using intersection types. The function uses the spread operator to combine the properties of the two objects.
 * 
 */ 

//note to checker: Instructor said to only do ex 3. I decied to try it with both ways to see if I get the same result 

const combineObjects = (a: object, b: object ): object =>{
  return {...a, ...b}
}
const combineObjectsWithInter = <T, U>(a: T, b: U): T =>{
  return {...a, ...b}
}

const someObj = {
  a: "blah",
  b: "blah" 
}

const anotherObj = {
  c: "blah",
  d: 1
}

console.log( combineObjects(someObj,anotherObj ));
console.log( combineObjectsWithInter(someObj,anotherObj ));


