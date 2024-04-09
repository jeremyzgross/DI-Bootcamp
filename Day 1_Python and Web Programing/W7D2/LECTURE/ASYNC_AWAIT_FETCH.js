/* fetch */

/* Fetch is returning a promise  */
// fetch(url, {})

//for this url https://jsonplaceholder.typicode.com/users

// fetch('https://jsonplaceholder.typicode.com/users', {
//   method: 'GET',
// })
//   .then((response) => {
//     console.log(response)
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })

//example with Jokes Always API
// function getAJoke() {
//   const url = 'https://jokes-always.p.rapidapi.com/erJoke'
//   const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '3ea1368f91mshf9b95fdbd31cb60p1d5666jsnbc3f3e897f99',
//       'X-RapidAPI-Host': 'jokes-always.p.rapidapi.com',
//     },
//   }
//   fetch(url, options) //options is the GET
//     .then((resolve) => {
//       return resolve.json()
//     })
//     .then((resolve) => {
//       console.log(resolve.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

// getAJoke() //"Why did the structural engineer break up with the architect? They had too many unresolved beams."

/*ASYNC AWAIT */

// function getX() {
//   return 5
// }
// let a = getX()
// console.log('a=>', a) //a=> 5

//async version:

// async function getX() {
//   return 5
// }
// let a = getX()
// console.log('a=>', a) //a=> 5
// a.then((data) => console.log(data)) //returns a promise
// //to resolve a promise, you need to use await in the function

// async function getY() {
//   return 6
// }

// async function resolveX() {
//   let a = await getX() //returns 5
//   let b = await getY() //returns 6
//   console.log(a + b)
// }

// resolveX() //returns 11

/*POST with FETCH */
//https://jsonplaceholder.typicode.com/posts

let post = {
  userId: 6,
  title: 'my title',
  body: 'bla bla bla, bla',
}

let url = 'https://jsonplaceholder.typicode.com/posts'
let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(post),
}

fetch(url, options)
  .then((res) => res.json())
  .then((data) => console.log(data)) //{userId: 6, title: 'my title', body: 'bla bla bla, bla', id: 101}

//EXERCISE

//https://users-18kl.onrender.com/userjson
//inputs on html for name username and email
//POST -> NAME, USERNAME, EMAIL, Link Image
//log ->data receiveing
//display data on HTML

//ATTEMPT
// let post1 = {
//   name: 'Jeremy',
//   email: 'email@email.com',
//   username: 'Jmoney',
//   image: 'https://robohash.org/1?200x200',
// }

// let url1 = 'https://users-18kl.onrender.com/userjson'

// let options1 = {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(post1),
// }

// fetch(url1, options1)
//   .then((res) => res.json())
//   .then((data) => console.log(data))

//SOLUTION POST REQUEST WITH FETCH
const handleSubmit = async (event) => {
  event.preventDefault()
  const name = event.target.name.value
  const username = event.target.username.value
  const email = event.target.email.value
  await postAUser(name, username, email)
}

const postAUser = async (name, username, email) => {
  let url = 'https://users-18kl.onrender.com/userjson'
  let options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, username, email }), 
  }
  try {
    const res = await fetch(url, options)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
