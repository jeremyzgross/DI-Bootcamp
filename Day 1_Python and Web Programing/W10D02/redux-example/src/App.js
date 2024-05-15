import './App.css'
import { connect, useSelector, useDispatch } from 'react-redux'
import { changeText, CHANGE_TEXT } from './redux/action'
/**
 * 1. create actions,reducers, stores
 * 2. connect store to react
 * 3. getting text from store state
 */

function App(props) {
  const text = useSelector((state) => state.exampleReducer.text)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <h2>Redux Example</h2>
        {/* <h3>Text = {props.text}</h3> */}
        {/* no need for props with useselector */}
        <h3>Text = {text}</h3>
        {/* no need for props with useDispatch */}
        {/* <input onChange={(event) => props.changeText(event.target.value)} /> */}
        input 1
        <input
          onChange={(event) =>
            dispatch({ type: CHANGE_TEXT, payload: event.target.value })
          }
        />
        input 2
        {/* both or these inputs work but with different ways of passing the obejct data */}
        <input onChange={(event) => dispatch(changeText(event.target.value))} />
      </header>
    </div>
  )
}

// EXAMPLE WHEN USING CONNECT
// const mapStateToProps = (state) => {
//   return {
//     text: state.exampleReducer.text,
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeText: (value) => dispatch(changeText(value)),
//   }
// }

//another way to write it without importing constant
// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeText: (value) => dispatch({ type: 'change_text', payload: value }),
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App)

export default App
