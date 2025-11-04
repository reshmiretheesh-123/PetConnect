import React, { useState } from "react";
import "../styles/login.css";
import { FaUser, FaLock, FaPaw } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login details:", formData);
    // You can add login logic or API call here
  };

  return (
    <section className="login-page">
      <div className="login-container">
        <div className="login-header">
          <FaPaw className="paw-icon" />
          <h2>Welcome to <span>PetConnect</span></h2>
          <p>Login to continue your journey with our pet community</p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="input-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>

          <p className="register-link">
            Don’t have an account?{" "}
            <Link to="/register">Register here</Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;
