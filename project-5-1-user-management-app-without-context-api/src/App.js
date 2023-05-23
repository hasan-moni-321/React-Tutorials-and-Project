import React, {useState} from 'react'; 

import Users from "./components/users.js"; 
import NewUser from "./components/NewUser.js"; 

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
    <div>
      <NewUser handleAddNewUser={handleAddNewUser}/> 
      <Users users={users} handleDeleteUser={handleDeleteUser}/ >
    </div>
  )
}

export default App
