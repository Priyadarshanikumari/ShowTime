import React, { useState, useEffect } from "react";
import "../styles/bookingDetails.css";
import Navbar from "../components/NavBar";
import BookingCard from "../components/BookingCard";

function BookingDetails() {

  const [bookings, setBookings] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem("bookingHistory");
      if (raw) setBookings(JSON.parse(raw));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const handleBookingClear = () => {
      setBookings([]);
      setMessage("🗑️ Booking history cleared successfully.");
    };

    window.addEventListener("bookingCleared", handleBookingClear);

    return () =>
      window.removeEventListener("bookingCleared", handleBookingClear);
  }, []);

  const handleClearBookings = () => {
    localStorage.removeItem("bookingHistory");
    localStorage.removeItem("lastBooking");
    localStorage.removeItem("selectedOffer");

    setBookings([]);
    setMessage("🗑️ Booking history cleared successfully.");
  };

  return (
    <>
      <Navbar />

      <div className="booking-details">

        <div className="booking-details-header">
          <h1>Booking Details</h1>
          <div className="header-space"></div>
        </div>

        {message && <p className="success-msg">{message}</p>}

        {bookings.length === 0 ? (
          <div className="no-booking">
            <h2>ShowTime</h2>
            <p>No booking found.</p>
          </div>
        ) : (
          <>
            {bookings.map((booking, index) => (
              <BookingCard key={index} booking={booking} />
            ))}

            <div className="clear-btn-box">
              <button className="clear-btn" onClick={handleClearBookings}>
                Clear All Bookings
              </button>
            </div>
          </>
        )}

      </div>
    </>
  );
}

export default BookingDetails;