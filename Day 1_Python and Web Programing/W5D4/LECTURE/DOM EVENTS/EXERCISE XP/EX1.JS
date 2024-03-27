// 1
/*
Using a DOM property, retrieve the h1 and console.log it.

Using DOM methods, remove the last paragraph in the <article> tag.

Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
*/
let headerOne = document.getElementsByTagName('h1')
console.log(headerOne)

let articleOne = document.getElementsByTagName('article')

// console.log(articleOne)

let lastPar = articleOne[0].lastElementChild

lastPar.remove()

let headerTwo = document.querySelector('h2')

headerTwo.addEventListener('click', (event) => {
  event.target.style.backgroundColor = 'red'
})

let headerThree = document.querySelector('h3')

headerThree.addEventListener('click', (event) => {
  event.target.style.display = 'none'
})

let boldButton = document.getElementById('boldbutton')

let allPar = document.querySelector('p')

function makeBold() {
  allPar.style.fontWeight = 'bold'
}
boldButton.onclick = makeBold
//IT'S ONLY DOING THE FIRST P TAG HMMMM

//3
/*
In the JS file:

Declare a global variable named allBoldItems.

Create a function called getBoldItems() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

Create a function called highlight() that changes the color of all the bold text to blue.

Create a function called returnItemsToDefault() that changes the color of all the bold text back to black.

Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function returnItemsToDefault() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 
*/

let allBoldItems

function getBoldItems() {
  allBoldItems = document.querySelectorAll('strong')
  return allBoldItems
}

function highlight() {
  boldItem = getBoldItems()
  for (let i = 0; i < boldItem.length; i++) {
    boldItem[i].style.color = 'Blue'
  }
}
highlight()

function returnItemsToDefault() {
  changeBack = getBoldItems()
  for (let i = 0; i < changeBack.length; i++) {
    changeBack[i].style.color = 'black'
  }
}

returnItemsToDefault()


