import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios, { AxiosError } from "axios";
import instance from "../utils/apiClient";
import "../styles/adminlogin.css";


function AdminLogin() {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "" })
    const [error, setError] = useState({ username: "", password: "" })
    function change(e) {
        e.preventDefault()
        setData({ ...data, [e.target.name]: e.target.value })
    }
    async function show(e) {
        e.preventDefault()
        let lerror = { username: "", password: "" }
        if (!data.username) {
            lerror.username = "Email is required"
        }
        if (!data.password) {
            lerror.password = "Password is required"
        }
        setError({ ...lerror })
        if (Object.values(lerror).every((item) => {
            return item === ""
        })) {
            try {
                let response = await instance.post("/admin/login", data)
                const token = response.data.token
                localStorage.setItem("TOKEN", token)
                alert("Logged in Successfully")
                window.location.href = ("/adminhomepage")
            }
            catch (e) {
                if (e instanceof AxiosError) {
                    if (e.response?.data) {
                        alert(e.response.data.message)
                    }
                    else {
                        alert(e.message)
                    }
                }
                else {
                    alert("Login Failed")
                    console.log(e)
                }
            }
        }
        else {
            alert("Invalid Credentials")
        }
      }
  

  return (
    <div className="admin-login-page">
      <form className="admin-login-form">
        <h2>Admin Login</h2>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          value={data.username}
          onChange={change}
        />
        <p className="error-text">{error.username}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={data.password}
          onChange={change}
        />
        <p className="error-text">{error.password}</p>

        <button type="submit" className="login-btn" onClick={show}>Login</button>

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
