import React from 'react'
import {useNavigate} from "react-router-dom"; 

const Contact = () => {

  const navigate = useNavigate(); 
  return (
    <div>
        <h1>Contact Page</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod optio dicta doloribus facilis, laudantium molestiae omnis, mollitia explicabo modi delectus ipsa amet quis similique ea soluta tempore accusamus asperiores tenetur.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel rerum delectus ut vero natus cumque numquam totam? Perspiciatis, esse eligendi.</p>
        
        <button onClick={()=> {
          navigate('/')
        }}>Go to home page</button>
    </div>
  )
}

export default Contact