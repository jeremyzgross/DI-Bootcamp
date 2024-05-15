export const CHANGE_TEXT = 'change_text'

export const changeText = (value)=>{
  return {
    type: CHANGE_TEXT,
    payload: value
  }
}