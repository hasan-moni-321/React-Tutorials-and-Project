import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css' 

const name = "Kamrul Hasan"
const desc = "I am kamrul hasan working for KaleidoSoft Croatia"
const date1 = "26/04/2023"
const date = new Date() 
const year = date.getFullYear()
const month = date.getMonth()
const day = date.getDay()  
const fullDate = date.getDate() 

// declare style
const welcomeStyle = {
  backgroundColor: "purple",
  color: "white",
  textAlign: "center",
  padding: "15px"
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1 style={welcomeStyle}>Welcome</h1>
    <h2 style={{color: "red", fontSize: '3rem'}}>{name}</h2>  
    <p className='desc'>{desc}</p>
    <p className='largeDate' >{date1}</p>
    <p>{year}</p>  
    <p className='month'>{month}</p> 
    <div className='card'> 
      <h3 className='cardTitle'>This is h3 tag </h3> 
      <p className='cardDesc'>This is the description in 2nd div</p> 
      <p className='cardFooter' >{day +"/"+ month +"/"+ year}</p>
    </div>
  </div>
);

