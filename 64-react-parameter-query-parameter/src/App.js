import React from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"; 

import Home from "./pages/Home.js"; 
import Contact from './pages/Contact.js'; 
import Blogs from './pages/Blogs.js'; 
import Error from './pages/Error.js';
import Navbar from './components/Navbar.js';
import Blog from './pages/Blog.js'; 
import User from './pages/User.js'; 

import "./style.css"; 


const App = () => {
  return (
    <div> 

      <BrowserRouter>
      {/* calling Navbar */} 
      <Navbar/> 

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/blogs' element={<Blogs/>}/> 
          <Route path='/blogs/:title' element={<Blog/>}/> 
          <Route path='*' element={<Error/>}/> 
          {/* <Route path='/user/:userid' element={<User/>}/> */}  
          <Route path='/user' element={<User/>}/> 
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App