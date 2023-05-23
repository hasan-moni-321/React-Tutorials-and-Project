import React, {useContext} from 'react'

import User from "./user.js"; 
import { UsersContext } from '../context/UsersContext.js';

const users = ({handleDeleteUser}) => {

  const {users, setUsers} = useContext(UsersContext); 
  

  return (
    <section className='users'>
        {users.map(user => (
        <User key={user.id} user={user} 
        handleDeleteUser={handleDeleteUser}/>))}
    </section>
  )
}

export default users
