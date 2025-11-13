import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/rescueshelterlogin.css";
import instance from "../utils/apiClient";

function RescueShelterLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({ userid: "", password: "" });
  const [error, setError] = useState({ userid: "", password: "" });

  function change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  async function submit(e) {
    e.preventDefault();
    let localError = { userid: "", password: "" };

    // Validation
    if (data.userid === "") {
      localError.userid = "Email is required";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.userid)) {
      localError.userid = "Invalid email format";
    }

    if (data.password === "") {
      localError.password = "Password is required";
    }

    setError(localError);

    if (Object.values(localError).every((v) => v === "")) {
      try {
        const response = await instance.post("/rescueshelter/login", data);
        alert("Login Successful");
        navigate("/rescueshelterhomepage"); // redirect after login
      } catch (err) {
        console.error(err);
        alert(err.response?.data?.message || "Invalid credentials");
      }
    } else {
      alert("Please fill in the required fields");
    }
  }

  return (
    <div className="rescueshelterlogin-page">
      <form className="rescueshelterlogin-form" onSubmit={submit}>
        <h2>Rescue/Shelter Login</h2>

        <label htmlFor="userid">Email</label>
        <input
          type="email"
          name="userid"
          placeholder="Enter your email"
          onChange={change}
        />
        <p className="text-danger">{error.userid}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          onChange={change}
        />
        <p className="text-danger">{error.password}</p>

        <button type="submit">Login</button>

        <p>
          Don’t have an account?{" "}
          <Link to="/register/rescueshelter">Register here</Link>
        </p>

        <Link to="/" className="home-link">
          ← Back to Home
        </Link>
      </form>
    </div>
  );
}

export default RescueShelterLogin;
