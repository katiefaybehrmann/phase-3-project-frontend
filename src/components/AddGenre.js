import React, { useState } from "react";

function AddGenre({onAddGenre}){
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/genres", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "name": name,
            "description": description
          })
        })
          .then(r => r.json())
          .then(p => onAddGenre(p))
          clearForm();
    }

    function clearForm(){
        setName("")
        setDescription("")
      }

    return(
        <div>
            <h2>Add a Genre</h2>
            <form onSubmit={handleSubmit}>
                <input
                placeholder="Name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <br/>
                <input 
                placeholder="Description"
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default AddGenre