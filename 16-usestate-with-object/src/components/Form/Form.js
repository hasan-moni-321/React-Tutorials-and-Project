import React,{useState} from 'react'; 

import style from "./style.css"; 

export default function Form() {

    // define useState shortly 
    const [user, setUser] = useState({name: "", email: "", password: ""}); 

    // destructuring 
    const {name, email, password} = user; 

    // define handleChange function 
    const handleChange = (e) => {
        setUser({...user, [e.target.name]: [e.target.value]}); 
    } 

    // define handleSubmit function 
    const handleSubmit = (e) => {
        console.log('form is submitted'); 
        console.log(user); 
        e.preventDefault(); 
    }


    // return part of the function 
  return (
    <div>
        <h1>Registration</h1> 
        <form  onSubmit={handleSubmit}> 
            <div className={style.formGroup}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' id='name' value={name} onChange={handleChange} required></input>
            </div>

            <div className={style.formGroup}>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' id='email' value={email} onChange={handleChange} required></input>
            </div>

            <div className={style.formGroup}>
                <label htmlFor='password'>Passward: </label> 
                <input type='password' name='password' id='password' value={password} onChange={handleChange} required></input>
            </div>

            <div className={style.formGroup}>
                <button type='submit'>Register</button> 
            </div> 
        </form>
    </div>
  )
}
