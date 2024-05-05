import para from '../Exercise.css'

const Exercise = () => {
  // const myStyle = {
  //   color: 'red',
  //   backgroundColor: '#ADD8E6',
  // }
  const style_header = {
    color: 'white',
    backgroundColor: 'DodgerBlue',
    padding: '10px',
    fontFamily: 'Arial',
  }
  return (
    <div>
      <h1 style={style_header}>This is a Header</h1>
      <p className="para">This is a paragraph</p>
      <a href="google.com">This is a link</a>
      <form>
        <input type="text" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Exercise
