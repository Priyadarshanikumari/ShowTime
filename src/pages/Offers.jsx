import React, { useState } from "react";
import offers from "../data/offers";
import OfferCard from "../components/OfferCard";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

function Offers() {

  const [selectedOffer, setSelectedOffer] = useState(
    JSON.parse(localStorage.getItem("selectedOffer"))
  );

  return (
    <>
      <Navbar />

      <h1 className="page-title">Available Offers</h1>

      <div className="offers-container">
        {offers.map((offer) => (
          <OfferCard
            key={offer.id}
            offer={offer}
            selectedOffer={selectedOffer}
            setSelectedOffer={setSelectedOffer}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Offers;