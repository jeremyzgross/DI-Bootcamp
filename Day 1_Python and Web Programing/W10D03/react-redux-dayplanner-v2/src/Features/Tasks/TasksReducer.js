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
      const newtask = [...state.tasks]
      newtask.push({
        id: uuidv4(),
        task: action.payload.task,
        completed: false,
        date: action.payload.date,
      })
      
      return { ...state, tasks: newtask }

    case COMPLETE_TASK:
      const newtasks = state.tasks.map((item) => {
        return item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      })
      return { ...state, tasks: newtasks }

    case REMOVE_TASK:
      const notdeleted = state.tasks.filter((item) => item.id !== action.id)
      return { ...state, tasks: notdeleted }

    // case EDIT_TASK:
    //   const
    default:
      return state
  }
}
