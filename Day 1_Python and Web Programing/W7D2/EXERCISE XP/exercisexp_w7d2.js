//1

/*
With your knewly accumulated knowledge of the Fetch API lets write some cool code!

You will work with this part of the documention

You will use this Gif URL: https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
Explanation of the Gif URL and the queries

q Request Parameter: Search query term or phrase. Above, the URL is searching for “hilarious” gifs

rating Request Parameter: Filters results by specified rating. We are searching for Level 1 gifs. Check out the ratings documentation

api_key Request Paramater : GIPHY API Key. Our API KEY is hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

Create a program to retrieve the data from the API URL provided above.
Use the fetch() method to make a GET request to the Giphy API and Console.log the Javascript Object that you receive.
Make sure to check the status of the Response and to catch any occuring errors. */

const getGifs = async () => {
  let url = //url with api key
    'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
  let options = {
    //method we are using in this case getting data
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(), //stringify the data from the json
  }
  try {
    const resolve = await fetch(url, options) //await fetch the url and option we wrote
    const data = await resolve.json() //await fetch the json data in the resolve
    console.log(data) //log data
  } catch (error) {
    //error ie. failed to fetch
    console.log(error)
  }
}
// getGifs()

// //2
// /* Read carefully the documention to understand all the possible queries that the URL accept.
// Use the Fetch API to retrieve 10 gifs about the “sun”. The starting position of the results should be 2.
// Make sure to check the status of the Response and to catch any occuring errors.
// Console.log the Javascript Object that you receive.*/

// //where to input 10 gifs about sun? //you have to editing the URL &limit=20
// //how to make starting position 2

const getSunGifs = async () => {
  let url = //url with api key
    'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&limit=10&offset=2&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
  let options = {
    //method we are using in this case getting data
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(), //stringify the data from the json
  }
  try {
    const resolve = await fetch(url, options) //await fetch the url and option we wrote
    const data = await resolve.json() //await fetch the json data in the resolve
    console.log(data) //log data
  } catch (error) {
    //error ie. failed to fetch
    console.log(error)
  }
}

getSunGifs()

//3
/*Improve the program below : 
Create an async function, that will await for the above GET request.
The program shouldn’t contain any then() method.
Make sure to check the status of the Response and to catch any occuring errors.*/
// fetch('https://www.swapi.tech/api/starships/9/')
//   .then((response) => response.json())
//   .then((objectStarWars) => console.log(objectStarWars.result))

const someFuntion = async () => {
  let url = 'https://www.swapi.tech/api/starships/9/'
  let options = {
    //method we are using in this case getting data
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  }
  try {
    const response = await fetch(url, options)
    objectStarWars = await response.json()
    console.log(objectStarWars)
    console.log(objectStarWars.result)
  } catch (error) {
    console.log(error)
  }
}
someFuntion()
//4
/* Analyse the code provided below - what will be the outcome?*/

function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('resolved')
    }, 2000)
  })
}
//after 2 second resolved
async function asyncCall() {
  console.log('calling') //calling
  let result = await resolveAfter2Seconds() //wait 2 seconds to be resolve
  console.log(result) //resolved loged
}
asyncCall()
