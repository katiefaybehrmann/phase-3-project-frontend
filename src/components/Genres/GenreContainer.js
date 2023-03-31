import React from "react";
import { useParams } from "react-router-dom";
import RecordCard from "../Records/RecordCard";
import AddRecord from "../Records/AddRecord";

function GenreContainer({genres, onAddRecord, onUpdateRecord}){
  let {genre_id} = useParams();
  const displayedGenre = genres.find(g => g.id == genre_id)


    return(
        <div>
          <h1>{displayedGenre.name}: {displayedGenre.description}</h1>
            {displayedGenre.records.map(r => <RecordCard key={r.id} record={r} onUpdateRecord={onUpdateRecord}/>)}
            <AddRecord onAddRecord={onAddRecord} displayedGenre={displayedGenre}/>
        </div>
    )
}

export default GenreContainer;