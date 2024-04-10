const getArr = async () => {
  let url = `https://jsonplaceholder.typicode.com/users`
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  }
  try {
    const resolve = await fetch(url, options)
    const Data = await resolve.json()
    return Data
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getArr,
}

//in here you are returning a promise (data). In the app.js you need to resolve the promise from the export
