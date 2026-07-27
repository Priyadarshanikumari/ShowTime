import React from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Booking from "./pages/Booking";
import BookingDetails from "./pages/BookingDetails";
import Offers from "./pages/Offers";
import GiftCards from "./pages/GiftCards";
import AIChatbot from "./components/AIChatbot";


function App() {
  const location = useLocation();
  const hideChatbot =
    location.pathname === "/" ||
    location.pathname === "/login";

  return (
    <>

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/booking-details" element={<BookingDetails />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/giftcards" element={<GiftCards />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
       {!hideChatbot && <AIChatbot />}
    </>
  );
}

export default App;