// const bcrypt = require('bcrypt')
// const saltRounds = 10
// const myPlaintextPassword = 's0//P4$$w0rD'
// const someOtherPlaintextPassword = 'not_bacon'

// // const passwordFunc = (password) => {

// // }

// bcrypt.genSalt(saltRounds, function (err, salt) {
//   bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
//     // Store hash in your password DB.
//   })
// })

// const bcrypt = require('bcrypt')

// // Function to hash a password
// async function hashPassword(password) {
//   try {
//     const saltRounds = 10 // You can adjust this number based on your security needs
//     const hashedPassword = await bcrypt.hash(password, saltRounds)
//     return hashedPassword
//   } catch (error) {
//     throw new Error('Error hashing password')
//   }
// }

// module.exports = {
//   hashPassword,
// }

//SOLUTION
const bcrypt = require('bcrypt')

const hash = (pass) => {
  const salt = bcrypt.genSaltSync(10)
  const hash = bcrypt.hashSync(pass + '', salt) //concatination makes sure the pass is a string
  return hash
}

module.exports = { hash }
