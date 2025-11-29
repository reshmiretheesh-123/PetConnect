import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/rescueshelterlogin.css";
import instance from "../utils/apiClient";

function RescueShelterLogin() {
  // const navigate = useNavigate();
  const [data, setData] = useState({ userid: "", password: "" });
  const [error, setError] = useState({ userid: "", password: "" });

  function change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

 async function show(e) {
        e.preventDefault();
        let lerror = { userid: "", password: "" };
        console.log(data);
        if (data.userid === "") {
            lerror.userid = "Username is required";
        }
        if (data.password === "") {
            lerror.password = "Password is required";
        }
        setError({ ...lerror });
        if (Object.values(lerror).every((item) => item === "")) {
            try {
                let response = await instance.post("/rescueshelter/login", data);
                const token = response.data.token;
                localStorage.setItem("TOKEN", token);
                alert("Logged in Successfully");
                window.location.href=("/rescueshelterhomepage")
            } catch (e) {
                if (e instanceof AxiosError) {
                    if (e.response?.data) {
                        alert(e.response.data.message);
                    } else {
                        alert(e.message);
                    }
                } else {
                    alert("Login Failed");
                    console.log(e);
                }
            }
        } else {
            alert("Invalid Credentials");
        }
    }

  return (
    <div className="rescueshelterlogin-page">
      <form className="rescueshelterlogin-form">
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

        <button onClick={show} type="submit">Login</button>

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
