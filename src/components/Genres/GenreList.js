import React from "react";
import GenreCard from "./GenreCard";

function GenreList({genres}){

    return(
        <div>
            {genres.map(genre => 
            <GenreCard key={genre.id} genre={genre} records={genre.records}/>
            )}
        </div>
    )
}

export default GenreList;