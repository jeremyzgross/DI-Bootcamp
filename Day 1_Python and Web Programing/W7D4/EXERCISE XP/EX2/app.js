import dataArr from './data.js'

let averageAge = () => {
  let totalAge = 0
  dataArr.forEach((person) => {
    totalAge += person.age
  })
  let average = totalAge / dataArr.length
  console.log('Average age:', average)
}

averageAge()
