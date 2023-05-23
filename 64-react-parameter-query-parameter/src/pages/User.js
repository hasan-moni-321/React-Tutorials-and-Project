import React, {useState} from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

// accessing route parameter data using useParams() 
//************************************************************* */
// const User = () => {

//     const {userid} = useParams(); 
//   return (
//     <div>
//         <h3>User {userid}</h3>
//     </div>
//   )
// }

// export default User
//**************************************************************** */



// accessing query parameter data using useSearchParams() 
//********************************************************************
// const User = () => {
//     const [searchParams, setSearchParams] = useSearchParams(); 

//   return (
//     <div>
//         User 
//         <h3>{searchParams.get("id")}</h3>
//         <h3>{searchParams.get("age")}</h3>
//         <h3>{searchParams.get("name")}</h3>
//     </div>
//   )
// }

// export default User
// ************************************************************************



const User = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [name, setName] = useState(""); 
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); 
        setSearchParams({name: name, age: age}) 
    }

    return (
    <div>
        <h1>User</h1> 
        <form onSubmit={handleSubmit}>
            <input type='text' value={name} placeholder='name' onChange={(e)=> {
                setName(e.target.value)
            }}></input>

            <input type='text' value={age} placeholder='age' onChange={(e)=> { 
                setAge(e.target.value)
            }}></input>
            <button type='submit'>Find user</button> 
        </form>
    </div>
    )
}
    
export default User










