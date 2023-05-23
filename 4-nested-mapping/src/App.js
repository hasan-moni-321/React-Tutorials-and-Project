import React from "react"; 


const users = [
    {
        fullName: "Kamrul Hasan", 
        age: 28,
        phones: [
            {home: 12345},
            {office: 98765}
        ]
    },
    {
        fullName: "Rana Mubarak", 
        age: 33,
        phones: [
            {home: 246},
            {office: 135}
        ]
    }
]


function App(){
    return (
        <div>
            <h1>Nested Lists</h1>
            {
                users.map((user, index) => (
                    <article key={index}> 
                        <h3>FullName: {user.fullName}</h3>
                        <p>Age: {user.age}</p> 
                        {
                            user.phones.map((phone, index) => (
                            <div key={index}> 
                                <p>{ phone.home}</p>
                                <p>{phone.office}</p> 
                            </div> 
                            ))  
                        }
                    </article>
                ) )
            }
        </div>
    )
}

export default App; 
