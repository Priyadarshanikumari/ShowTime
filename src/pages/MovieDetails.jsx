import React from 'react'
import { useParams, Link } from 'react-router-dom'
import movies from '../data/movies'

function MovieDetails() {
  const { id } = useParams()

  const movie = movies.find(
    (item) => item.id === Number(id)
  )

  if (!movie) {
    return <h2>Movie Not Found</h2>
  }

  return (
    <div className="details">
      <img
        src={movie.image}
        alt={movie.title}
      />

      <h1>{movie.title}</h1>

      <h3>⭐ {movie.rating}</h3>

      <p>{movie.desc}</p>

      <h2>Price : ₹{movie.price}</h2>

      <Link to={`/booking/${movie.id}`}>
        <button>Book Now</button>
      </Link>
    </div>
  )
}

export default MovieDetails