/*exception */

console.log('before')

// hello //everything after error will not log. This can be solved with TRY AND CATCH

try {
  hello
} catch (error) {
  console.log(error.message)
} //with this block it will let your code run and log the error as a REFERENCE ERROR unless defined in error.message
console.log('after')
