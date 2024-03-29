const tasks = []

let submit = document.querySelector('button')
let listTasksDiv = document.querySelector('.listTasks')
let tasksItems = document.createElement('form')
tasksItems.classList.add('taskList')
listTasksDiv.appendChild(tasksItems)

function addTask() {
  const toDo = document.getElementById('taskInput').value
  // console.log(toDo)
  if (toDo.length < 1) {
    return alert('Hey! You did not enter a task')
  }
  tasks.push(toDo)

  const inputItem = document.createElement('input')
  const labelItem = document.createElement('label')
  const taskItemContainer = document.createElement('div')

  inputItem.setAttribute('type', 'checkbox')
  inputItem.setAttribute('id', toDo)
  labelItem.setAttribute('for', toDo)
  labelItem.innerHTML += `<i class="fas fa-times"></i> ${toDo}`
  taskItemContainer.appendChild(inputItem)
  taskItemContainer.appendChild(labelItem)
  tasksItems.appendChild(taskItemContainer)

  document.getElementById('taskInput').value = ''
}

submit.addEventListener('click', function (event) {
  event.preventDefault()
  addTask()
  console.log(tasks)
})
