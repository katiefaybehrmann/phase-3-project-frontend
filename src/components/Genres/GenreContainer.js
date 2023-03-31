import React from "react";
import { useParams } from "react-router-dom";
import GenreCard from "./GenreCard";

function GenreContainer({genres, onAddRecord}){
  let {genre_id} = useParams();
  const displayedGenre = genres.find(g => g.id == genre_id)


    return(
        <div>
          <GenreCard displayedGenre={displayedGenre} onAddRecord={onAddRecord}/>
        </div>
    )
}

export default GenreContainer;