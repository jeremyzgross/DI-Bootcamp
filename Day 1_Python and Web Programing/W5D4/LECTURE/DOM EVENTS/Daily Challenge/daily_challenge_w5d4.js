/*
Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

Make sure the values are not empty

Write a story that uses each of the values.

Make sure you check the console for errors when playing the game.
*/

let button = document.getElementById('lib-button')

let generatedStory 
= document.getElementById('story')

function writeStory(someNoun, someAdjective, someSomeone, someVerb, somePlace) {
  return `I like to hug ${someNoun}, because they look very ${someAdjective}. My favorite person is ${someSomeone} because they are always ${someVerb} in ${somePlace}`
}

// button.onclick = function(noun, adjective, someone, verb, place)
button.onclick = function (event) {
  event.preventDefault()

  let noun = document.getElementById('noun').value
  let adjective = document.getElementById('adjective').value
  let person = document.getElementById('person').value
  let verb = document.getElementById('verb').value
  let place = document.getElementById('place').value

  generatedStory.textContent = writeStory(noun, adjective, person, verb, place)
}
