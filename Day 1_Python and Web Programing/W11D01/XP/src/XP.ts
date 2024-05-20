//🌟 Exercise 1: Hello, World! Program

const helloWorld: string = 'hello world'

console.log(helloWorld);


//🌟 Exercise 2: Type Annotations

const age: number = 11

const someName: string = 'some name'

console.log(age, someName);


//🌟 Exercise 3: Union Types

let id: string | number 

id = 1

console.log(id);


//🌟 Exercise 4: Control Flow With If...Else

const someFunction = (a:number) :string => {
  if (a > 0){
    return `this number is positive`
  }else{
    return `this number is negative`
  }
}

console.log(someFunction(-1));


//🌟 Exercise 5: Function Overloading

const add = (a: number | string, b: number | string) :number | string  =>{
 if( typeof a ==='string' && typeof b ==='string'){
  return (a + b)
 }else if ( typeof a ==='number' && typeof b ==='number'){
  return (a + b)
 }else{
  return `mamash teepesh`
 }
}

//🌟 Exercise 6: Tuple Types

const getDetails=(name : string, age: number) =>{
  let someTuple: [string, number, string] = [name, age, 'hiiiii']
  return someTuple
}

//🌟 Exercise 7: Object Type Annotations

const createPerson = (name: string, age: number) =>{
  let person: object = {
    name,
    age
  }
  return person
}

console.log(createPerson('Jeremy', 28));


//🌟 Exercise 8: Type Assertions
//skipped because pushed to tomorrows lesson

//🌟 Exercise 9: Switch Statement With Complex Conditions

const getAction = (userRole: string) => {
  switch(userRole) {
    case 'admin':
      console.log('Admin action');
      break;
    case 'user':
      console.log('User action');
    default:
      console.log('you are a wizard harry');
      break
  }
}
    
getAction("idk")

//🌟 Exercise 10: Function Overloading With Default Parameters
//told to skip ex 10