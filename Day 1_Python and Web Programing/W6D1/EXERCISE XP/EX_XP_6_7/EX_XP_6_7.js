//Ex 6
/*Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids." */

;(function (jobTitle, location, partnerName, numChildren = 0) {
  let someSentence = document.createElement('h1')
  someSentence.textContent = `You will be a ${jobTitle} in ${location}, and married to ${partnerName} with ${numChildren} kids`
  document.body.appendChild(someSentence)
  console.log(someSentence)
})('coder', 'new jersey', 'somewife', 4)

//Ex7

/*John has just signed in to your website and you want to welcome him.

Create a Navbar in your HTML file.
In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
The function should add a div in the nabvar, displaying the name of the user and his profile picture. */
// let navDiv = document.getElementsByClassName('navContainer')
// console.log(navDiv)

;(function (
  name,
  picture = 'https://twpark.com/wp-content/uploads/2022/10/Tanganyika_Alpaca_2021_CS2-683x1024.jpg'
) {
  let navContainer = document.getElementsByClassName('navContainer')
  let userName = document.createElement('div')
  let userPhoto = document.createElement('img')
  userPhoto.src = picture
  userName.textContent = name
  navContainer[0].appendChild(userName)
  navContainer[0].appendChild(userPhoto)
})('John')


