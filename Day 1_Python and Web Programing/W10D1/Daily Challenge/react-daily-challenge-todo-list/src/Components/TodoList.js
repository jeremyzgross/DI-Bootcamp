import todoReducer from './TodoReducer'
import React, { useReducer, useState } from 'react'
function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, [])
  const [todoText, setTodoText] = useState('')

  const handleAddTodo = () => {
    if (todoText.trim() === '') return
    dispatch({ type: 'ADD_TODO', text: todoText })
    setTodoText('')
  }

  const handleRemoveTodo = (id) => {
    dispatch({ type: 'REMOVE_TODO', id })
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
