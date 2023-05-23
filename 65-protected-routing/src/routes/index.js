import React, {useState} from 'react' 
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import Home from "../pages/Home.js"; 
import Addblog from '../pages/Addblog';
import About from '../pages/About'; 
import Error from '../pages/Error.js'; 
import Navbar from '../layout/Navbar.js';
import Protected from './Protected.js'; 

const Index = () => { 
    const [isLoggedIn, setIsLoggedIn] = useState(false);   

  return ( 
    <BrowserRouter> 
    <Navbar/> 

        {isLoggedIn ? (<button onClick={()=> {setIsLoggedIn(!isLoggedIn) }}>Log out{" "}</button>) : (<button onClick={() => {setIsLoggedIn(!isLoggedIn) }}>Log in</button>)}

        <Routes>
            <Route path='/' element={<Home/>}/> 
            <Route 
            path='/add-blog' 
            element={
            <Protected isLoggedIn={isLoggedIn}> 
            <Addblog/> 
            </Protected> } /> 
            
            <Route path='/about' element={<About/>}/> 
            <Route path='/*' element={<Error/>}/>
        </Routes>
    </BrowserRouter> 
  ); 
}; 

export default Index