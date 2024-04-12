// /*
// module: fs
// fs - sync
// fs - async

// __dirname - this can be used as a more universal way to read files in yours and others file systems.
// -this will not work for Import. If you want to make import you need to do it with 'path. see below
// */
const fs = require('fs')
// // try {
// //   const data = fs.readFileSync('info', 'utf-8') //first param is the "name of the file". Looks in the current directory. Second param is the char set (english I think)
// //   console.log(data)
// // } catch (e) {
// //   console.log('no such file')
// // }

// console.log(__dirname)

// const fs = require('fs')
// try {
//   const data = fs.readFileSync(__dirname + '/info', 'utf-8') //dirname is the current director and we are saying to go to the info file with the slash
//   console.log(data)
// } catch (e) {
//   console.log('no such file')
// }

// //with import instead of require:
// import path from path
// const __dirname = path.resolve()

// //fs async

// fs.readFile(__dirname + '/info', 'utf-8', (err, data)=> { //call back function resolve and reject

//   console.log(data);
// })

//WRITTING A NEW FILE

let data = '1234567'

// fs.writeFile('./filestowrite/newFile.txt', data, 'utf-8', (err)=>{
//   if(err) return console.log(err);
//   console.log('file created');
// })

//APPEND TO AN EXISTING FILE

// let dataTwo = 'abcdefg'

// fs.appendFile('./filestowrite/newFile.txt', dataTwo, 'utf-8', (err) => {
//   if (err) return console.log(err)
//   console.log('file appended')
// })

//COPY FILE

fs.copyFile(
  './filestowrite/newFile.txt',
  './filestowrite/newFile2.txt',
  (err) => {
    if (err) return console.log(err)
    console.log('file coppied')
  }
)

//EXAMPEL USING ASYNC function promises

const fs = require('fs').promises

const read = async()=>{
  const data = await fs.readFile({'PATH TO FILE'}, 'utf-8')
  return data
 }
read()