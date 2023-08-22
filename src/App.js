import React from 'react';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import Movie from  './Pages/MovieDetail/Movie';
import MovieList from './Components/MovieList/MovieList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (

    <div className="App">
     <Router>
       <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" element={<Movie />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
       </Routes>
     </Router>
    </div>
  );
}

export default App;
