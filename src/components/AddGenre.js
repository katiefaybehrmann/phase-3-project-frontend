import React, { useState } from "react";

function AddGenre({onAddGenre}){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    return(
        <form>
            <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            <input 
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            />
        </form>
    )

}

export default AddGenre