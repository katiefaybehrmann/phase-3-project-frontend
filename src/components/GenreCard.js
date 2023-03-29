import React from "react";
import RecordCard from "./RecordCard";

function GenreCard({genre}){

    return(
        <div>
            <h1>{genre.name}</h1>
            <h2>{genre.description}</h2>
            <div>
                {genre.records.map(record => <RecordCard key={record.id} record={record}/>)}
            </div>
        </div>
    )
}

export default GenreCard