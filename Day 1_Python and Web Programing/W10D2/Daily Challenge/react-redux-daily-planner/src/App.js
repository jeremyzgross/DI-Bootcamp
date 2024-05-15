import './App.css'
import React from 'react'
import { connect } from 'react-redux'
import { addTask, removeTask, filterTask } from './Redux/action'

function App(props) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const taskInputValue = event.target.elements.taskInput.value
    const dateInputValue = event.target.elements.dateInput.value
    props.addTask(taskInputValue, dateInputValue)
    event.target.elements.taskInput.value = '' // Clear input after
    event.target.elements.dateInput.value = '' // Clear input after
  }

  const removeTaskHandler = (index) => {
    props.removeTask(index)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Redux planner List (Extension of the To-do List cannot figure out
          filter function)
        </h2>
        <select name="test" id="test" disabled="enabld"></select>
        <form onSubmit={handleSubmit}>
          <input type="date" name="dateInput" required />
          <br />
          <input
            type="text"
            name="taskInput"
            placeholder="Enter task"
            required
          />
          <input type="submit" value="Add Task" />
        </form>
        <div className="display-task">
          {props.task.map((item, i) => {
            return (
              <div key={i}>
                <span>{item.task} </span>
                <span>{item.date} </span>
                <input type="checkbox" name="" id="" />
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
    addTask: (task, date) => dispatch(addTask(task, date)),
    removeTask: (index) => dispatch(removeTask(index)),
    filterTask: (index) => dispatch(filterTask(index)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
