export const ADD_TASK = 'add_task'
export const REMOVE_TASK = 'remove_task'

export const addTask = (value) => {
  return {
    type: ADD_TASK,
    payload: value,
  }
}
export const removeTask = (index) => {
  return {
    type: REMOVE_TASK,
    payload: index,
  }
}
