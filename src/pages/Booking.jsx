import React, { useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import movies from "../data/movies";
import Navbar from "../components/NavBar";
import calculateBill from "../utils/calculateBill";
import {
  getSelectedOffer,
  getBookingHistory,
  setBookingHistory,
  setLastBooking,
  removeSelectedOffer,
} from "../utils/storage";

function Booking() {

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const movie = movies.find((m) => m.id === Number(id));

  const showtime = location.state?.selectedShowtime;
  const seats = location.state?.selectedSeats || [];

  const [tickets, setTickets] = useState(1);
  const [offer] = useState(getSelectedOffer());
  const [message, setMessage] = useState("");

  if (!movie) return <h2>Movie Not Found</h2>;

  const seatCount = seats.length || tickets;

  const { totalAmount, discount, finalAmount } = calculateBill(
    movie.price,
    seatCount,
    offer
  );

  const handleBooking = () => {

    const booking = {
      movieId: movie.id,
      title: movie.title,
      date: showtime?.date || "",
      time: showtime?.time || "",
      seats,
      tickets: seatCount,
      pricePerSeat: movie.price,
      total: totalAmount,
      offer: offer?.title || "No Offer",
      discount,
      finalAmount,
      bookedAt: new Date().toISOString(),
    };

    const history = getBookingHistory();

    setBookingHistory([...history, booking]);

    setLastBooking(booking);

    removeSelectedOffer();

    setMessage("🎉 Booking Successful!");

    setTimeout(() => navigate("/booking-details"), 1500);

  };

  return (
    <>
      <Navbar />

      <div className="booking">

        <h1>Booking for {movie.title}</h1>

        {showtime && (
          <div className="showtime-info">
            <h3>Selected Showtime</h3>
            <p><strong>Date :</strong> {showtime.date}</p>
            <p><strong>Time :</strong> {showtime.time}</p>
            <p><strong>Seats :</strong> {seats.join(", ")}</p>
          </div>
        )}

        <h3>Seat Price : ₹{movie.price} per seat</h3>

        <label>Number of Tickets :</label>

        <input type="number" min="1" value={tickets} onChange={(e)=>setTickets(Number(e.target.value)||1)} />

        <h2>Total Amount : ₹{totalAmount}</h2>

        {offer ? (
          <>
            <h3 className="offer-title">Offer Applied : {offer.title}</h3>
            <h3 className="discount">Discount : ₹{discount}</h3>
            <h2 className="final-amount">Final Amount : ₹{finalAmount}</h2>
          </>
        ) : (
          <h2 className="final-amount">Final Amount : ₹{totalAmount}</h2>
        )}

        {message && <p className="success-msg">{message}</p>}

        <div className="confirm-btn">
          <button className="signin-btn" onClick={handleBooking}>Confirm Booking</button>
        </div>

      </div>
    </>
  );
}

export default Booking;