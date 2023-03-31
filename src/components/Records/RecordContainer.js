import React from "react";
import RecordList from "./RecordList";
import AddRecord from "./AddRecord";

function RecordContainer({genres}){
    return (
        <div>
            {genres.map(genre => <RecordList key={genre.id} records={genre.records}/>)
            }
            <AddRecord genres={genres}/>
        </div>
    )
}

export default RecordContainer