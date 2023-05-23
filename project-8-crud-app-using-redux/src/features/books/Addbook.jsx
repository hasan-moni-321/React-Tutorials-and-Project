import React, { useState } from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"; 
import { addBook } from './BooksSlice';
import { v4 as uuidv4 } from 'uuid';


const Addbook = () => {

  const [title, setTitle] = useState(""); 
  const [author, setAuthor] = useState(""); 

  // declare useDispatch() and useNavigate()
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 

  // finding number of books
  // const numberOfBooks = useSelector((state)=> state.booksReducer.books.length); 

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const book = {id: uuidv4(), title, author}; 
    dispatch(addBook(book)); 
    navigate('/show-books', {replace: true}); 
  }
  

  return (
    <div>
        <h2>Add Book</h2>
        <form onSubmit={handleSubmit}> 
          <div className='form-field'> 
            <label htmlFor='title'>Title: </label>
            <input type='text' id='title' name='title' value={title} onChange={(e)=> setTitle(e.target.value)} required></input>
          </div>
          <div className='form-field'> 
            <label htmlFor='author'>Author: </label>
            <input type='text' id='author' name='author' value={author} onChange={(e)=> setAuthor(e.target.value)} required></input>
          </div>
          <button type='submit'>Add Book</button>
        </form>
    </div> 
  )
}

export default Addbook
