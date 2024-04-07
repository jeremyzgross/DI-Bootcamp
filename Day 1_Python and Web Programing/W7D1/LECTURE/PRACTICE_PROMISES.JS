// Creating a new promise
let myPromise = new Promise((resolve, reject) => {
  // Simulating an asynchronous operation (e.g., fetching data from a server)
  setTimeout(() => {
    // Assuming the operation is successful
    let data = 'Promise resolved successfully!'
    // Resolving the promise with the data
    resolve(data)
    // Rejecting the promise (uncomment the line below to see rejection)
    reject("Promise rejected!");
  }, 2000) // Simulating a delay of 2 seconds
})

// Consuming the promise
myPromise
  .then((result) => {
    // This function executes if the promise is resolved successfully
    console.log('Promise resolved:', result)
  })
  .catch((error) => {
    // This function executes if the promise is rejected
    console.error('Promise rejected:', error)
  })
