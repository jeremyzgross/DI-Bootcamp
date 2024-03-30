//global / setup
// const tasks = []

let submit = document.querySelector('button')
let listTasksDiv = document.querySelector('.listTasks')
let tasksItems = document.createElement('form')
tasksItems.classList.add('taskList')
listTasksDiv.appendChild(tasksItems)

let container = document.querySelector('.container')
let buttonDiv = document.createElement('div')
buttonDiv.classList.add('buttonDiv')
let clearButton = document.createElement('button')
clearButton.textContent = 'CLEAR'
buttonDiv.appendChild(clearButton)
container.appendChild(buttonDiv)
//create task html
function createTask(toDo) {
  const icon = document.createElement('i')
  icon.classList.add('fas', 'fa-times')

  const inputItem = document.createElement('input')
  const labelItem = document.createElement('label')
  const taskItemContainer = document.createElement('div')
  taskItemContainer.classList.add('task-item-container')

  inputItem.setAttribute('type', 'checkbox')
  inputItem.classList.add('Checkbox')
  inputItem.setAttribute('id', toDo)
  labelItem.setAttribute('for', toDo)
  labelItem.innerHTML = `${toDo}`
  taskItemContainer.appendChild(icon)
  taskItemContainer.appendChild(inputItem)
  taskItemContainer.appendChild(labelItem)
  tasksItems.appendChild(taskItemContainer)
  icon.addEventListener('click', function () {
    this.parentElement.remove()
  })
  addTaskEventListener(inputItem)
}
//add task event listener
function addTaskEventListener(inputItem) {
  //add event listener for strikethough
  inputItem.addEventListener('change', function () {
    console.log(this.checked)
    let label = document.querySelector(`label[for="${this.id}"]`)
    console.log(label)
    if (this.checked) {
      label.style.textDecoration = 'line-through'
      label.style.color = 'red'
    } else {
      label.style.textDecoration = 'none'
      label.style.color = null
    }
  })
}

//takes input
function addTask() {
  const toDo = document.getElementById('taskInput').value
  if (toDo.length < 1) {
    return alert('Hey! You did not enter a task')
  }
  // tasks.push(toDo)
  createTask(toDo)

  document.getElementById('taskInput').value = ''
}
//add functionality to add button
submit.addEventListener('click', function (event) {
  event.preventDefault()
  addTask()
  // console.log(tasks)
})
//add functionality to clear button
clearButton.addEventListener('click', function () {
  let allTask = document.querySelectorAll('.task-item-container')
  console.log(allTask)
  for (let i = 0; i < allTask.length; i++) {
    allTask[i].remove()
  }
})
