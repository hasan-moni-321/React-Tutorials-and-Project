import React from "react"; 

import Card from "./components/Card";
import Data  from "./Data.json"; 

 
function App(){
    
    return <div>
            <h1 className="headingStyle">Todo App</h1> 
             {Data.map((item, index) => <Card key={index} todoTitle={item.title} todoDesc={item.desc}/>)}
           </div>
}

export default App; 
