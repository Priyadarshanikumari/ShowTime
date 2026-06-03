import React from 'react'
import movies from "../data/movies.js";
import MovieCard from '../components/MovieCard'
import Navbar from '../components/NavBar';

function Home() {
  return (
    <div className="container">
      <Navbar />
      <h1>Recommended Movies</h1>

      <div className="movies">
        {
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home