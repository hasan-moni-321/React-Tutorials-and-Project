const date = new Date() 
const datename = date.getDay()
const monthname = date.getMonth() 
const yearname = date.getFullYear()  


function Card(props){
  // destructuring 
  const {todoTitle, todoDesc} = props; 
  return <div className='card'>
          <h3 className='cardTitle'>{todoTitle}</h3> 
          <p className='cardDesc'>{todoDesc}</p>  
          <p className='cardFooter'>{datename +"/" + monthname +"/"+ yearname}</p> 
         </div>
}

export default Card; 


