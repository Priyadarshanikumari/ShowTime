import React from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import GiftCard from "../components/GiftCard";
import giftCards from "../data/giftCards";

function GiftCards() {
  return (
    <div className="page-container">

      <Navbar />

      <main className="page-content">

        <h1 className="page-title">🎁 Gift Cards</h1>

        <div className="giftcards-container">
          {giftCards.map((card) => (
            <GiftCard key={card.id} card={card} />
          ))}
        </div>

      </main>

      <Footer />

    </div>
  );
}

export default GiftCards;