import React from "react";
import RecordCard from "./RecordCard";

function RecordList({records}){
    return (
        <div>
            {records.map(record=> 
            <RecordCard key={record.id} record={record}/>
            )}
        </div>
    )
}

export default RecordList;