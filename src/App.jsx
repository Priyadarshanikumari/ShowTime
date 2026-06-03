import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";

function App() {
  
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Signup />} />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/movie/:id"
          element={<MovieDetails />}
        />

        <Route
          path="/booking/:id"
          element={<Booking />}
        />
      </Routes>
    </>
  );
}

export default App;