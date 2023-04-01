import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RecordCard from "../Records/RecordCard";
import AddRecord from "../Records/AddRecord";

function GenreContainer({genres, onAddRecord, onUpdateRecord, onDeleteRecord}){
  const [showForm, setShowForm] = useState(false)
  let {genre_id} = useParams();
  const displayedGenre = genres.find(g => g.id == genre_id)


    return(
        <div>
          <h1>{displayedGenre.name}: {displayedGenre.description}</h1>
            {displayedGenre.records.map(r => <RecordCard key={r.id} record={r} onUpdateRecord={onUpdateRecord} onDeleteRecord={onDeleteRecord}/>)}
            <br/>
            {showForm ? (
                <AddRecord onAddRecord={onAddRecord} displayedGenre={displayedGenre} setShowForm={setShowForm}/>
            ) :
                (
                    <div className="actions">
                        <button onClick={() => setShowForm((showForm) => !showForm)}>
                            Add {displayedGenre.name} Record!
                        </button>
                    </div>
                )}
            
        </div>
    )
}

export default GenreContainer;