import React from "react";
import AddRecord from "../Records/AddRecord";
import RecordCard from "../Records/RecordCard";

function GenreCard({displayedGenre, onAddRecord}){

    return(
        <div>
            <h1>{displayedGenre.name}: {displayedGenre.description}</h1>
            {displayedGenre.records.map(r => <RecordCard key={r.id} record={r}/>)}
            <AddRecord onAddRecord={onAddRecord} displayedGenre={displayedGenre}/>
        </div>
    )
}

export default GenreCard