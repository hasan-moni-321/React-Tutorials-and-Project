import React, { useState } from "react";


const App = () => {

    const [count, setCount] = useState(0); 

    // define handleincrement function 
    const handleIncrement = () => {
        // setCount(count => count + 1); // 1
        // setCount((prevCount) => prevCount + 1); 
        setCount((prevCount) => {
            return prevCount + 1; 
        }); 
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrement}>increment</button>
        </div>
    )
}

export default App; 
