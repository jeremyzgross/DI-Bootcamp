/*button event */
const findSomeone = async (event) => {
  event.preventDefault()
  document.getElementsByClassName('info')[0].style.display = 'none'
  document.getElementsByClassName('loading')[0].style.display = 'flex'

  await getData()
}

/* Get data from api */
const getData = async () => {
  /* Generate a random number for API  */
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }
  let personNumber = getRandomInt(83)

  /* API URL */
  let url = `https://www.swapi.tech/api/people/${personNumber}`
  console.log(url)
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(),
  }
  try {
    const resolve = await fetch(url, options)
    const personData = await resolve.json()
    /*Get Homeworld data from Planet URL */
    const homeworldUrl = personData.result.properties.homeworld
    const homeworldResolve = await fetch(homeworldUrl)
    const homeworldData = await homeworldResolve.json()
    const homeworldName = homeworldData.result.properties.name
    //personData
    document.getElementsByClassName('loading')[0].style.display = 'none'
    document.getElementsByClassName('info')[0].style.display = 'block'
    displayData(
      personData.result.properties.name,
      personData.result.properties.height,
      personData.result.properties.gender,
      personData.result.properties.birth_year,
      // personData.result.properties.homeworld
      homeworldName
    )
  } catch (error) {
    console.log('Oh No! That person must be in another universe')
    let errorPar = document.querySelector('.error')
    errorPar.textContent = 'Oh No! That person must be in another universe'
  }
}

const displayData = (
  inner_name,
  inner_height,
  inner_gender,
  inner_dob,
  inner_home
) => {
  let namePar = document.querySelector('.name')
  namePar.textContent = 'Name: ' + inner_name
  let heigtPar = document.querySelector('.height')
  heigtPar.textContent = 'Height: ' + inner_height
  let genderPar = document.querySelector('.gender')
  genderPar.textContent = 'Gender: ' + inner_gender
  let dobPar = document.querySelector('.dob')
  dobPar.textContent = 'DoB: ' + inner_dob
  let homePar = document.querySelector('.home')
  homePar.textContent = 'Home World: ' + inner_home
}

/*JSON returning from the API
{
  message: 'ok',
  result: {
    properties: {
      height: '178',
      mass: '120',
      hair_color: 'brown, grey',
      skin_color: 'light',
      eye_color: 'blue',
      birth_year: '52BBY',
      gender: 'male',
      created: '2024-04-08T21:13:55.555Z',
      edited: '2024-04-08T21:13:55.555Z',
      name: 'Owen Lars',
      homeworld: 'https://www.swapi.tech/api/planets/1',
      url: 'https://www.swapi.tech/api/people/6'
    },
    description: 'A person within the Star Wars universe',
    _id: '5f63a36eee9fd7000499be47',
    uid: '6',
    __v: 0
  }
} */
