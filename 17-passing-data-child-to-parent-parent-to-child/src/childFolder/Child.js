import React from 'react'

export default function Child(props) { 

     const childData = "This data from Child.js for child to parent"; 
     props.onChildData(childData); 

  return (
    <div>
        <p>Data from parent: {props.onParentData}</p>
    </div>
  )
}
