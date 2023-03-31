import React from "react";

function GenreCard({displayedGenre}){

    return(
        <div>
            <h1>{displayedGenre.name}: {displayedGenre.description}</h1>
    
        </div>
    )
}

export default GenreCard