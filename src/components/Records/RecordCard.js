import React from "react";
import { useState } from "react";
import UpdateRecord from "./UpdateRecord";

function RecordCard({ record, onUpdateRecord, onDeleteRecord }) {
    const [isEditing, setIsEditing] = useState(false)

    const handleUpdateRecord = (updatedRecord) => {
        setIsEditing(false)
        onUpdateRecord(updatedRecord)
    }

    const handleDeleteClick = () => {
        fetch(`http://localhost:9292/genres/${record.genre_id}/records/${record.id}`, {
            method: "DELETE",
        });

        onDeleteRecord(record)
    }


    return (
        <div>
            <div className="card">
                <h3>{record.artist}, {record.release_date}</h3>
                <img src={record.image_url} alt={record.artist}/>
            </div>
            {isEditing ? (
                <UpdateRecord record={record} onUpdateRecord={handleUpdateRecord} />
            ) :
                (
                    <div className="actions">
                        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                            <span role="img" aria-label="edit">
                                ✏️
                            </span>
                        </button>
                        <button onClick={handleDeleteClick}>
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