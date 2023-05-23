import React, {useState} from 'react'; 

import Users from "./components/users.js"; 
import NewUser from "./components/NewUser.js"; 
import { UsersContext } from './context/UsersContext.js'; 

const App = () => { 

  const [users, setUsers] = useState([
    {id: 1, username: 'hasan'}, 
    {id: 2, username: 'sadika'}
  ])

  const handleDeleteUser = (id) => {
    console.log(id); 
    const filteredUsers = users.filter((user) => user.id !== id); 
    setUsers(filteredUsers); 
  }

  const handleAddNewUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);  
  }
  
  return (
    <UsersContext.Provider value={{users, setUsers}}> 
      <div>
        <NewUser handleAddNewUser={handleAddNewUser}/> 
        <Users handleDeleteUser={handleDeleteUser}/ >
      </div>
    </UsersContext.Provider> 
  )
}

export default App
