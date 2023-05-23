import React,{useState} from 'react'; 

import style from "./style.css"; 

export default function Form() {

    // define useState
    const [name, setName] = useState(""); 
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 

    // define handleNameChange function 
    const handleNameChange = (e) => {
        setName(e.target.value); 
    }

    // define handleEmailChange function 
    const handleEmailChange = (e) => {
        setEmail(e.target.value);  
    }

    // define handlePasswordChange function 
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);  
    }

    // define handleSubmit function 
    const handleSubmit = (e) => {
        console.log('form is submitted'); 
        let userInfo = {
            name, 
            email, 
            password
        } 
        console.log(userInfo); 
        e.preventDefault(); 
    }


    // return part of the function 
  return (
    <div>
        <h1>Registration</h1> 
        <form  onSubmit={handleSubmit}> 
            <div className={style.formGroup}>
                <label htmlFor='name'>Name: </label>
                <input type='text' name='name' id='name' value={name} onChange={handleNameChange} required></input>
            </div>

            <div className={style.formGroup}>
                <label htmlFor='email'>Email: </label>
                <input type='email' name='email' id='email' value={email} onChange={handleEmailChange} required></input>
            </div>

            <div className={style.formGroup}>
                <label htmlFor='password'>Passward: </label> 
                <input type='password' name='password' id='password' value={password} onChange={handlePasswordChange} required></input>
            </div>

            <div className={style.formGroup}>
                <button type='submit'>Register</button> 
            </div> 
        </form>
    </div>
  )
}
