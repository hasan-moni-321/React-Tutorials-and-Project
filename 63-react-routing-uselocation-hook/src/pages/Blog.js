import React, {useState, useEffect} from 'react'
import {useParams, useLocation} from "react-router-dom"; 

import {blogsData} from "../data.js"; 

const Blog = () => { 
    // finding title using useParam 
    const {title} = useParams(); 

    // finding id, title, body using useLocation() 
    const location = useLocation(); 
    
    // declare useState hook
    // const [bodyData, setBodyData] = useState(""); 

    // filtering data using useEffect
    // useEffect(() => {
    //     const blogData = blogsData.filter((blog) => blog.title === title);
    //     setBodyData(blogData[0].body); 
    // }, []); 
     

  return (
    <div>
        <h1>{location.state.title} page</h1> 
        <p>{location.state.body.slice(0, 500)}</p>
        <p>{location.state.body.slice(501, 800)}</p>
    </div>
  )
}

export default Blog
