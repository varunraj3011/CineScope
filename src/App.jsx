import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./assets/pages/home/Home";
import MovieList from "./assets/component/movieList/movieList";
import Movie from './assets/pages/movieDetail/movie';
import Navbar from "./assets/component/Navbar";
import "./App.css"
function App() {
  return (
    <div>
      <Navbar />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path="movies/:type" element={<MovieList />}></Route>
        
      </Routes>
    </div>
      
  );
}


export default App;