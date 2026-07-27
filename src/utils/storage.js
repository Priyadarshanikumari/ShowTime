// ===========================
// Local Storage Helper
// ===========================

// ===========================
// Current User
// ===========================

export const getCurrentUser = () => {
  return JSON.parse(
    localStorage.getItem("currentUser")
  );
};

export const setCurrentUser = (user) => {
  localStorage.setItem(
    "currentUser",
    JSON.stringify(user)
  );
};

export const removeCurrentUser = () => {
  localStorage.removeItem("currentUser");
};

// ===========================
// Last Booking
// ===========================

export const getLastBooking = () => {
  return JSON.parse(
    localStorage.getItem("lastBooking")
  );
};

export const setLastBooking = (booking) => {
  localStorage.setItem(
    "lastBooking",
    JSON.stringify(booking)
  );
};

export const removeLastBooking = () => {
  localStorage.removeItem("lastBooking");
};

// ===========================
// Booking History
// ===========================

export const getBookingHistory = () => {
  return (
    JSON.parse(
      localStorage.getItem("bookingHistory")
    ) || []
  );
};

export const setBookingHistory = (history) => {
  localStorage.setItem(
    "bookingHistory",
    JSON.stringify(history)
  );
};

// ===========================
// Selected Offer
// ===========================

export const getSelectedOffer = () => {
  return JSON.parse(
    localStorage.getItem("selectedOffer")
  );
};

export const setSelectedOffer = (offer) => {
  localStorage.setItem(
    "selectedOffer",
    JSON.stringify(offer)
  );
};

export const removeSelectedOffer = () => {
  localStorage.removeItem("selectedOffer");
};

// ===========================
// Clear All Booking Data
// ===========================

export const clearBookings = () => {
  localStorage.removeItem("bookingHistory");
  localStorage.removeItem("lastBooking");
  localStorage.removeItem("selectedOffer");
};