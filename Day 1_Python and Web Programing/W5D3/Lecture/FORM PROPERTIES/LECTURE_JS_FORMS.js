//syntax to access to forms in the html

//access first form
document.forms[0]

console.log(document.forms)
console.log(document.forms.userInfo) //access specific form by name

//returning an element of the form

console.log(document.forms[0].elements.age) //getting first form and within it it's elemenets and the specific name

// get the number of forms
console.log(document.forms.length)

//get value from form

let userForm = document.forms.userInfo
let age = userForm.elements.age

console.log(age.value) //returns the input

age.value = 27