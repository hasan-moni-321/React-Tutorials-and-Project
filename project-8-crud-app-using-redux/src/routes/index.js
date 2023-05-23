import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import Home from '../pages/Home.jsx'; 
import Error from '../pages/Error.jsx'; 
import Navbar from '../layouts/Navbar.js'; 
import Booksview from '../features/books/Booksview.jsx';
import Addbook from '../features/books/Addbook.jsx';
import EditBook from '../features/books/Editbook.jsx'; 

const Index = () => {
  return ( 
    <BrowserRouter>
    {/* creating navbar  */}
    <Navbar/> 

        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/show-books" element={<Booksview/>} /> 
                <Route path="/add-book" element={<Addbook/>} /> 
                <Route path="/edit-book" element={<EditBook/>} />
                <Route path="*" element={<Error/>} /> 
            </Routes>
        </main>
    </BrowserRouter>
  )
}

export default Index