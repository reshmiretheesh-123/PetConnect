import React, { useState } from "react";
import "../styles/adopterlogin.css";
import instance from "../utils/apiClient";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";

function AdopterLogin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Login details:", formData);

    try {
      const response = await instance.post("/adopter/login", formData);
      const token = response.data.token;
      localStorage.setItem("TOKEN", token);
      alert("Login Successful");
      navigate("/adopterhomepage");
    } catch (e) {
      if (e instanceof AxiosError) {
        if (e.response?.data?.message) {
          alert(e.response.data.message);
        } else {
          alert(e.message);
        }
      } else {
        alert("Login Failed");
        console.log(e);
      }
    }
  };

  return (
    <section className="adopter-login-page">
      <div className="adopter-login-container">
        <div className="adopter-login-header">
          <FaHeart className="heart-icon" />
          <h2>
            Welcome Back, <span>Adopter</span>
          </h2>
          <p>Login to continue your pet adoption journey</p>
        </div>

        <form className="adopter-login-form">
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              name="username"
              placeholder="Username or Email"
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

          <button type="submit" onClick={handleSubmit} className="adopter-login-btn">
            Login
          </button>

          <p className="register-link">
            Don’t have an account?{" "}
            <Link to="/register/adopterregister">Register here</Link>
          </p>

          <Link to="/" className="home-link">← Back to Home</Link>
        </form>
      </div>
    </section>
  );
}

export default AdopterLogin;
