import React, {useState} from 'react'

import Todos from './Todos.js'; 
import NewTodo from './NewTodo.js';


const dummyData = ['todo1', 'todo2'];

const Home = () => { 

    const [todos, setTodos] = useState(dummyData); 

    const handleNewTodo = (newTodo) => {
        setTodos([... todos, newTodo]);  
    }

  return (
    <div>
        <NewTodo onTodo={handleNewTodo}/> 
        <Todos todos={todos} />  
    </div>
  )
}

export default Home