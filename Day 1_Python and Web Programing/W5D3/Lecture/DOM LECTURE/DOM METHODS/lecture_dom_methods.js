// getting node elements usign methods 

//1st retrieve the selection
let divmain = document.getElementById('main')

console.log(divmain);

// let firstP = divmain.firstElementChild
// firstP.innerHTML = 'Hello world'


let allP = document.getElementsByTagName('p')
console.log(allP);

//3nd create element
let newP = document.createElement('p')

//3rd create the content

let pContent = document.createTextNode('Is almost lunch')

//4th add content to the element
let newParagraph = newP.appendChild(pContent)

//5th eadd element to section
divmain.appendChild(newParagraph)