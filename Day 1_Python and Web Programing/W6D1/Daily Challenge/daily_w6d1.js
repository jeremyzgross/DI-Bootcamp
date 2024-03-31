let client = 'John'

const groceries = {
  fruits: ['pear', 'apple', 'banana'],
  vegetables: ['tomatoes', 'cucumber', 'salad'],
  totalPrice: '35$',
  other: {
    paid: false,
    meansOfPayment: ['cash', 'creditCard'],
  },
}

const displayGroceries = () => {
  groceries.fruits.forEach((fruit, index) => {
    console.log(fruit)
  })
}

const cloneGroceries = () => {
  let user = client
  // console.log(user);
  let shopping = groceries
  console.log(shopping)
}
//we see the user change because the client variable is global and mutable
//for the same reason we see the shopping modified when changed because it is global. We would not be able to change it from within clonegroceries because groceries is not mutable
//yes becaue we are passing the value

displayGroceries()
cloneGroceries()
