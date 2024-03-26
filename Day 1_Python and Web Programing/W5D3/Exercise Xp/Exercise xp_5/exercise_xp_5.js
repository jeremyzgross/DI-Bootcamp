//5
/*
Add the code above, to your HTML file

Using Javascript:
Retrieve the div and console.log it
Change the name “Pete” to “Richard”.
Delete the second <li> of the second <ul>.
Change the name of the first <li> of each <ul> to your name. (Hint : use a loop)

Using Javascript:
Add a class called student_list to both of the <ul>'s.
Add the classes university and attendance to the first <ul>.

Using Javascript:
Add a “light blue” background color and some padding to the <div>.
Do not display the <li> that contains the text node “Dan”. (the last <li> of the first <ul>)
Add a border to the <li> that contains the text node “Richard”. (the second <li> of the <ul>)
Change the font size of the whole body.
*/

let div = document.getElementById('container')

// console.log(div)

let uL = document.getElementsByClassName('list')

uL[0].children[1].innerHTML = 'Richard'

let ulLi = uL[1].children

for (let i = 0; i < ulLi.length; i++) {
  if (ulLi[i].innerHTML === 'Sarah') {
    ulLi[i].remove()
  }
}

for (let i = 0; i < uL.length; i++) {
  uL[i].children[0].innerHTML = 'Jeremy'
}
// console.log(li)
// console.log(uL)

for (let i = 0; i < uL.length; i++) {
  uL[i].classList.add('studentList')
  if (i === 0) {
    uL[i].classList.add('university')
    uL[i].classList.add('attendence')
  }
}

div.style.backgroundColor = 'blue'
div.style.padding = '5px'
let secondUlChildren = uL[1].children
for (let i = 0; i < secondUlChildren.length; i++) {
  if (secondUlChildren[i].innerHTML === 'Dan') {
    secondUlChildren[i].style.display = 'none'
  }
}

let firstUlChildren = uL[0].children
for (let i = 0; i < firstUlChildren.length; i++) {
  if (firstUlChildren[i].innerHTML === 'Richard') {
    firstUlChildren[i].style.border = '1px solid black'
  }
}

let body = document.getElementsByTagName('body')[0]
body.style.fontSize = '20px'

