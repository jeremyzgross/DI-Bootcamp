import { CHANGE_TEXT } from './action'

const initialState = {
  text: 'Text From Store',
}

export const exampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, text: action.payload }
    default:
      return state // Moved the default case inside the switch block
  }
}
