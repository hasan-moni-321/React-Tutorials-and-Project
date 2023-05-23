import React, { Component } from 'react'

import HomePage from "./homePage.js" 
import LoginPage from "./loginPage.js" 

class  CONDITIONAL_RENDERING extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true  
      }
    }

    render() {

        const {isLoggedIn} = this.state

        /*
        // using if else 
        if(isLoggedIn){
            return <HomePage/>
        }else{
            return <LoginPage/> 
        }
        */ 

        /*
       // using variable 
       let element;  
       if(isLoggedIn){
          element = <HomePage/> 
       }else{
          element = <LoginPage/> 
       }

       return(
            <div>
                {element}
            </div>
        ); 
        */ 

        /*
        // using ternary 
        return(
            <div>
                {isLoggedIn ? <HomePage/> : <LoginPage/>}
            </div>
        )
        */ 

        // using short circuit 
        return (
            <div>
                { isLoggedIn && <HomePage/> }
            </div>
        )

    }
}


export default CONDITIONAL_RENDERING; 