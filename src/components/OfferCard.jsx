import React, { useState } from "react";
import { setSelectedOffer as saveOffer } from "../utils/storage";

function OfferCard({ offer, selectedOffer, setSelectedOffer }) {

  const [message, setMessage] = useState("");

  const applied = selectedOffer?.id === offer.id;

  const handleApplyOffer = () => {

    saveOffer(offer);          // LocalStorage me save
    setSelectedOffer(offer);   // React State update

    setMessage("✅ Offer Applied Successfully");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  return (

    <div className="offer-card">

      <div className="offer-badge">🔥 {offer.discount}</div>

      <h2>{offer.title}</h2>

      <p>{offer.desc}</p>

      <div className="coupon-box">
        <p>Coupon Code</p>
        <h3>{offer.code}</h3>
      </div>

      <button className="offer-btn" onClick={handleApplyOffer} disabled={applied}>
        {applied ? "Applied" : "Apply Offer"}
      </button>

      {message && <p className="success-msg">{message}</p>}

    </div>

  );
}

export default OfferCard;