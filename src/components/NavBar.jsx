import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

function Navbar() {
  const [booking, setBooking] = useState(null)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      const raw = localStorage.getItem('lastBooking')
      if (raw) setBooking(JSON.parse(raw))
    } catch (e) {
      console.warn('Failed to read booking from storage', e)
    }
  }, [])

  const handleToggle = () => {
    setOpen((v) => !v)
  }

  const clearBooking = () => {
    localStorage.removeItem('lastBooking')
    setBooking(null)
    setOpen(false)
  }
  return (
    <>
      <div className="navbar-top">
        <div className="logo">
          <h2>Show🍿Time</h2>
        </div>

        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Search for Movies, Events, Plays, Sports and Activities"
          />
        </div>

        <div className="right-menu">
          <select>
            <option>Noida</option>
            <option>Delhi</option>
            <option>Gurgaon</option>
          </select>

          <Link to="/login">
            <button className="signin-btn">Sign In</button>
          </Link>

          <FaBars className="menu-icon" />
        </div>
      </div>

      <div className="navbar-bottom">
        <div className="left-links">
          <a href="#">Movies</a>

        </div>

        <div className="right-links">
          <a href="#">Offers</a>
          <a href="#">Gift Cards</a>
          <button onClick={handleToggle} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}>Booking Details</button>
          {open && (
            <div className="booking-panel">
              {booking ? (
                <div>
                  <h4>{booking.title}</h4>
                  <p><strong>Date:</strong> {booking.date} <strong>Time:</strong> {booking.time}</p>
                  <p><strong>Seats:</strong> {booking.seats?.length ? booking.seats.join(', ') : 'N/A'}</p>
                  <p><strong>Tickets:</strong> {booking.tickets} • <strong>Total:</strong> ₹{booking.total}</p>
                  <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                    <Link to={`/booking-details`} onClick={() => setOpen(false)}>
                      <button className="signin-btn">View Booking</button>
                    </Link>
                    <button className="signin-btn" onClick={clearBooking}>Clear</button>
                  </div>
                </div>
              ) : (
                <div>
                  <p>No recent bookings</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;