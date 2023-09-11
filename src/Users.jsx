// import { useEffect, useState } from "react"
// import User from "./User"

import { useEffect, useState } from "react"
import User from "./User"


// const Users = ()=>{
//     const [users,setUsers] = useState([])

//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/users')
//         .then(res => res.json())
//         .then(data => setUsers(data))
//     },[])

//     return(
//         <div>
//             <h3>{users.length}</h3>
//             {
//                 users.map(user => <User user = {user}></User>)
                
//             }
            
//         </div>
//     )
// }

// export default Users

const Users = ()=>{
    const [users,setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    })

    return(
        <div>
            {
                users.map(user => <User user = {user}></User>)
            }
        </div>
    )

}

export default Users