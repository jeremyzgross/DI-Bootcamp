import React, { useReducer, useRef } from 'react'
import './App.css'
import Counter from './Components/Counter'

const initialState = {
  count: 0,
  tasks: [],
}

/**
 * Actions:
 */
const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const ADD_TASK = 'add_task'

// const reducer = (state, action) => {
//   if (action.type === INCREMENT) {
//     return { ...state, count: state.count + 1 }
//   } else if (action.type === DECREMENT) {
//     return { ...state, count: state.count - 1 }
//   } else if (action.type === ADD_TASK) {
//     state.tasks.push('task 1')
//     return { ...state, task: [...state.tasks] }
//   }
//   return state // Don't forget to return the state if no action matches
// }

// a better way than if else is Switch Case

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks]
      newTasks.push({ task: action.payload }) // Corrected to push an object with a 'task' property
      return { ...state, tasks: newTasks }
    default:
      return state
  }
}

// state is the initialState (second argument in useReducer).
// action tells what to do with the state. In this case if increment it will add +1 to the count in the initial state object
function App() {
  const inputRef = useRef('')
  const addTask = () => {
    dispatch({ type: ADD_TASK, payload: inputRef.current.value })
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
      <header className="App-header">
        <div className="card">
          <h2>React - useReducer</h2>
          <button onClick={() => dispatch({ type: INCREMENT, payload: 10 })}>
            +
          </button>
          {state.count}
        </div>
        <div>
          <h2>Tasks:</h2>
          <input ref={inputRef} />
          <button onClick={addTask}>Add Tasks</button>{' '}
          {/* Removed redundant arrow function */}
          <div className="task-to-generate">
            {state.tasks.map((item, i) => {
              return <div key={i}>{item.task}</div> // Corrected to access 'task' property
            })}
          </div>
        </div>
        <Counter />
      </header>
    </div>
  )
}

export default App
