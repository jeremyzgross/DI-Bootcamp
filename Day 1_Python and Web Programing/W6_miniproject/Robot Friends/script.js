//search bar - form that looks through ✅
//a list generated via DOM manipulation of robot assets ✅
//a filter method that uses a listning event✅
//filter based on characters ie. l..e will return 'Leanne' ✅
//later hide the list elemenets that are not in the filter ✅

/*import HTML elements*/
/*robotList UL*/
const robotUl = document.querySelector('.robotList')
const searchInput = document.querySelector(
  ".searchContainer input[type='text']"
)
//robot assets
const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200',
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200',
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200',
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200',
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200',
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200',
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200',
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200',
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image: 'https://robohash.org/9?200x200',
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image: 'https://robohash.org/10?200x200',
  },
]
/*generate li in the DOM to display*/
robots.forEach((item) => {
  const robotCard = document.createElement('li')
  robotCard.innerHTML = item.name + ' | ' + item.email + ' | ' + item.username
  // robotCard.img
  robotCard.className = 'robotCard ' + item.id

  const image = document.createElement('img')
  image.src = item.image
  image.alt = item.name + "'s Image"
  robotCard.appendChild(image)

  robotUl.appendChild(robotCard)
})

//filter

searchInput.addEventListener('input', function () {
  const searchText = this.value.toLowerCase() //this.value is the input
  // Clear existing list items
  robotUl.innerHTML = '' //sets the UL to have no elements once the event listener is triggered

  // Filter items based on search text and render the filtered list
  if (searchText === '') {
    // If the search input is empty, display the entire list
    robots.forEach((item) => {
      const robotCard = document.createElement('li')
      robotCard.innerHTML =
        item.name + ' | ' + item.email + ' | ' + item.username
      robotCard.className = 'robotCard ' + item.id
      const image = document.createElement('img')
      image.src = item.image
      image.alt = item.name + "'s Image"
      robotCard.appendChild(image)

      robotUl.appendChild(robotCard)
    })
  } else {
    // filter the items based on the search text
    robots.forEach((item) => {
      // const itemName = item.name.toLowerCase().split(' ')
      // const firstName = itemName[0]
      // const lastName = itemName[1]
      const name = item.name.toLowerCase().split(' ')
      const nameOne = name[0]
      const nameTwo = name[1]
      const nameThree = name[2]
      const userName = item.username.toLowerCase()
      const email = item.email.toLowerCase()

      if (
        nameOne.startsWith(searchText) ||
        nameTwo.startsWith(searchText) ||
        (nameThree && nameThree.startsWith(searchText)) ||
        userName.startsWith(searchText) ||
        email.startsWith(searchText)
      ) {
        const robotCard = document.createElement('li')
        robotCard.innerHTML =
          item.name + ' | ' + item.email + ' | ' + item.username
        robotCard.className = 'robotCard ' + item.id
        const image = document.createElement('img')
        image.src = item.image
        image.alt = item.name + "'s Image"
        robotCard.appendChild(image)

        robotUl.appendChild(robotCard)
      }
    })
  }
})
