//7
/*
The point of this challenge is to display a list of two books on your browser.

In the body of the HTML page, create an empty section:
<section class="listBooks"></section>

In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
title,
author,
image : a url,
alreadyRead : which is a boolean (true or false).

Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

Requirements : All the instructions below need to be coded in the js file:
Using the DOM, render each book inside a div (the div must be added to the <section> created in part 1).
For each book :
You have to display the book’s title and the book’s author.
Example: HarryPotter written by JKRolling.
The width of the image has to be set to 100px.
If the book is already read. Set the color of the book’s details to red.
*/

let allBooks = [
  {
    Title: 'The Subtle Art of Not Giving a F*ck',
    Author: 'Mark Manson',
    Image: 'https://www.booknet.co.il/Images/Site/Products/9780062641540.jpg',
    alreadyRead: true,
  },
  {
    Title: 'Tremendous: The Life of a Comedy Savage',
    Author: 'Joey Diaz',
    Image:
      'https://m.media-amazon.com/images/I/81Qf16Jvl4L._AC_UF1000,1000_QL80_.jpg',
    alreadyRead: true,
  },
]

// function getBookInfo(){
//   for (let book of allBooks) {
//     return book.Title;
//   }
// }

// console.log(getBookInfo());

let listBooksSection = document.querySelector('.listBooks')

// Step 2: Create a new div element
let newDiv = document.createElement('div')

// Step 3: Set the text content of the div
newDiv.classList.add('obj_something_something')

// Step 4: Append the new div to the listBooks section
listBooksSection.appendChild(newDiv)
