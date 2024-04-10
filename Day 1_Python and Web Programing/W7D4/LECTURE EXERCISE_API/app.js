const { getArr } = require('./module.js')

 getArr().then((users)=> console.log(users)); //must resolve the promise
//or with await

async function usersFunc(){
  let users = await getArr()
  console.log(users);
}
usersFunc()