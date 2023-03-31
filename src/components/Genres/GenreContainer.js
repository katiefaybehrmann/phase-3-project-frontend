import React from "react";
import { useParams } from "react-router-dom";
import GenreCard from "./GenreCard";

function GenreContainer({genres, onAddGenre}){
  let {genre_id} = useParams();
  const displayedGenre = genres.find(g => g.id == genre_id)


    return(
        <div>
          <GenreCard displayedGenre={displayedGenre} />
        </div>
    )
}

export default GenreContainer;