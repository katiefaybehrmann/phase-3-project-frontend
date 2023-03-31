import React from "react";

function GenreCard({genre}){

    return(
        <div>
            <h1>{genre.name}: {genre.description}</h1>
    
        </div>
    )
}

export default GenreCard