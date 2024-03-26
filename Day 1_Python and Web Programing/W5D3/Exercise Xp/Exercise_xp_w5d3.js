// //1
// /*
// Create a function call displayNumbersDivisible() that takes no parameter.

// In the function, loop through numbers 0 to 500.

// Console.log all the numbers divisible by 23.

// At the end, console.log the sum of all numbers that are divisible by 23.
// */

// function displayNumsDivisible(){
//     let sum = 0
//     for(let i = 0; i < 500; i++){
//         if (i%23 === 0){
//             console.log(i);
//             sum += i
//         }

//     }
// console.log('sum is ' + sum);
// }
// displayNumsDivisible()

// //2
// /*
// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

// Create a function called myBill() that takes no parameters.

// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// -The item must be in stock. (Hint : check out if .. in)
// -If the item is in stock find out the price in the prices object.

// Call the myBill() function.
// */
// const stock = {
//     "banana": 6,
//     "apple": 0,
//     "pear": 12,
//     "orange": 32,
//     "blueberry":1
// }

// const prices = {
//     "banana": 4,
//     "apple": 2,
//     "pear": 1,
//     "orange": 1.5,
//     "blueberry":10
// }

// let shoppingList= ['banana', 'orange', 'apple',]

// // console.log(shoppingList);

// function myBill(){
//     totalBill = 0
//     for (let fruit of shoppingList){
//         if(stock[fruit] > 0){
//             totalBill += prices[fruit]
//         }
//     }
// console.log(totalBill);
// }

// myBill()

// //3
// /*
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
//     -an item price
//     -and an array representing the amount of change in your pocket.

// In the function, determine whether or not you can afford the item.
//     -If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
//     -If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false

// Change will always be represented in the following order: quarters, dimes, nickels, pennies.
// A quarters is 0.25
// A dimes is 0.10
// A nickel is 0.05
// A penny is 0.01

// */

// function changeEnough(itemPrice, amountOfChange) {
//   totalChange = 0
//   for (i = 0; i < amountOfChange.length; i++) {
//     if (i === 0) {
//       totalChange += amountOfChange[i] * 0.25
//     } else if (i === 1) {
//       totalChange += amountOfChange[i] * 0.1
//     } else if (i === 2) {
//       totalChange += amountOfChange[i] * 0.05
//     } else if (i === 3) {
//       totalChange += amountOfChange[i] * 0.01
//     }
//   }
//   if (totalChange >= itemPrice) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(changeEnough(4.25, [25, 20, 5, 0]))

//4
/*
Let’s create functions that calculate your vacation’s costs:

Define a function called hotelCost().
It should ask the user for the number of nights they would like to stay in the hotel.
If the user doesn’t answer or if the answer is not a number, ask again.
The hotel costs $140 per night. The function should return the total price of the hotel.

Define a function called planeRideCost().
It should ask the user for their destination.
If the user doesn’t answer or if the answer is not a string, ask again.
The function should return a different price depending on the location.
“London”: 183$
“Paris” : 220$
All other destination : 300$

Define a function called rentalCarCost().
It should ask the user for the number of days they would like to rent the car.
If the user doesn’t answer or if the answer is not a number, ask again.
Calculate the cost to rent the car. The car costs $40 everyday.
If the user rents a car for more than 10 days, they get a 5% discount.
The function should return the total price of the car rental.

Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

Call the function totalVacationCost()

Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
*/

// function hotelCost() {
//   let userNights = 0
//   do {
//     let userInput = prompt('How many nights would you like to stay')
//     userNights = parseInt(userInput)
//   } while (userNights === 0 || !Number.isInteger(userNights))
//   return userNights * 140
// }

// function planeRideCost() {
//   do {
//     let userInput = prompt('Where are you flying to? ')
//     if (userInput === 'London' || userInput === 'london') {
//       return 183
//     }
//     if (userInput === 'Paris' || userInput === 'paris') {
//       return 220
//     } else {
//       return 300
//     }
//   } while (true)
// }

// function rentalCarCost() {
//   let userRentalDays = 0
//   do {
//     let userInput = prompt('How many days would you like a car? ')
//     userRentalDays = parseInt(userInput)
//   } while (userRentalDays === 0 || !Number.isInteger(userRentalDays))
//   if (userRentalDays < 10) {
//     return userRentalDays * 40
//   } else {
//     let fullPrice = userRentalDays * 40
//     let discount = fullPrice * 0.05
//     return fullPrice - discount
//   }
// }

// function totalVacationCost() {
//   let hotel = hotelCost()
//   let plane = planeRideCost()
//   let car = rentalCarCost()
//   return car + plane + hotel
// }

// // console.log(totalVacationCost())
