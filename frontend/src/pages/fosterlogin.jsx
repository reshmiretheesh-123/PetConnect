import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/fosterlogin.css";
import instance from "../utils/apiClient";

function FosterLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    emailid: "",
    password: "",
  });
  const [error, setError] = useState({
    emailid: "",
    password: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let localError = { emailid: "", password: "" };

    if (!data.emailid) {
      localError.emailid = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.emailid)) {
      localError.emailid = "Invalid email format";
    }

    if (!data.password) {
      localError.password = "Password is required";
    }

    setError(localError);

    if (Object.values(localError).every((item) => item === "")) {
      try {
        // <<-- Minimal fix: call the backend login route that matches:
        // mounted route: app.use("/foster", fosterController)
        // controller: router.post("/login", ...)
        // final path: /foster/login
        const res = await instance.post("/foster/login", data);

        alert("Login Successful!");

        // store returned data (adjust keys if your backend uses different names)
        if (res.data?.foster) {
          localStorage.setItem("foster", JSON.stringify(res.data.foster));
        } else if (res.data?.user) {
          // fallback if backend returns user instead of foster
          localStorage.setItem("foster", JSON.stringify(res.data.user));
        } else {
          // if backend returns the object directly
          localStorage.setItem("foster", JSON.stringify(res.data));
        }

        if (res.data?.token) {
          localStorage.setItem("TOKEN", res.data.token);
        }

        navigate("/fosterhomepage");
      } catch (err) {
        alert("Invalid Email or Password");
        console.error(err);
      }
    }
  };

  return (
    <div className="foster-login-page">
      <form className="foster-login-form" onSubmit={handleSubmit}>
        <h2>Foster Login</h2>

        <label htmlFor="emailid">Email</label>
        <input
          type="email"
          name="emailid"
          placeholder="Enter your email"
          onChange={handleChange}
        />
        <p className="text-danger">{error.emailid}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={handleChange}
        />
        <p className="text-danger">{error.password}</p>

        <button type="submit">Login</button>

        <p>
          Don’t have an account?{" "}
          <Link to="/register/foster">Register here</Link>
        </p>
        <Link to="/" className="home-link">
          ← Back to Home
        </Link>
      </form>
    </div>
  );
}

export default FosterLogin;
