//class this is imcomplete

// class User {
  
//   constructor(
//   public name: string,
//   private age: number, 
//   protected active: boolean 

//   ){
//     this.name = name
//     this.age = age
//     this.active = true
//   }
// }
// getAge(){
//   return `My age is ${this.age}`
// }
// }

// let user = new User("John", 30, true)

// console.log(user.getAge());


interface UserInterface {
  name: string;
  age: number;
  active: boolean;
}

class User implements UserInterface {
  // Explicitly define the properties
   name: string;
   age: number;
   active: boolean;

  // Constructor to initialize properties
  constructor(  name:  string, age: number,  active: boolean) {
    this.name = name;
    this.age = age;
    this.active = active;
  }

  // Getter for age
  get setage(): number {
    return this.age;
  }

  // Setter for age
  set setage(age: number) {
    this.age = age;
  }

  // Setter for active
  set setactive(active: boolean) {
    this.active = active;
  }
}


