/* JSON */

let posts = `[
  {
    "id": 6,
    "name": "Mrs. Dennis Schulist",
    "username": "Leopoldo_Corkery",
    "email": "Karley_Dach@jasper.info",
    "address": {
      "street": "Norberto Crossing",
      "suite": "Apt. 950",
      "city": "South Christy",
      "zipcode": "23505-1337",
      "geo": {
        "lat": "-71.4197",
        "lng": "71.7478"
      }
    },
    "phone": "1-477-935-8478 x6430",
    "website": "ola.org",
    "company": {
      "name": "Considine-Lockman",
      "catchPhrase": "Synchronised bottom-line interface",
      "bs": "e-enable innovative applications"
    }
  }
]`

console.log(posts)

//convert he json to array

let arr = JSON.parse(posts)

// console.log("arr:", arr);

console.log(JSON.stringify(arr, null, 6)) //the null is a repacer. it could be a function to change the json

let users = [
  { id: 1, username: 'aaa', password: '123456' },
  { id: 2, username: 'bbb', password: 'test123' },
  { id: 3, username: 'cc', password: 'anothertest123' },
]
console.log(JSON.stringify(users, null, 2))

const replacer = (key, value) => {
  if (key === 'password') {
    return undefined
  }
  return value
}
console.log(JSON.stringify(users, replacer, 2)) //second slot is using our replacer function and hides the password. Stringify will not show undefined
