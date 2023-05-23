import React, { useEffect, useState } from 'react'
import axios from 'axios' 


// fetching data from database/db.json
const App = () => {


  const [users, setUsers] = useState([]); 

  const getAllUsers = async() => {
    const response = await axios.get("http://localhost:3001/users")
    setUsers(response.data) 
  }

  useEffect(() => {
    getAllUsers()
  }, []) 


  return (
    <div>
      {users.map((user) => {
        return( 
        <article key={user.id}> 
          <h2>user.name</h2>
          <p>user.email</p> 
        </article>
        ) 
      })}
      App 
    </div>
  )
}

export default App