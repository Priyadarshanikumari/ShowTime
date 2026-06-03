import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import movies from '../data/movies'

function Booking() {
  const { id } = useParams()

  const movie = movies.find(
    (item) => item.id === Number(id)
  )

  const [tickets, setTickets] = useState(1)

  if (!movie) {
    return <h2>Movie Not Found</h2>
  }

  return (
    <div className="booking">

      <h1>{movie.title}</h1>

      <h3>Ticket Price: ₹{movie.price}</h3>

      <label>
        Number of Tickets:
      </label>

      <br /><br />

      <input
        type="number"
        min="1"
        value={tickets}
        onChange={(e) =>
          setTickets(e.target.value)
        }
      />

      <h2>
        Total Amount:
        ₹{movie.price * tickets}
      </h2>

      <button
        onClick={() =>
          alert("Booking Successful 🎉")
        }
      >
        Confirm Booking
      </button>

    </div>
  )
}

export default Booking