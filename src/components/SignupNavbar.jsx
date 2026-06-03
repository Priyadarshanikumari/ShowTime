import React from "react";
import { Link } from "react-router-dom";

function SignupNavbar() {
  return (
    <div className="auth-navbar">
      <h2>Show🍿Time</h2>

      <Link to="/login">
        <button>Sign In</button>
      </Link>
    </div>
  );
}

export default SignupNavbar;