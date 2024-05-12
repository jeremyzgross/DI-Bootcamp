import { DisplayContext } from './1_Display'
import { useContext } from 'react'

const Title = () => {
  const { setTitle } = useContext(DisplayContext)
  return (
    <>
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value)
        }}
      />
    </>
  )
}

export default Title
