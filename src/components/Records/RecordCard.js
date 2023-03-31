import React from "react";
import { useState } from "react";

function RecordCard({record}){
    const [isEditing, setIsEditing] = useState(false)
    const [artist, setArtist] = useState(record.artist)
    const [release_date, setReleaseDate] = useState(record.release_date)
    const [image_url, setImageURL] = useState(record.image_url)
    const [listened, setListened] = useState(record.listened)
    const [rating, setRating] = useState(record.rating)

    return (
        <div>
            <h3>{record.artist}, {record.release_date}</h3>
        </div>
    )
}

export default RecordCard;