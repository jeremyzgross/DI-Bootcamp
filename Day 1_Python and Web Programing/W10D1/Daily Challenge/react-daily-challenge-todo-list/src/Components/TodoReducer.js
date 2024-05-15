import React, { useReducer, useState } from 'react'

// Reducer function
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      // Add a new todo to the state
      return [...state, { id: Date.now(), text: action.text }]
    case 'REMOVE_TODO':
      // Remove a todo by its id
      return state.filter((todo) => todo.id !== action.id)
    default:
      return state
  }
}

export default todoReducer
