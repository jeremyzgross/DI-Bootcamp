import { v4 as uuidv4 } from 'uuid'

export const ADD_TASK = 'add_task'
export const COMPLETE_TASK = 'complete_task'
export const REMOVE_TASK = 'remove_task'
export const EDIT_TASK = 'edit_task'

const initialState = {
  tasks: [],
  filter: true,
}

export const dayTasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTask = {
        id: uuidv4(),
        task: action.payload.task,
        completed: false,
        date: action.payload.date,
      }
      return { ...state, tasks: [...state.tasks, newTask] }

    case COMPLETE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload
            ? { ...item, completed: !item.completed }
            : item
        ),
      }

    case REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.id),
      }

    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((item) =>
          item.id === action.payload.id
            ? { ...item, task: action.payload.task, date: action.payload.date }
            : item
        ),
      }

    default:
      return state
  }
}
