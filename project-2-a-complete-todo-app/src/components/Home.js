import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'; 

import Todos from './Todos.js'; 
import style from './home.module.css'; 
import NewTodo from '../components/NewTodo.js'; 



const Home = () => {

  const [todos, setTodos] = useState([]); 

  const handleAddTodo = (todo) => {
    setTodos((prevTodos) => { 
      return [...prevTodos, {id: uuidv4(), todo}] 
    }) 
    console.log(todos)
  }

    const handleRemoveTodo=(id) => {
      setTodos((prevTodos)=> {
        const filteredTodos = prevTodos.filter((todo)=> todo.id !== id); 
        return filteredTodos; 
      })
    }

  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>

        <NewTodo onAddTodo={handleAddTodo}/> 

        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/> 
        <button
        className={style.btn}
        onClick={() => {
          setTodos([]);
        }}
      >
        Clear All todos
      </button>
    </div>
  )
}

export default Home