import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import SignupNavbar from "../components/SignupNavbar";
function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (
      user &&
      user.email === email &&
      user.password === password
    ) {
      alert("Login Successful");
      navigate("/home");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <>
      <SignupNavbar />
    <div className="auth-container">
      <h1>Login</h1>

      <form onSubmit={login}>
        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button type="submit">
          Login
        </button>
      </form>

      <p>
        New User?
        <Link to="/"> Signup</Link>
      </p>
    </div>
    </>
  );
}

export default Login;