import React from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

function Navbar() {
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
          <a href="#">Stream</a>
          <a href="#">Events</a>
          <a href="#">Plays</a>
          <a href="#">Sports</a>
          <a href="#">Activities</a>
        </div>

        <div className="right-links">
          <a href="#">ListYourShow</a>
          <a href="#">Corporates</a>
          <a href="#">Offers</a>
          <a href="#">Gift Cards</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;