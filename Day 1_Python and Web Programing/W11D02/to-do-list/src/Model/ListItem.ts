//create models or classes
//one class for list item //contain a string and an id and a bolean checked or unchecked 
//one for for the full list class that will have all list elemenets that can clear list, add item, remove item

//full list will hold item 


export interface TaskInterface {
  id: string,
  task: string,
  active: boolean
} 

export default class ListItem implements TaskInterface{
  id: string;
  task: string;
  active: boolean;

  constructor(id: string, task: string, active: boolean = false){
    this.id = id;
    this.task = task
    this.active = active
}

get getId(): string {
  return this.id
}
set setId(id: string){
  this.id = id
}
get getTask(): string{
  return this.task
}
set setTask(task: string){
  this.task = task
}
get getActive(): boolean{
  return this.active
}
set setActive(active: boolean){
  this.active = active
}
}







