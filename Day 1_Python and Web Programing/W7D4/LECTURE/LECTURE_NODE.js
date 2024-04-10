// //we can enter the nodel REPL similar to Python compiler
// //just type in the terminal "node"

// /*NodeJS module system */

// /*
//  * 1. core module
//  * 2. our module
//  * 3. NPM - Node Package Manager
//  */

// /* How to create a module
//  *
//  */

// //ex

// const greeting = (name) => {
//   console.log(`Hello, ${name}, welcome to NodeJS`)
// }
// // greeting('Jeremy')

// //How can i create this program as a module to EXECUTE in another file
// //go to your other file app.js
// //export the function
// module.exports = greeting

// //in app.js you are using the function from this file

// //if you want to export two function export it as an object
// const hello = (name) => {
//   console.log(`Hello, ${name}`)
// }
// // greeting('Jeremy')

// module.exports = {
//   greeting,
//   hello,
// }
//Module is the original file that other files take from

/*NPM Package Manager */

//npmjs.com

//in terminal npm init. Follow the prompts and you will have package.json
//npm install {package}
//to uninstall : npm un {package}

//common.js in the package.json type is the legacy using require etc
//module in the package.json is the new way adn can use IMPORT and EXPORT
//syntax will look something like this

import bcrypt from 'bcrypt'

export const hash = () => {}

export default hash //this will allow the receiving file to not need curly braces

//to 'autonode' in your terminal type in 'sudo npm i -g nodemon'

//scripts in package.json
//under start (or add it) and add the file you want to run. Type in the terminal 'npm start'

//dont do daily challenge because we did not cover how to make a server yet
