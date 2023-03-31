import React from "react";
import { useState } from "react";

function AddRecord({genres}) {
    const [artist, setArtist] = useState("")
    const [release_date, setReleaseDate] = useState("")
    const [image_url, setImageURL] = useState("")
    const [listened, setListened] = useState(false)
    const [rating, setRating] = useState("")
    const [genre_id, setGenreID] = useState('')
    // const [recordGenre, setRecordGenre] = useState()

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:9292/records", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            "artist": artist,
            "release_date": release_date,
            "image_url": image_url,
            "listened": listened,
            "rating": rating,
            "genre_id": genre_id
          })
        })
          .then(r => r.json())
          .then(p => console.log(p))
          clearForm();
    }

    function clearForm(){
        setArtist("")
        setReleaseDate("")
        setImageURL("")
        setListened(false)
        setRating("")
        setGenreID("")
      }

    return (
        <div>
            <h2>Add a Record</h2>
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
                <label for="genre_id">Choose a genre</label>
                <select value={genre_id} name="genre_id" id="genre_id" onChange={(e) => setGenreID(e.target.value)}>
                    {genres.map(genre => <option value={genre.id}>{genre.name}</option>)}
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddRecord