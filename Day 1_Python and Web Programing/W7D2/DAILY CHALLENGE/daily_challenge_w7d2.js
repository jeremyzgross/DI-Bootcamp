const handleSubmit = async (event) => {
  event.preventDefault()
  const name = event.target.name.value
  await getGifs(name)
}

const getGifs = async (name) => {
  let url = //url with api key
    'https://api.giphy.com/v1/gifs/search?' +
    'q=' +
    name +
    '&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=5&'
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
    console.log(data) //log data which is an array of objects
    const random = Math.floor(Math.random() * data.data.length)
    const randomGif = data.data[random] //retruns one of the objects in the array
    displayImage(randomGif.images.original.url)
  } catch (error) {
    //error ie. failed to fetch
    console.log(error)
  }
}

const displayImage = (url) => {
  let newImage = document.createElement('img')
  let imgDiv = document.createElement('div')
  imgDiv.classList.add('imageClass')
  newImage.src = url
  let body = document.getElementsByTagName('body')
  imgDiv.append(newImage)
  let deleteButton = document.createElement('button')
  // deleteButton.setAttribute('id', url)
  imgDiv.append(deleteButton)
  body[0].append(imgDiv)
  // let button = document.getElementById(url)
  deleteButton.innerHTML = 'Delete'

  deleteButton.addEventListener('click', function (event) {
    event.preventDefault()
    imgDiv.remove()
  })
}

const deleteAll = (event) => {
  event.preventDefault()
  let imgDivs = document.querySelectorAll('.imageClass')
  console.log(imgDivs)
  for (let i = 0; i < imgDivs.length; i++) {
    imgDivs[i].remove()
  }
}
