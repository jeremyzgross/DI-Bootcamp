/*
Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()

Make sure the values are not empty

Write a story that uses each of the values.

Make sure you check the console for errors when playing the game.
*/


let button = document.getElementById("lib-button")

function writeStory(someNoun, someAdjective, someSomeone, someVerb, somePlace){
  return `I like to lick ${someNoun}s, because they look very ${someAdjective}. My favorite person is ${someSomeone} because they are always ${someVerb} in ${somePlace}`
}

writeStory(noun, adjective, someone, verb, place)