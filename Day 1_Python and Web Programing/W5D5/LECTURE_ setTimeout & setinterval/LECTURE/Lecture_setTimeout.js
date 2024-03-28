//set time out and setinterval are methods to be active after some time

function sayHello() {
  alert('Hello World')
}

// setTimeout(sayHello, 3000) //second number is milleseconds

let timeoutID = setTimeout(sayHello, 3000) //adds it to variable

clearTimeout(timeoutID) //timeout doesnt happen

function alertSales() {
  let banner = document.querySelector('.banner')
  banner.style.height = '300px'
  banner.style.width = '300px'
  banner.style.backgroundColor = 'yellow'

  let text = document.createTextNode('The sale will end in 10 min')
  banner.appendchild(text)
}

setTimeout(alertSales, 2000)
