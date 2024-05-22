// console.log('test');

//index keys

interface Employee {
  // readonly [key:string]: string | number; //keys only string 
  name: string
  age: number
  role: string 
}
//readonly is like you can look but not edit the interface with a dynamic key

let employee1 : Employee = {
  name: "chris",
  age: 30,
  role: "village idiot",
}

// console.log(employee1["name"]);
// console.log(employee1.name);
// employee1["email"] = 'email@email.com'
// console.log(employee1["email"]);



//dynamic key
// let prop : string = "name"
// console.log(employee1[prop as keyof Employee]);
//without the [key:string] we cannot add dynamic to resolve we add this above 

for (let key in employee1){
  console.log(key, employee1[key as keyof Employee]);
}
/**
 * logs:
 * name chris
 age 30
 role village idiot
 */

const logEmployee = (employee: Employee, key: keyof Employee) :void =>{
  console.log(key, employee[key as keyof Employee]);
  
}
logEmployee(employee1, "role"); //we get undefined unless we say a key

//Record type

type names = "firstName" | "age" |"role"
type NewEmployee = Record<names, string | number>  //record is like another way of making an interface. banes can be naem and number
let employee2: NewEmployee = {
  firstName: "jeremy",
  age: 20,
  role: 'assistant'
}

for (let key in employee2){
  console.log(key, employee2[key as keyof NewEmployee]);
}

/**
 * Generics
 */

const strEcho = (value: any):any => value 
const Echo = <T> (value: T):T => value //generic version. if you said "T" it shoudl return T. if you send string, you shoudld return string etc etc

//examples:
//function to check the type if it is an object

const isObj = <T>(arg:T): boolean =>{
  return typeof arg ==="object" && !Array.isArray(arg) && arg !== null
}
console.log(isObj({name: "john"})); //true what is passed in is not the same
console.log(isObj(["name", "john"]));

const isTrue = <T>(arg: T): {arg: T; is: boolean} => {
  if (Array.isArray(arg) && !arg.length) {
    return {arg, is: false};
  }
  if (typeof arg === 'object' && arg !== null && !Object.keys(arg).length) {
    return {arg, is: false};
  }
  return {arg, is: true};
}

console.log(isTrue({name: "john"})); // {arg: {name: "john"}, is: true}


//bool generic

interface BoolCheck<T>{
  value: T;
  is: boolean;
}
const checkBool = <T>(arg: T): BoolCheck<T> =>{
  return {value: arg, is: !!arg}
}
//hasid generic
interface hasId{
  id: number;
}

const hasId = <T extends hasId> (arg: T): number =>{
  return arg.id
}
// hasId(1)

//generic in classes 


//intersection types
type Admin = {
  name: string,
  role: string

}

type User = {
  email: string 
}
type Address = {
  street: string
  city: string
}

type AdminUser = Admin & User & Address

const adminUser : AdminUser = {
  name: 'John',
  role: 'admin',
  email: 'admin@admin.admin',
  street: ' some street',
  city: 'some city'
}

//UTILITY TYPES:

 interface Post {
  title: string
  content: string
  // date: Date,
  author?: string
 }

//  const post: Partial <Post> = { //partial allows you to not use all of them
//   title: 'title',
//   content: 'post content'
//  }
 const post: Post = { //partial allows you to not use all of them
  title: 'title',
  content: 'post content'
 }

 const updatePost = (post: Post, update: Partial <Post>): Post =>{
  return {...post, ...update}
 }

 console.log(updatePost(post, {title: 'New Title', content: 'New content'}));
 console.log(updatePost(post, {author: 'some author'}));


 const postwithauthor: Post = updatePost(post, {author: 'some author'})
 
//Required 
const updatePostAllData = ( post: Required<Post>, update: Partial <Post>)=>{
  return {...post, ...update}
}

// console.log(updatePostAllData(post, {author: 'some other author'})); //type script is not happy with post because you Require everything

//ReadOnly

const readOnlyPost: Readonly<Post>={...post, author: 'john'}

// readOnlyPost['content'] = 'new content' //cant add because read only 

//pick or omit 

type postTitle = Pick<Post, 'title' | 'content'>
type postAuthor = Omit<Post, 'title' | 'content'>

//exclude 

type Grades = 'A' | 'B' | 'C'| 'D'
type Passed = Exclude<Grades ,'D'>

//extract
type Failed = Extract <Grades, 'D' | 'C'>

//NonNullable 

type Nullable = string | null | undefined 

type NonNullableString = NonNullable<Nullable> //removes types that are null and undefined

//example 
const userName: Nullable = 'John'

//ReturnType

const createUser = (name: string, age: number, isTrue: boolean)=>{
  return {name, age}
}

type UserReturnType = ReturnType<typeof createUser> //using the return of the createUser function to be used elsewhere
const usernew: UserReturnType = createUser('John', 30)

//Parameters
type UserParams = Parameters<typeof createUser>

const userParams : UserParams = ['John', 30, true]
const newnewuser = createUser(...userParams)
console.log(newnewuser);


