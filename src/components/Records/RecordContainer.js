import React from "react";
import RecordList from "./RecordList";

function RecordContainer({genres}){
    return (
        <div>
            <p>Record Container!</p>
            {genres.map(genre => <RecordList key={genre.id} records={genre.records}/>)
            }
        </div>
    )
}

export default RecordContainer