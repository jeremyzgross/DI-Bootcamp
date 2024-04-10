const { hash } = require('./hash')

let pass = 'bacon'

let hashedPassword = hash(pass)

console.log(hashedPassword)
