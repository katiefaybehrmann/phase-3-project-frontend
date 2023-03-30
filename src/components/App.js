//import './App.css';
import { useEffect, useState } from 'react';
import GenreList from './GenreList';
import AddGenre from './AddGenre';

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
      <h1>Welcome to DiscKatie!</h1>
      <p>Yes, this is my personal record collection</p>
      <p>Not affiliated with Discogs...</p>
      <GenreList genres={genres}/>
      <AddGenre onAddGenre={handleAddGenre}/>
    </div>
  );
}

export default App;
