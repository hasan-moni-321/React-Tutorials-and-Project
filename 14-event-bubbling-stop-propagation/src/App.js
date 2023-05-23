import React from "react"; 

const App = () => {

    const handleParentClick = (event) => {
        console.log('parent event: ', event);
    }

    const handleChildClick = (event) => {
        event.stopPropagation(); 
        console.log('child event: ', event); 
    }


    return (
        <div className="parent" onClick={handleParentClick}>
            <h1>Welcome everyone</h1> 
            <button onClick={handleChildClick}>increment</button>
        </div>
    )
}

export default App; 