// ===========================
// Bill Calculation
// ===========================

function calculateBill(
  pricePerSeat,
  seatCount,
  offer
) {

  const totalAmount =
    pricePerSeat * seatCount;

  let discount = 0;

  // Percentage Discount

  if (offer?.discountValue) {

    discount =
      (totalAmount * offer.discountValue) / 100;

  }

  // Flat Discount

  if (offer?.flatDiscount) {

    discount = offer.flatDiscount;

  }

  const finalAmount =
    totalAmount - discount;

  return {

    totalAmount,

    discount,

    finalAmount,

  };

}

export default calculateBill;