import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchUsers } from './userSlice'

const UserView = () => {
  const dispatch = useDispatch()
  const getUser = ()=>{
      dispatch(fetchUsers())
    }
  const user = useSelector((state)=> state.user)
 
  return (
    <div>
      <h2>List of users</h2>
      <button onClick={getUser}>Get Users</button>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error?  <div>Error: {user.error}</div>: null}
      {!user.loading && user.users.length? 
       (<ul>{
          user.users.map((user)=>(
            <li>{user.name}</li>
          ))
        }</ul>): null}
    </div>
  )
}

export default UserView