//ex8
/*The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope. */

//Part 1
function makeJuice(size) {
  function addIngredient(firstIng, secondIng, thirdIng) {
    return `The client wants a ${size}, container ${firstIng}, ${secondIng}, ${thirdIng}`
  }

  return addIngredient('apple', 'cherry', 'orange')
}
console.log(makeJuice('large'))

//part 2
function makeJuice(size) {
  let ingredients = []

  function addIngredient(firstIng, secondIng, thirdIng) {
    ingredients.push(firstIng, secondIng, thirdIng)
  }

  // Call addIngredient twice to add 6 ingredients
  addIngredient('apple', 'cherry', 'orange')
  addIngredient('banana', 'grape', 'strawberry')

  function displayJuice() {
    return `The client wants a ${size}, container ${ingredients.join(', ')}`
  }

  return displayJuice()
}

console.log(makeJuice('large'))
