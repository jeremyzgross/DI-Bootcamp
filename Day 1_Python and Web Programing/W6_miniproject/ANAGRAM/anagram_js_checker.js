/*
Create a function that:

takes in two strings as two parameters
and returns a boolean that indicates whether or not the first string is an anagram of the second string.


Examples:
"Astronomer" is an anagram of "Moon starers"
"School master" is an anagram of "The classroom"
"The Morse Code" is an anagram of "Here come dots"
 */

function anagramChecker(WordA, WordB) {
  /*turning input strings into arrays and then joining them back with no whitespacces */
  let noSpaceWordA = WordA.split(' ').join('').toLowerCase()
  let noSpaceWordB = WordB.split(' ').join('').toLowerCase()

  /*turning no whitespace strings into arrays of each letter*/
  let arrA = noSpaceWordA.split('')
  let arrB = noSpaceWordB.split('')

  /* sort the arrays and change them back into strings */
  let sortedA = arrA.sort().join('')
  let sortedB = arrB.sort().join('')

  /* Conditional Statement to see if they are equal */
  if (sortedA === sortedB) {
    return `YES ${WordA} and ${WordB} are anagrams`
  } else {
    return `NO ${WordA} and ${WordB} are NOT anagrams`
  }
}

// console.log(anagramChecker('meat', 'team')) //YES meat and team are anagrams
console.log(anagramChecker('Astronomer', 'Moon starer')) //YES Astronomer and Moon starer are anagrams
/*test with case sensativity and white spaces */
console.log(anagramChecker('Astronomer', 'moon Starer')) //YES Astronomer and Moon starer are anagrams
console.log(anagramChecker('test', 'another test')) //NO test and another test are NOT anagrams
console.log(anagramChecker('Eleven plus two', 'Twelve plus one')) //YES Eleven plus two and Twelve plus one are anagrams

