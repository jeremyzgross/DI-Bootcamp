"use strict";
// console.log('test');
//readonly is like you can look but not edit the interface with a dynamic key
let employee1 = {
    name: "chris",
    age: 30,
    role: "village idiot",
};
// console.log(employee1["name"]);
// console.log(employee1.name);
// employee1["email"] = 'email@email.com'
// console.log(employee1["email"]);
//dynamic key
// let prop : string = "name"
// console.log(employee1[prop as keyof Employee]);
//without the [key:string] we cannot add dynamic to resolve we add this above 
for (let key in employee1) {
    console.log(key, employee1[key]);
}
/**
 * logs:
 * name chris
 age 30
 role village idiot
 */
const logEmployee = (employee, key) => {
    console.log(key, employee[key]);
};
logEmployee(employee1, "role"); //we get undefined unless we say a key
let employee2 = {
    firstName: "jeremy",
    age: 20,
    role: 'assistant'
};
for (let key in employee2) {
    console.log(key, employee2[key]);
}
/**
 * Generics
 */
const strEcho = (value) => value;
const Echo = (value) => value; //generic version. if you said "T" it shoudl return T. if you send string, you shoudld return string etc etc
//examples:
//function to check the type if it is an object
const isObj = (arg) => {
    return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};
console.log(isObj({ name: "john" })); //true what is passed in is not the same
console.log(isObj(["name", "john"]));
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (typeof arg === 'object' && arg !== null && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: true };
};
console.log(isTrue({ name: "john" })); // {arg: {name: "john"}, is: true}
const checkBool = (arg) => {
    return { value: arg, is: !!arg };
};
const hasId = (arg) => {
    return arg.id;
};
const adminUser = {
    name: 'John',
    role: 'admin',
    email: 'admin@admin.admin',
    street: ' some street',
    city: 'some city'
};
//  const post: Partial <Post> = { //partial allows you to not use all of them
//   title: 'title',
//   content: 'post content'
//  }
const post = {
    title: 'title',
    content: 'post content'
};
const updatePost = (post, update) => {
    return Object.assign(Object.assign({}, post), update);
};
console.log(updatePost(post, { title: 'New Title', content: 'New content' }));
console.log(updatePost(post, { author: 'some author' }));
const postwithauthor = updatePost(post, { author: 'some author' });
//Required 
const updatePostAllData = (post, update) => {
    return Object.assign(Object.assign({}, post), update);
};
// console.log(updatePostAllData(post, {author: 'some other author'})); //type script is not happy with post because you Require everything
//ReadOnly
const readOnlyPost = Object.assign(Object.assign({}, post), { author: 'john' });
//example 
const userName = 'John';
//ReturnType
const createUser = (name, age) => {
    return { name, age };
};
const usernew = createUser('John', 30);
