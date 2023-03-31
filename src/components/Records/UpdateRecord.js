import React from "react";
import { useState } from "react";

function UpdateRecord({record, onUpdateRecord}){
    const [artist, setArtist] = useState(record.artist)
    const [release_date, setReleaseDate] = useState(record.release_date)
    const [image_url, setImageURL] = useState(record.image_url)
    const [listened, setListened] = useState(record.listened)
    const [rating, setRating] = useState(record.rating)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:9292/genres/${record.genre_id}/records/${record.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "artist": artist,
                "release_date": release_date,
                "image_url": image_url,
                "listened": listened,
                "rating": rating,
            })
        })
            .then(r => r.json())
            .then(updatedRecord => onUpdateRecord(updatedRecord))
    }

    return (
        <div>
            <h2>Update Record</h2>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Artist"
                    type="text"
                    name="artist"
                    value={artist}
                    onChange={(e) => setArtist(e.target.value)}
                />
                <br />
                <input
                    placeholder="Release Date"
                    type="text"
                    name="release_date"
                    value={release_date}
                    onChange={(e) => setReleaseDate(e.target.value)}
                />
                <br />
                <input
                    placeholder="Cover Art"
                    type="text"
                    name="image_url"
                    value={image_url}
                    onChange={(e) => setImageURL(e.target.value)}
                />
                <fieldset value={listened} onChange={e => setListened(e.target.value)}>
                    <h3>Listened?</h3>
                    <input type="radio" id="false" name="listened" value={false} />
                    <label for="false">Not yet!</label><br />
                    <input type="radio" id="true" name="listened" value={true} />
                    <label for="true">Oh yeah!</label><br />
                </fieldset>
                <br />
                <input
                    placeholder="My Rating"
                    type="text"
                    name="rating"
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                />
                <br />
                <button type="submit">Update Record</button>
            </form>
        </div>
    )
}

export default UpdateRecord