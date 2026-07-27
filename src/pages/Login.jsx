import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import SignupNavbar from "../components/SignupNavbar";

function Login() {

  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState(location.state?.message || "");
  const [error, setError] = useState("");

  const login = (e) => {

    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {

      localStorage.setItem("currentUser", JSON.stringify(user));

      setError("");
      setMessage("✅ Login Successful");

      setTimeout(() => {
        navigate("/home");
      }, 1200);

    } else {

      setMessage("");
      setError("❌ Invalid Email or Password");

    }

  };

  return (
    <>
      <SignupNavbar />

      <div className="auth-container">

        <h1>Login</h1>

        {message && <p className="success-msg">{message}</p>}

        {error && <p className="error-msg">{error}</p>}

        <form onSubmit={login}>
          <input type="email" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
          <button type="submit">Login</button>
        </form>

        <p>New User? <Link to="/">Signup</Link></p>

      </div>
    </>
  );

}

export default Login;