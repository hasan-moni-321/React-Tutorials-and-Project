import React from 'react'

import Child from "./childFolder/Child.js" 

export default function App() {
    const parent_data ="This data from App.js for parent to child";

    const childDataReadFunction = (childData) => {
        console.log(childData)
    }

  return (
    <div> 
        <Child onParentData = {parent_data} onChildData = {childDataReadFunction}/> 
    </div>
  )
}

