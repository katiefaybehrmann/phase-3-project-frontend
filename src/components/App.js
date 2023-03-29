//import './App.css';
import { useEffect, useState } from 'react';
import GenreList from './GenreList';

function App() {
  const [genres, setGenres] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/genres")
      .then((r) => r.json())
      .then((genres) => setGenres(genres));
  }, []);

  return (
    <div>
      <h1>Welcome to DiscKatie!</h1>
      <p>Yes, this is my personal record collection</p>
      <p>Not affiliated with Discogs...</p>
      <GenreList genres={genres}/>
    </div>
  );
}

export default App;
