import React from "react";
import movies from "../data/movies";

function BookingCard({ booking }) {

  const movie = movies.find(
    (m) => m.id === Number(booking.movieId)
  );

  return (
    <div className="booking-card">

      <div className="booking-image">
        {movie && (
          <img
            src={movie.image}
            alt={movie.title}
          />
        )}
      </div>

      <div className="booking-content">

        <h2>{booking.title}</h2>

        <hr />

        <p><strong>Date :</strong> {booking.date}</p>
        <p><strong>Time :</strong> {booking.time}</p>
        <p><strong>Seats :</strong> {booking.seats?.length ? booking.seats.join(", ") : "N/A"}</p>
        <p><strong>Tickets :</strong> {booking.tickets}</p>
        <p><strong>Price / Ticket :</strong> ₹{booking.pricePerSeat}</p>

        <hr />

        <p><strong>Total Amount :</strong> ₹{booking.total}</p>
        <p className="offer-title"><strong>Offer :</strong> {booking.offer}</p>
        <p className="discount"><strong>Discount :</strong> ₹{booking.discount}</p>

        <h2 className="final-amount">Final Paid : ₹{booking.finalAmount}</h2>

        <hr />

        <small>Booked On : {new Date(booking.bookedAt).toLocaleString()}</small>

      </div>

    </div>
  );
}

export default BookingCard;