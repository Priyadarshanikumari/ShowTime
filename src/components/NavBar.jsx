import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaBars,
  FaUserCircle,
} from "react-icons/fa";

import BookingPanel from "./BookingPanel";
import ProfileMenu from "./ProfileMenu";

function Navbar({
  searchTerm = "",
  setSearchTerm = () => {},
}) {
  const [user, setUser] = useState(null);
  const [booking, setBooking] = useState(null);
  const [open, setOpen] = useState(false);

  const panelRef = useRef(null);

  useEffect(() => {
    const currentUser = JSON.parse(
      localStorage.getItem("currentUser")
    );

    if (currentUser) {
      setUser(currentUser);
    }

    const lastBooking = JSON.parse(
      localStorage.getItem("lastBooking")
    );

    if (lastBooking) {
      setBooking(lastBooking);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => {
      setOpen(false);
    }, 30000);

    return () => clearTimeout(timer);
  }, [open]);

  const clearBooking = () => {

  localStorage.removeItem("lastBooking");
  localStorage.removeItem("bookingHistory");
  localStorage.removeItem("selectedOffer");

  setBooking(null);
  setOpen(false);

  window.dispatchEvent(new Event("bookingCleared"));
};

  return (
    <>
      {/* ---------- Top Navbar ---------- */}

      <div className="navbar-top">

        <div className="logo">
          <h2>Show🍿Time</h2>
        </div>

        <div className="search-box">
          <FaSearch />
          <input type="text" placeholder="Search for Movies, Events, Plays, Sports and Activities" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>

        <div className="right-menu">

          <select>
            <option>Noida</option>
            <option>Delhi</option>
            <option>Gurgaon</option>
          </select>

          {user ? (<><div className="profile-user"><FaUserCircle size={28} /><span>{user.name}</span></div><ProfileMenu /></>) : (<Link to="/login"><button className="signin-btn">Sign In</button></Link>)}

        </div>

      </div>

      {/* ---------- Bottom Navbar ---------- */}

      <div className="navbar-bottom">

        <div className="left-links">
          <Link to="/home">Movies</Link>
        </div>

        <div className="right-links">

          <Link to="/offers">Offers</Link>
          <Link to="/giftcards">Gift Cards</Link>
          <button className="booking-btn" onClick={() => setOpen(!open)}>Booking Details</button>
          <BookingPanel open={open} booking={booking} panelRef={panelRef} clearBooking={clearBooking} setOpen={setOpen} />

        </div>

      </div>
    </>
  );
}

export default Navbar;