import React,{useState} from "react";

function GiftCard({ card }){

const [purchased,setPurchased]=useState(false);

const handleBuyGiftCard=()=>{
setPurchased(true);
};

return(

<div className="gift-card">

<div className="gift-price">₹ {card.price}</div>

<h2>{card.title}</h2>

<p>{card.desc}</p>

<p className="gift-validity">Validity : {card.validity}</p>

<button className="gift-btn" onClick={handleBuyGiftCard} disabled={purchased}>
{purchased?"Purchased":"Buy Now"}
</button>

{purchased&&<p className="gift-success">✅ Gift Card Purchased Successfully</p>}

</div>

);

}

export default GiftCard;