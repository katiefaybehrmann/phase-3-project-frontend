import React from "react";

function GenreCard({genre}){

    return(
        <div>
            <h1>{genre.name}</h1>
            <h2>{genre.description}</h2>
        </div>
    )
}

export default GenreCard