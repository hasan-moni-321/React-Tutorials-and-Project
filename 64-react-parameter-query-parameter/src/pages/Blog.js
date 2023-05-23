import React from 'react'
import { useLocation} from "react-router-dom"; 


const Blog = () => {  

    // finding id, title, body using useLocation() 
    const location = useLocation(); 
     
     

  return (
    <div>
        <h1>{location.state.title} page</h1> 
        <p>{location.state.body.slice(0, 500)}</p>
        <p>{location.state.body.slice(501, 800)}</p>
    </div>
  )
}

export default Blog
