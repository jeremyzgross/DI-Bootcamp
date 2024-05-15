import { ADD_TASK, REMOVE_TASK } from './action'

const initialState = {
  task: ['Initial State task'],
}

export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        task: [...state.task, action.payload],
      }
    case REMOVE_TASK:
      return {
        ...state,
        task: state.task.filter((_, index) => index !== action.payload),
      }
    default:
      return state
  }
}
