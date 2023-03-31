import React from "react";
import { useState } from "react";
import UpdateRecord from "./UpdateRecord";

function RecordCard({ record, onUpdateRecord }) {
    const [isEditing, setIsEditing] = useState(false)

    const handleUpdateRecord = (updatedRecord) => {
        setIsEditing(false)
        onUpdateRecord(updatedRecord)
    }


    return (
        <div>
            <h3>{record.artist}, {record.release_date}</h3>
            {isEditing ? (
                <UpdateRecord record={record} onUpdateRecord={handleUpdateRecord}/>
            ) :
                (
                    <div className="actions">
                        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                            <span role="img" aria-label="edit">
                                ✏️
                            </span>
                        </button>
                        <button >
                            <span role="img" aria-label="delete">
                                🗑
                            </span>
                        </button>
                    </div>
                )}
        </div>
    )
}

export default RecordCard;