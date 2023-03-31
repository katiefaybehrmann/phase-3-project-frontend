//import './App.css';
import { Route, Routes, Router } from "react-router-dom";
import NavBar from './Shared/NavBar';
import GenreContainer from './Genres/GenreContainer';
import RecordContainer from './Records/RecordContainer';
import { useState, useEffect } from "react";


function App() {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/genres")
      .then((r) => r.json())
      .then((genres) => setGenres(genres));
  }, []);

  function handleAddGenre(newGenre){
    setGenres([...genres, newGenre])
  }

  return (
    <div>
      <div>
      <h1>Welcome to DisKatie!</h1>
      <p>Yes, this is my personal record collection</p>
      <p>Not affiliated with Discogs...</p>
    </div>
      <NavBar/>
      <Routes>
          <Route path="/genres" element={<GenreContainer genres={genres} onAddGenre={handleAddGenre}/>} />
          <Route path="/records" element={<RecordContainer genres={genres}/>} />
      </Routes>
    </div>

  );
}

export default App;
