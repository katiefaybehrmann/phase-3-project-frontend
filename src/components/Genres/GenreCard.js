import React from "react";
import RecordCard from "../Records/RecordCard";

function GenreCard({displayedGenre}){

    return(
        <div>
            <h1>{displayedGenre.name}: {displayedGenre.description}</h1>
            {displayedGenre.records.map(r => <RecordCard key={r.id} record={r}/>)}
        </div>
    )
}

export default GenreCard