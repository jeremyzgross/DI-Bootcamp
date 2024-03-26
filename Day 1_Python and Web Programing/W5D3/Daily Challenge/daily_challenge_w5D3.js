/*
In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
We will provide the HTML page.
You only have to work with a JS file.

Create an array which value is the planets of the solar system.
For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
Finally append each div to the <section> in the HTML (presented below).
Bonus: Do the same process to create the moons.
Be careful, each planet has a certain amount of moons. How should you display them?
Should you still use an array for the planets ? Or an array of objects ?
*/

const planets = [
  'Mercury',
  'Venus',
  'Earth',
  'Mars',
  'Jupiter',
  'Saturn',
  'Uranus',
  'neptune',
]

for (const planet of planets) {
  const div = document.createElement('div')
  div.classList.add('planet')
  div.classList.add(planet.toLowerCase())

  const section = document.querySelector(".listPlanets")
  section.appendChild(div)
}
