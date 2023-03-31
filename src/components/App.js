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

  const handleAddGenre = (newGenre) => {
    setGenres([...genres, newGenre])
  }

  const handleAddRecord = (newRecord) => {
      const currentGenre = genres.find(genre => genre.id == newRecord.genre_id)
       const updatedRecords = [...currentGenre.records, newRecord]
       const updatedGenre = {...currentGenre, records: updatedRecords}
       const updatedGenres = genres.map(g => g.id == currentGenre.id ? updatedGenre : g)
      setGenres(updatedGenres)
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
          <Route path="/records" element={<RecordContainer genres={genres} />} />
      </Routes>
    </div>

  );
}

export default App;
