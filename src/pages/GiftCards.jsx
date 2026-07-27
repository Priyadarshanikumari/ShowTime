import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import GiftCard from "../components/GiftCard";
import giftCards from "../data/giftCards";

function GiftCards() {
  return (
    <div className="container">
      <Navbar />

      <h1 className="page-title">🎁 Gift Cards</h1>

      <div className="giftcards-container">
        {giftCards.map((gift) => <GiftCard key={gift.id} gift={gift} />)}
      </div>

      <Footer />
    </div>
  );
}

export default GiftCards;