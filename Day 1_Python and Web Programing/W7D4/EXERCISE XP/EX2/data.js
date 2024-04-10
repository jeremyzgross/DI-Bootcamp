/*
Create a file named data.js.

Inside data.js, define an array of objects, each representing a person with properties like name, age, and location.

Export the array using the ES6 module syntax.

Create another file named app.js.

In app.js, import the array of person objects from the data.js module.

Write a function that calculates and prints the average age of all the persons in the array.

Use the imported array and the average age function in app.js.

Run app.js and confirm that the average age is correctly calculated and displayed. */

let dataArr = [
  {
    name: 'Jeremy',
    age: 3,
    location: 'Tel Aviv',
  },
  {
    name: 'Yona',
    age: 5,
    location: 'Jerusalem',
  },
  {
    name: 'Aaron',
    age: 2,
    location: 'Haifa',
  },
]

export default dataArr
