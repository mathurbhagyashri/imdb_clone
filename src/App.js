import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
// import MovieList from "../../components/movieList/MovieList";
import MovieLists from "./components/movieLists/MovieLists";
import Movie from "./pages/movieDetail/Movie";


function App() {
  return (
    <>
 

      <div className="app">
        <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="movie/:id" element={<Movie/>} />
            <Route path="movies/:type" element={<MovieLists/>} />
            <Route
              path="*"
              element={<h1 style={{ color: "red" }}>Error page</h1>}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
