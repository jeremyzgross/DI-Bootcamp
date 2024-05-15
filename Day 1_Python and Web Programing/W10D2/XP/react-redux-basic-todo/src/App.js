import './App.css'
import React from 'react'
import { connect } from 'react-redux'
import { addTask, removeTask } from './Redux/action'
//componenets
import TaskFilter from './Components/TaskFilter'

function App(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const inputValue = event.target.elements.taskInput.value
    props.addTask(inputValue)
    event.target.elements.taskInput.value = '' // Clear input after
  }
  const removeTaskHandler = (index) => {
    props.removeTask(index)
  }

  //Only remove and add task work at this time
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux To Do List (Only remove and add task work at this time)</h2>
        <TaskFilter />
        <form onSubmit={handleSubmit}>
          <input type="text" name="taskInput" placeholder="Enter task" />
          <input type="submit" value="Add Task" />
        </form>
        <div className="display-task">
          {props.task.map((item, i) => {
            return (
              <div id={i} key={i}>
                {item}
                <input type="checkbox" name="" id="" />
                Completed!
                <button onClick={() => removeTaskHandler(i)} id={i}>
                  Remove
                </button>
              </div>
            )
          })}
        </div>
      </header>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    task: state.listReducer.task,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (value) => dispatch(addTask(value)),
    removeTask: (index) => dispatch(removeTask(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
