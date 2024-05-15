export const ADD_TASK = 'add_task'
export const REMOVE_TASK = 'remove_task'
export const FILTER_TASK = 'filter_task'

export const addTask = (task, date) => {
  return {
    type: ADD_TASK,
    payload: { task, date },
  }
}
export const removeTask = (index) => {
  return {
    type: REMOVE_TASK,
    payload: index,
  }
}

export const filterTask = (index) => {
  return {
    type: FILTER_TASK,
    payload: index,
  }
}
