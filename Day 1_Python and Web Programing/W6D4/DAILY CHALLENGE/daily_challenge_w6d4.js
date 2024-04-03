function handleSubmit(event) {
  event.preventDefault() //prevent refresh of form

  const data = new FormData(event.target) //FormData function that looks for form on page and defines data variable to then use get method

  const name = data.get('name') //gets name from form as a string
  // console.log(name)
  const lastName = data.get('lastname') //get last name from form as a string
  // console.log(lastName)

  const jsonObject = { name, lastName } //makes a key value json object
  // console.log(jsonObject)

  const jsonOutputDiv = document.getElementById('jsonOutput')

  jsonOutputDiv.innerHTML = JSON.stringify(jsonObject, null, 4) //makes json back into js object
}

const form = document.querySelector('form')
form.addEventListener('submit', handleSubmit)
