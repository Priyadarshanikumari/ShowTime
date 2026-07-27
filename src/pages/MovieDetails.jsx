import React, { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import movies from '../data/movies'
import ShowtimeSelector from '../components/ShowtimeSelector'
import SeatSelector from '../components/SeatSelector'
import Navbar from "../components/NavBar";

function MovieDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedShowtime, setSelectedShowtime] = useState(null)
  const [showSeatModal, setShowSeatModal] = useState(false)
  const [occupiedSeats, setOccupiedSeats] = useState([])

  const movie = movies.find(
    (item) => item.id === Number(id)
  )

  if (!movie) {
    return <h2>Movie Not Found</h2>
  }

  const handleSelectShowtime = (showtime) => {
    setSelectedShowtime(showtime)
  }

  const handleBookNow = () => {
    if (selectedShowtime) {
      // Pass showtime info via state or URL params
      navigate(`/booking/${movie.id}`, {
        state: { selectedShowtime }
      })
    } else {
      alert('Please select a date and time first!')
    }
  }

  const handleOpenSeatSelector = () => {
    if (!selectedShowtime) {
      alert('Please select date and time first')
      return
    }
    setShowSeatModal(true)
  }

  const handleConfirmSeats = (seats) => {
    setShowSeatModal(false)
    // mark seats as occupied in this session
    setOccupiedSeats((prev) => {
      const set = new Set([...(prev || []), ...(seats || [])])
      return Array.from(set)
    })
    // navigate to booking with both showtime and seats
    navigate(`/booking/${movie.id}`, {
      state: { selectedShowtime, selectedSeats: seats }
    })
  }

  return (
    <>
     <Navbar />
    <div className="details">
      <div className="details-container">
        <div className="details-left">
          <img src={movie.image} alt={movie.title} />

          <h1>{movie.title}</h1>

          <h3>⭐ {movie.rating}</h3>

          <p>{movie.desc}</p>

          <h2>Price : ₹{movie.price}</h2>

        </div>

        <div className="details-right">
          <ShowtimeSelector 
            movieId={movie.id}
            onSelectShowtime={handleSelectShowtime}
          />

          <div style={{ marginTop: 16, display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button onClick={handleOpenSeatSelector} className="book-now-btn">Select Seats</button>
            <button onClick={handleBookNow} className="book-now-btn">Book Now</button>
          </div>

          <SeatSelector open={showSeatModal} onClose={() => setShowSeatModal(false)} onConfirm={handleConfirmSeats} occupiedSeats={occupiedSeats} />
        </div>
      </div>
    </div>
    </>
  )
}

export default MovieDetails