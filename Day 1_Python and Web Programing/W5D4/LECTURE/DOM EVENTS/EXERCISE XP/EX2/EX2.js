//ex2
/* 
Retrieve the form and console.log it.

Retrieve the inputs by their id and console.log them.

Retrieve the inputs by their name attribute and console.log them.

When the user submits the form (ie. submit event listener)
use event.preventDefault(), why ?
get the values of the input tags,
make sure that they are not empty,
create an li per input value,
then append them to a the <ul class="usersAnswer"></ul>, below the form.
*/

let forms = document.querySelector('form')

let userAnswerList = document.getElementsByClassName('usersAnswer')[0]

console.log()

// let inputFN = document.getElementById('fname')
// let inputLN = document.getElementById('lname')
let inputFN = document.getElementsByName('firstname')
let inputLN = document.getElementsByName('lastname')

console.log(inputFN)
console.log(inputLN)

console.log(forms.elements)
forms.onsubmit = function (event) {
  event.preventDefault()
  if (forms.elements.firstname != '') {
    let userItemFN = document.createElement('li')
    userItemFN.textContent = forms.elements.firstname.value
    userAnswerList.appendChild(userItemFN)
  }
  if (forms.elements.lastname != '') {
    let userItemLN = document.createElement('li')
    userItemLN.textContent = forms.elements.lastname.value
    userAnswerList.appendChild(userItemLN)
  }
}

