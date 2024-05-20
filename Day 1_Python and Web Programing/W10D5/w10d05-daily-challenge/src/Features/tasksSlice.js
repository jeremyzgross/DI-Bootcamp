import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  tasks: [],
  status: null,
  filter: true,
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add: (state, action) => {
      const newTask = {
        id: nanoid(),
        task: action.payload.task,
        category: action.payload.category,
        progress: false,
      }
      state.tasks.push(newTask)
    },
  },
})

export const selectTasks = (state) => state.tasks.tasks
export default taskSlice.reducer
export const { add } = taskSlice.actions
