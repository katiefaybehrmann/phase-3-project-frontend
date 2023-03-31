import React from "react";
import RecordList from "./RecordList";
import AddRecord from "./AddRecord";

function RecordContainer({genres, setGenreRecords, genreRecords}){
    return (
        <div>
            {genres.map(genre => <RecordList key={genre.id} records={genre.records}/>)
            }
            <AddRecord genres={genres} setGenreRecords={setGenreRecords} genreRecords={genreRecords}/>
        </div>
    )
}

export default RecordContainer