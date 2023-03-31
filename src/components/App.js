//import './App.css';
import { Route, Routes, Router } from "react-router-dom";
import NavBar from './Shared/NavBar';
import GenreContainer from './Genres/GenreContainer';
import RecordContainer from './Records/RecordContainer';
import Header from './Shared/Header';


function App() {
  // const [genres, setGenres] = useState([])

  // useEffect(() => {
  //   fetch("http://localhost:9292/genres")
  //     .then((r) => r.json())
  //     .then((genres) => setGenres(genres));
  // }, []);

  // function handleAddGenre(newGenre){
  //   setGenres([...genres, newGenre])
  // }

  return (
    <div>
      <div>
      <h1>Welcome to DiscKatie!</h1>
      <p>Yes, this is my personal record collection</p>
      <p>Not affiliated with Discogs...</p>
    </div>
      <NavBar/>
      <Routes>
          <Route path="/genres" element={<GenreContainer />} />
          <Route path="/records" element={<RecordContainer />} />
      </Routes>
    </div>

  );
}

export default App;
