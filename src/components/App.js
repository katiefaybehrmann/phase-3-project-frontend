import { Route, Routes, Link } from "react-router-dom";
import GenreContainer from './Genres/GenreContainer';
import { useState, useEffect } from "react";
import AddGenre from "./Genres/AddGenre";
import Home from "./Home";


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
    const updatedGenre = { ...currentGenre, records: updatedRecords }
    const updatedGenres = genres.map(g => g.id == currentGenre.id ? updatedGenre : g)
    setGenres(updatedGenres)
  }

  const handleUpdateRecord = (updatedRecordObj) => {
    const currentGenre = genres.find(g => g.id === updatedRecordObj.genre_id)
    const updatedRecords = currentGenre.records.map(r => r.id === updatedRecordObj.id ? updatedRecordObj : r)
    const updatedGenre = { ...currentGenre, records: updatedRecords }
    const updatedGenres = genres.map(g => g.id == currentGenre.id ? updatedGenre : g)
    setGenres(updatedGenres)
  }

  const handleDeleteRecord = (deletedRecord) => {
    const currentGenre = genres.find(g => g.id === deletedRecord.genre_id)
    const updatedRecords = currentGenre.records.filter(r => r.id !== deletedRecord.id)
    const updatedGenre = { ...currentGenre, records: updatedRecords }
    const updatedGenres = genres.map(g => g.id == currentGenre.id ? updatedGenre : g)
    setGenres(updatedGenres)
  }

  return (
    <div>
      <h1>DisKatie</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genres/:genre_id" element={<GenreContainer genres={genres} onAddRecord={handleAddRecord} onUpdateRecord={handleUpdateRecord} onDeleteRecord={handleDeleteRecord} />} />
        <Route path="/genres/add" element={<AddGenre onAddGenre={handleAddGenre} />} />
      </Routes>
      <ul>
        {genres.map((g) => (
          <li key={g.id}>
            <Link to={`genres/${g.id}`}>{g.name}</Link>
          </li>
        ))}
      </ul>
      <Link to='/genres/add'>Add a Genre!</Link>
      <br/><br/>
      <Link to='/'>Home</Link>

      
    </div>

  );
}

export default App;
