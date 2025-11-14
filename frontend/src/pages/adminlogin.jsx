import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/adminlogin.css";

function AdminLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let localError = { username: "", password: "" };

    if (!data.username) {
      localError.username = "Username is required";
    }
    if (!data.password) {
      localError.password = "Password is required";
    }

    setError(localError);

    if (!localError.username && !localError.password) {
      if (data.username === "admin@admin.com" && data.password === "admin") {
        alert("Login Successful!");
        navigate("/adminhomepage");
      } else {
        alert("Invalid Username or Password");
      }
    }
  };

  return (
    <div className="admin-login-page">
      <form className="admin-login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={data.username}
          onChange={handleChange}
        />
        <p className="error-text">{error.username}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={handleChange}
        />
        <p className="error-text">{error.password}</p>

        <button type="submit" className="login-btn">Login</button>

        {/* ✅ Back to Home Button */}
        <button
          type="button"
          className="back-btn"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
