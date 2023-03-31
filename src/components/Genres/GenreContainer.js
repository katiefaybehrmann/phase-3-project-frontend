import React from "react";
import GenreList from "./GenreList";
import AddGenre from "./AddGenre";

function GenreContainer({genres, onAddGenre}){


    return(
        <div>
            <GenreList genres={genres}/>
            <AddGenre onAddGenre={onAddGenre}/>
        </div>
    )
}

export default GenreContainer;