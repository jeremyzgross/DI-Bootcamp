//4 Nested Arrays
/*Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
Bonus Try to do it on one line.
Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].
Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.
Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]
 */

const array = [[1], [2], [3], [[[4]]], [[[5]]]]

// let newArr = array.forEach((item, index, arr) => {
//   arr[index] = item
// })

// console.log(newArr)

//expected output = [1,2,3,[4],[5]] /int are numbers, array are object

/*Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].
Bonus Try to do it on one line. */
newArr = []
for (let innerArr of array){
  for (let item of innerArr){
    if (typeof item === 'number'){
      newArr.push(item)
    }else if (typeof item === 'object'){
      for (let obj of item){
        newArr.push(obj)
      }
    }
  }
}
console.log(newArr) //results [ 1, 2, 3, [ 4 ], [ 5 ] ]
