import { connect } from 'react-redux'
import { increment, decrement } from '../redux/actions'
const Counter = (props) =>{
  return (
    <>
    <h2>Counter Redux</h2>
    <button onClick={()=> props.add()}>+</button>
    count = {props.count} 
    {/* //goes to mapStateToProps */}
    <button  onClick={()=> props.minus()}>-</button>

    </>
  )
}

const mapStateToProps = (state) =>{
  return {
    count: state.counter.count //calling the reducer which inside you have count. Mapp it to somethign in the props in this case props.count therefore the object is Count: 
  }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    add: () => dispatch(increment()),
    minus: ()=> dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter); //redux documentation 