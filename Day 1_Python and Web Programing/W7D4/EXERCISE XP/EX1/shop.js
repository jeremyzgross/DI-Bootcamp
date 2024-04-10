const fruitArr = require('./Products.js') //curly braces is only for functions not arrays

// console.log(fruitArr);
let findProduct = (fruit) => {
  fruitArr.forEach((product) => {
    // console.log(product) //unpacks objects from array
    if (product.name === fruit) {
      console.log(`${fruit} is in the fruitArr`)
    }
  })
}

findProduct('apple')

