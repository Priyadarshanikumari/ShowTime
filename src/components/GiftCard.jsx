import React, { useState } from "react";

function GiftCard({ gift }) {

  const [purchased, setPurchased] = useState(false);

  const handleBuyGiftCard = () => {

    setPurchased(true);

    alert("🎉 Gift Card Purchased Successfully");

  };

  return (

    <div className="gift-card">
      <div className="gift-price"> ₹ {gift.price} </div>

      <h2>{gift.title}</h2>
      <p>{gift.desc}</p>
      <p className="gift-validity"> Validity : {gift.validity}</p>
      <button className="gift-btn" onClick={handleBuyGiftCard} disabled={purchased} >
        {purchased ? "Purchased" : "Buy Now"} </button>
      {purchased && (
        <p className="gift-success"> ✅ Gift Card Purchased Successfully </p>
      )}
    </div>

  );

}

export default GiftCard;