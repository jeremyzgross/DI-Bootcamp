import {useSelector, useDispatch,} from 'react-redux'
import { getUsersThunk } from './usersSlice'
import { useRef } from 'react'
import { adduser, adduserPrepared } from './usersSlice'
const Users = (props)=>{
   const dispatch = useDispatch()
  const users = useSelector((state)=> state.users.users)
  const status = useSelector((state)=> state.users.status)
  const userNameRef = useRef()

  return(
    <>
    <h1>Users Display</h1>
    <div>
      <input ref={userNameRef} type="text" />
      <button onClick={()=>dispatch(adduser(userNameRef.current?.value))} >Add User</button> 
      <button onClick={()=>dispatch(adduserPrepared(userNameRef.current?.value))} >Add User Prepared</button> 
      {/* the ? means it cant be null */}
    </div>
    <button onClick={()=>dispatch(getUsersThunk())}>Get Users</button>

    <div>{status} {users.map((user)=>
    (
      <li key={user.id}>{user.name} </li>
    ))}</div>
    </>
  )
}

export default Users