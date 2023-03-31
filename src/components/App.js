//import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import GenreContainer from './Genres/GenreContainer';
import { useState, useEffect } from "react";
import AddGenre from "./Genres/AddGenre";


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
    <ul>
        {genres.map((g) => (
          <li key={g.id}>
            <Link to={`genres/${g.id}`}>{g.name}</Link>
          </li>
        ))}
      </ul>
      <Link to='/genres/add'>Add a Genre!</Link>
      <Routes>
          <Route path="/genres/:genre_id" element={<GenreContainer genres={genres} onAddRecord={handleAddRecord}/>} />
          <Route path="/genres/add" element={<AddGenre onAddGenre={handleAddGenre}/>}/>
      </Routes>
    </div>

  );
}

export default App;
