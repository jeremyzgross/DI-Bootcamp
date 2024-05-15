import { ADD_TASK, REMOVE_TASK, FILTER_TASK } from './action'

const initialState = {
  task: ['Initial State task 05 - 05 - 1996' ],
  filteredTasks: [], // Initialize filteredTasks array
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
    case FILTER_TASK:
      const filterDate = action.payload;
      const filteredTasks = filterDate ? state.task.filter(item => item.date === filterDate) : state.task;
      return {
        ...state,
        filteredTasks: filteredTasks,
      }
    default:
      return state
  }
}