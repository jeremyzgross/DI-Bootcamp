//NOTE TO CHECKER: Instructor said to only do ex 1 ex 2 and daily challenge as we did not cover the other topics 

//EX 1

class Person{
  private firstName: string
  private lastName: string 
  public age: number
  protected address: string
  constructor(  firstName: string,  lastName: string , age: number, address: string ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.address = address
  }

  get getFullName(): string {
    return `${this.firstName} ${this.lastName} `
  }
}

const newPerson = new Person('Jeremy', 'Gross', 27, 'Sderot Non of you buuisness 11 ')

console.log( newPerson.getFullName);


//ex 2

interface Vehicle {
  name: string
  year: number
  doors: number 
}

class Car implements Vehicle{
  name;
  year; 
  doors; 
  convertable: boolean

  constructor(name, year, doors, convertable:boolean){
    this.name = name
    this.year = year
    this.doors = doors
    this.convertable = convertable
  }
}

const newCar = new Car('BMW', 1993, 2, true)

