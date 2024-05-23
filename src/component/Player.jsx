import React, { useState } from 'react'

const Player = ({name,symbol}) => {
    const [PlayerName,setPlayerName] = useState(name)
    const [IsEditing,setIsEditing] =useState(false);
    const handleEditing =() =>{
        setIsEditing(!IsEditing)
    }

    const handleChange =(event) =>{
        setPlayerName(event.target.value)
    }
    let EditOption = <span className="player-name">{PlayerName}</span>;
    let btncaption = "Edit";
    if (IsEditing){
        EditOption = <input type="text" required value={PlayerName} onChange={handleChange}/>
        btncaption='Save'
    }
  return (
    <li>
        <span className="player">
            {EditOption}
            <span className="player-symbol">{symbol}</span>

        </span>
        <button onClick={handleEditing}>{btncaption}</button>
    </li>
  )
}

export default Player
