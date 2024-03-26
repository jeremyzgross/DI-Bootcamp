function funName(){
    console.log('JS functions');
}

//as with python, you need to call function
funName()

//function with arguments

function getEmail(userName, birthDate){
    let eMail = `${userName.toLowerCase() + birthDate}@gmail.com`
    return eMail
}
console.log(getEmail('Jeremy', 5));


//Local Varaibale 
// console.log(eMail); //this will not work because eMail is a local variable to the getEmail function and we are trying to call it as if it is global


let eyeColor = 'blue'
function userMoreInfo(userName, userAge){
    console.log('My name is ' + userName + ' and my age is ' + userAge + ' my eye color is ' + eyeColor); //eyeColor will pass because it is global
}

userMoreInfo('Jeremy', 26)


//when you use a global variable in a function, and change it in the local level, it will change it on the global scope

function favColor(){
    const eyeColor = 'brown';
    console.log(eyeColor);
}
favColor() // result is 'brown'





