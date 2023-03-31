import React from "react";

function RecordCard({record}){

    return (
        <div>
            <h3>{record.artist}, {record.release_date}</h3>
        </div>
    )
}

export default RecordCard;