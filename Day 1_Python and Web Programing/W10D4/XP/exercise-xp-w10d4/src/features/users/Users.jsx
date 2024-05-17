import {useSelector, useDispatch,} from 'react-redux'
import { getUsersThunk } from './usersSlice'

const Users = (props)=>{
  const dispatch = useDispatch()
  const users = useSelector((state)=> state.usersReducer.users)
  const status = useSelector((state)=> state.usersReducer.status)

  return(
    
    <>
    <h2>Users Component</h2>
    <div>
      <h3>Users will display here: Press this button</h3>
      <button onClick={()=>{dispatch(getUsersThunk())}}>This Button</button>
      <br />
      Status: {status}
      {users.map((user)=>(
        <li key={user.id} id={user.id}>{user.name}</li>
      ))}
    </div>
    </>
  )
}


export default Users