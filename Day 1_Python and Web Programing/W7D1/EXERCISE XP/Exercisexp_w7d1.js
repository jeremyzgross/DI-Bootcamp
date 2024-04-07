//1
/*Create a function called compareToTen(num) that takes a number as an argument.
The function should return a Promise:
the promise resolves if the argument is less than or equal to 10
the promise rejects if argument is greater than 10. */

/*
In the example, the promise should reject
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))
 */

const compareToTen = (num) => {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve(`the ${num} is less than or equal to 10`)
    } else {
      reject(`the ${num} is greater than 10`)
    }
  })
}

// // reject test
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

// //resolve test
compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error))

//2
/* Create a promise that resolves itself in 4 seconds and returns a “success” string.*/

/*FIRST WITHOUT PROMISE */
// setTimeout(function () {
//   console.log('sucess')
// }, 4000)

/* MADE PROMISE */
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(console.log('success'))
  }, 4000)
})

//3
/*Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!” */

let p = Promise.resolve(3)
let p2 = Promise.reject('boo')

p.then((res) => console.log(res)).catch((err) => console.error(err))
p2.then((res) => console.log(res)).catch((err) => console.error(err))
