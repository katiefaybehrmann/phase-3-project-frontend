import React from "react";
import { useState, useEffect } from "react";
import GenreList from "./GenreList";

function GenreContainer(){
const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/genres")
      .then((r) => r.json())
      .then((genres) => setGenres(genres));
  }, []);

    return(
        <div>
            <p>Genre Container!</p>
            <GenreList genres={genres}/>
        </div>
    )
}

export default GenreContainer;