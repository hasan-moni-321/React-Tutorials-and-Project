import React from "react";
import uuid from 'react-uuid';

const todos = [
    {
        id: uuid(),
        title: "todo1",
        desc: "desc1"
    },
    {
        id: uuid(),
        title: "todo2",
        desc: "desc2"
    },
    {
        id: uuid(),
        title: "todo3",
        desc: "desc3"
    },
    {
        id: uuid(),
        title: "todo4", 
        desc: "desc4" 
    }
]


const List = () => { 
    return( 
        <div>
            {todos.map((todo) => {
                // const {id, title, desc} = todo
                return ( 
                    <div key={todo.id}> 
                        <h3>{todo.title}</h3> 
                        <p>{todo.desc}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default List; 