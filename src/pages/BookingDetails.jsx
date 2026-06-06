import React from 'react'
import { useNavigate } from 'react-router-dom'
import movies from '../data/movies'
import Navbar from '../components/NavBar'

function BookingDetails() {
  const navigate = useNavigate()
  let bookings = []
  try {
    const raw = localStorage.getItem('bookingHistory')
    if (raw) bookings = JSON.parse(raw)
  } catch (e) {
    console.warn('Failed to read booking history', e)
  }

  if (!bookings || bookings.length === 0) {
    return (
      <>
        <Navbar />
        <div style={{ padding: 40, textAlign: 'center' }}>
          <h2>ShowTime</h2>
          <p>No booking found. Please make a booking first.</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: 900, margin: '24px auto', padding: 20 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>
          <h1 style={{ textAlign: 'center', margin: 0, flex: 1 }}>ShowTime</h1>
          <div style={{ width: 80 }} />
        </div>

        <div style={{ display: 'grid', gap: 20 }}>
          {bookings.map((booking, index) => {
            const movie = movies.find((m) => m.id === Number(booking.movieId))
            return (
              <div key={`${booking.movieId}-${index}`} style={{ border: '1px solid #ddd', borderRadius: 12, overflow: 'hidden', display: 'flex', gap: 20, padding: 20, background: '#fff' }}>
                <div style={{ minWidth: 220, flex: '0 0 220px', textAlign: 'center' }}>
                  {movie && (
                    <img src={movie.image} alt={movie.title} style={{ width: '100%', borderRadius: 8 }} />
                  )}
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ margin: 0 }}>{booking.title}</h2>
                  <p style={{ margin: '8px 0' }}><strong>Date:</strong> {booking.date}</p>
                  <p style={{ margin: '8px 0' }}><strong>Time:</strong> {booking.time}</p>
                  <p style={{ margin: '8px 0' }}><strong>Seats:</strong> {booking.seats?.length ? booking.seats.join(', ') : 'N/A'}</p>
                  <p style={{ margin: '8px 0' }}><strong>Tickets:</strong> {booking.tickets}</p>
                  <p style={{ margin: '8px 0' }}><strong>Price per ticket:</strong> ₹{booking.pricePerSeat}</p>
                  <h3 style={{ marginTop: 12 }}>Total Paid: ₹{booking.total}</h3>
                  <p style={{ marginTop: 16 }}><small>Booked at: {new Date(booking.bookedAt).toLocaleString()}</small></p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BookingDetails
