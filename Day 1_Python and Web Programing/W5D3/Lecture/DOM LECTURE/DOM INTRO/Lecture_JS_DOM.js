// console.log('DOM Class');

//DOM
//how to retriev elements

//firstElementChild
let title = document.body.firstElementChild //declaring the title is the first tag which is h1
console.log(title);
title.textContent = 'Hello Jeremy' //this manipulates the h1 content despite what html is saying

//change div element 
let mainDiv = document.body.children[1] //children gives us an array of all children of body
console.log(mainDiv);


