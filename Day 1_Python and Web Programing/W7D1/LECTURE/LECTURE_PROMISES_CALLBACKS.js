/* Async in JS */
/* Promises, Async Await, in JS */
/* Call back (call back a function inside) */

/* Synchonized Code. In order */
// function getX() {
//   return 5
// }

// function getY() {
//   return 6
// }

// function getXY() {
//   let x = getX()
//   console.log(x)
//   let y = getY
//   console.log(y)
//   console.log(x + y)
// }

/* setTimeout, setInterval */

// function getX() {
//   setTimeout(() =>{
//     return 5
//   }, 2000)
// }

/*Callback */
// function myCallback() {
//   console.log('callback executed!')
// }

// function executedCallback(func) {
//   //any function will be executed like so as an argument
//   func()
// }

// executedCallback(myCallback) //function is calling back the other function

// function getX() {
//   setTimeout(() => {
//     myCallback(5)
//   }, 2000)
// }

// function getY(ca) {
//   myCallback(6)
// }

// function getXY() {
//   getY((y) => {
//     console.log(y)
//   })
// }

// getXY()

// /* More set timeout and callback hell examples INCOMPLETE */

// function getX() {
//   setTimeout(() => {
//     myCallback(5)
//   }, 2000)
// }

// function getY(myCallback) {
//   setTimeout(() => {
//     myCallback(6)
//   }, 2000)
// }

// function getXY() {
//   getX((x) => {
//     console.log(y)
//   })
// }

/*PROMISES*/

/* PROMISE -> PENDING -> 
FULFILLED -> RESOLVED OR
FULFILLED -> REJECTED  

PENDING PROMISES EITHER FULLFILED OR NOT*/

/* Syntax */
new Promise((resolve, reject) => {
  //the syntax needs a resolve parm and a reject parm
})

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(5)
  }, 2000)
})

/* getting data from the resolve with the .then */
p.then((data) => {
  console.log(data) //.then is the resolve whereas .catch below is the reject
}).catch((error) => {
  console.log('error ->', error) //catches error if it is a reject. the above block would be reject(5) instead of resolve(5)
})

// /*EXAMPLE */
// const flip = () => {
//   const coin = Math.floor(Math.random() * 2)
//   return coin < 2 ? (coin === 0 ? 'head' : 'tail') : 'side'
// }

// // console.log(flip()); //head or tail

// const flipCoin = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const flipResult = flip()
//     if (flipResult === 'head') {
//       resolve(flipResult)
//     } else {
//       reject('rejected flip')
//     }
//   }, 3000)
// })

// flipCoin
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error)
//   })

/* chain then */
//can chain multiple thens but not multiple catch
// flipCoin
//   .then((result) => {
//     console.log(result)
//     return result + '!'
//   })
//   .then((result) => {
//     console.log(result)
//     return result + 'haha'
//   })
//   .catch((error) => {
//     console.log(error)
//   })

/*CALLBACK EXAMPLE BUT WITH PROMISES */
const getX = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(5)
    }, 3000)
  })
}
const getY = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(6)
    }, 2000)
  })
}

//how to resolve the promises
getX().then((x) => {
  getY().then((y) => {
    console.log(x + y) //11 AFTER 2 SECONDS
  })
})

/*PRACTICE PROBLEM */
/*
const arr = [
         { username: "aaa", email: "aaa@gmail.com" },
         { username: "bbb", email: "bbb@gmail.com" },
         { username: "ccc", email: "ccc@gmail.com" },
];

 * 1. getDataFromServer function return a Promise with data as
 * Array of objects from server 
  
 * Simulate successful completion after 2 seconds
 *
 * 2. Call this function and log the data as an Array datatype
 *
 * 3. Simulate an error
 * 
 * 4. return to step 2, and create render function that will display the users on the page
 */

// const arr = [
//   { username: 'aaa', email: 'aaa@gmail.com' },
//   { username: 'bbb', email: 'bbb@gmail.com' },
//   { username: 'ccc', email: 'ccc@gmail.com' },
// ]

// function getDataFromServer(someArr) {
//   return new Promise((resolve, reject) =>{
//     resolve(if (someArr === 'null'){
//       return 'it is null'
//     })
//   }
// }

//SOLUTION
// const getDataFromServer = () => {
//   return new Promise((resolve, reject) => {
//     const arr = [
//       { username: 'aaa', email: 'aaa@gmail.com' },
//       { username: 'bbb', email: 'bbb@gmail.com' },
//       { username: 'ccc', email: 'ccc@gmail.com' },
//     ]
//     setTimeout(() => {
//       resolve(arr)
//     }, 2 * 1000)
//   })
// }

// getDataFromServer().then((data) => {
//   console.log(data)
//   render(data)
// })

// const render = (arr) => {
//   const html = arr.map((item) => {
//     return `<div> ${item.username} ${item.email} </div>`
//   })
//   document.getElementById('root').innerHTML = html.join('')
// }

/*PROMISE STATIC METHOD
* Promis.all
*Promise.allSettled
*Promise.race
*Promise.any

all of these methods are getting an array of methods
*/

const promise1 = new Promise((res, rej) => {
  setTimeout(() => {
    res('resolve 1')
  }, 2 * 1000)
})
const promise2 = new Promise((res, rej) => {
  setTimeout(() => {
    rej('resolve 2')
  }, 3 * 1000)
})
const promise3 = new Promise((res, rej) => {
  setTimeout(() => {
    res('resolve 3')
  }, 4 * 1000)
})

/*HOW DO WE RESOLVE ALL OF THE ABOVE PROMISES */

// Promise.all([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error) //all the promises wont fullfill because one is a rejection
//   })

// //RACE
// Promise.race([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result)
//   })
//   .catch((error) => {
//     console.log(error) //the race will show by order that the promise is fullfilled
//   })

//any first one  that is not rejected
Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result)
  })
  .catch((error) => {
    console.log(error) //the race will show by order that the promise is fullfilled
  })


  //PROMISE.RESOLVE
setTimeout(() => {
  console.log('1')
}, 0)

let p = Promise.resolve()
p.then((theReturn) => console.log('2'))

console.log('3')

//THE ORDER WILL BE 3, 2, 1
