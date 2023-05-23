import React from "react";
import FunctionalCard from "./Components/functionalComponent.js" 
import ClassComponent from "./Components/classComponent.js" 


function App(){
    return (
        <div>
            <FunctionalCard name={"Kamrul Hasan Moni"} address={"Sachna, Jamalganj, Sunamganj"}/>
            <ClassComponent education={"B.Sc from Leading University, Sylhet"}/> 
        </div>
    )
}

export default App; 

