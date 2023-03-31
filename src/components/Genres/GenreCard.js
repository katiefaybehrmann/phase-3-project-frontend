import React from "react";
import RecordCard from "../RecordCard";

function GenreCard({genre}){

    return(
        <div>
            <h1>{genre.name}: {genre.description}</h1>
            
            {/* <div>
                {genre.records.map(record => <RecordCard key={record.id} record={record}/>)}
            </div> */}
        </div>
    )
}

export default GenreCard