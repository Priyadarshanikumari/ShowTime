import React from "react";
import { Link } from "react-router-dom";

function BookingPanel({
  open,
  booking,
  panelRef,
  setOpen,
  clearBooking,
}) {
  if (!open) return null;

  return (
    <div className="booking-panel" ref={panelRef}>
      {booking ? (
        <>
          <h4>{booking.title}</h4>

          <p>
            <strong>Date :</strong> {booking.date}
          </p>

          <p>
            <strong>Time :</strong> {booking.time}
          </p>

          <p>
            <strong>Seats :</strong>{" "}
            {booking.seats?.length
              ? booking.seats.join(", ")
              : "N/A"}
          </p>

          <p>
            <strong>Tickets :</strong> {booking.tickets}
          </p>

          <p>
            <strong>Total :</strong> ₹
            {booking.finalAmount || booking.total}
          </p>

          <div className="booking-btns">
            <Link to="/booking-details" onClick={() => setOpen(false)}><button className="signin-btn">View Booking</button></Link>
            <button className="signin-btn" onClick={clearBooking}>Clear</button>
          </div>
        </>
      ) : (
        <p>No recent bookings</p>
      )}
    </div>
  );
}

export default BookingPanel;