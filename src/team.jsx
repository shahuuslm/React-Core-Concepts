import { useState } from "react"

const Team = ()=>{
const [team,setTeam] = useState(11)

    const handleAdd = ()=>{
        const newUpdate = team + 1;
        setTeam(newUpdate)
    }
    const handleRemove = ()=>{
        const newUpdate = team - 1;
        setTeam(newUpdate)
    }

    const teamStyle = {
        border: '2px solid white',
        margin: '15px',
        padding: '15px',
        borderRadius: '15px'
      }

    return(
        < div style = {teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove }>Remove</button>
        </div>
    )
}

export default Team