import React, { useState } from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import movies from '../data/movies'

function Booking() {
  const { id } = useParams()
  const location = useLocation()
  const selectedShowtime = location.state?.selectedShowtime
  const selectedSeats = location.state?.selectedSeats || []

  const movie = movies.find(
    (item) => item.id === Number(id)
  )

  const navigate = useNavigate()
  const [tickets, setTickets] = useState(1)
  const pricePerSeat = movie.price
  const seatCount = selectedSeats.length > 0 ? selectedSeats.length : Number(tickets)

  if (!movie) {
    return <h2>Movie Not Found</h2>
  }

  return (
    <div className="booking">

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>
        <h1 style={{ margin: 0 }}>{movie.title}</h1>
        <div style={{ width: 80 }} />
      </div>

      {selectedShowtime && (
        <div className="showtime-info">
          <h3>Selected Showtime</h3>
          <p><strong>Date:</strong> {selectedShowtime.date}</p>
          <p><strong>Time:</strong> {selectedShowtime.time}</p>
          {selectedSeats.length > 0 && (
            <div style={{ marginTop: 10 }}>
              <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
            </div>
          )}
        </div>
      )}

      <h3>Seat Price: ₹{pricePerSeat} per seat</h3>

      <label>
        Number of Tickets:
      </label>

      <br /><br />

      <input
        type="number"
        min="1"
        value={tickets}
        onChange={(e) =>
          setTickets(Number(e.target.value) || 1)
        }
      />

      <h2>
        Total Amount:
        ₹{pricePerSeat * seatCount}
      </h2>

      <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
        <button
          onClick={() => {
            const booking = {
              movieId: movie.id,
              title: movie.title,
              date: selectedShowtime?.date || null,
              time: selectedShowtime?.time || null,
              seats: selectedSeats || [],
              pricePerSeat: pricePerSeat,
              tickets: seatCount,
              total: pricePerSeat * seatCount,
              bookedAt: new Date().toISOString()
            }

            try {
              const rawHistory = localStorage.getItem('bookingHistory')
              const history = rawHistory ? JSON.parse(rawHistory) : []
              history.push(booking)
              localStorage.setItem('bookingHistory', JSON.stringify(history))
              localStorage.setItem('lastBooking', JSON.stringify(booking))
            } catch (e) {
              console.warn('Could not save booking', e)
            }

            alert('Booking Successful 🎉')
          }}
          style={{ background: '#d81f26', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: 6, cursor: 'pointer' }}
        >
          Confirm Booking
        </button>
      </div>

    </div>
  )
}

export default Booking