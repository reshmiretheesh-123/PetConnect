import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/fosterregister.css";
import instance from "../utils/apiClient";

function FosterRegister() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    fostername: "",
    emailid: "",
    address: "",
    contact: "",
    password: "",
    cpassword: "",
    adhaar: "",
    image: "",
  });

  const [error, setError] = useState({
    fostername: "",
    emailid: "",
    address: "",
    contact: "",
    password: "",
    cpassword: "",
    adhaar: "",
    image: "",
  });

  // Handle text input change
  function change(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  // Handle file uploads
  function upload(e) {
    setData({ ...data, [e.target.name]: e.target.files[0] });
  }

  // Form submit
  async function submit(e) {
    e.preventDefault();
    let localerror = {
      fostername: "",
      emailid: "",
      address: "",
      contact: "",
      password: "",
      cpassword: "",
      adhaar: "",
      image: "",
    };

    if (data.fostername === "") localerror.fostername = "Name is required";
    if (data.emailid === "")
      localerror.emailid = "Email is required";
    else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.emailid))
      localerror.emailid = "Invalid Email";

    if (data.address === "") localerror.address = "Address is required";

    if (data.contact === "") localerror.contact = "Contact number is required";
    else if (data.contact.length !== 10)
      localerror.contact = "Contact number should be 10 digits";

    if (data.password === "") localerror.password = "Password is required";
    else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        data.password
      )
    )
      localerror.password =
        "At least 8 characters with 1 uppercase, 1 lowercase, 1 number, and 1 special character";

    if (data.cpassword === "")
      localerror.cpassword = "Confirm Password is required";
    else if (data.cpassword !== data.password)
      localerror.cpassword = "Password and Confirm Password should match";

    if (!data.adhaar) localerror.adhaar = "Aadhaar is required";
    if (!data.image) localerror.image = "Profile picture is required";

    setError(localerror);

    if (Object.values(localerror).every((item) => item === "")) {
      try {
        const formData = new FormData();
        for (let key in data) {
          formData.append(key, data[key]);
        }

        const res = await instance.post("/foster/register", formData);
        alert("Registered Successfully!");
        console.log(res.data);
        navigate("/fosterlogin");
      } catch (err) {
        console.error("Error submitting form:", err);
        alert("Registration failed. Please try again.");
      }
    } else {
      alert("Please fill out all required fields correctly.");
    }
  }

  return (
    <div className="register-page">
      <form className="foster-form" onSubmit={submit}>
        <h2>Register as Foster</h2>

        <label htmlFor="fostername">Full Name</label>
        <input
          type="text"
          name="fostername"
          placeholder="Enter your name"
          onChange={change}
        />
        <p className="text-danger">{error.fostername}</p>

        <label htmlFor="emailid">Email</label>
        <input
          type="email"
          name="emailid"
          placeholder="Enter your email"
          onChange={change}
        />
        <p className="text-danger">{error.emailid}</p>

        <label htmlFor="address">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
          onChange={change}
        />
        <p className="text-danger">{error.address}</p>

        <label htmlFor="contact">Contact Number</label>
        <input
          type="tel"
          name="contact"
          placeholder="Enter contact number"
          onChange={change}
        />
        <p className="text-danger">{error.contact}</p>

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={change}
        />
        <p className="text-danger">{error.password}</p>

        <label htmlFor="cpassword">Confirm Password</label>
        <input
          type="password"
          name="cpassword"
          placeholder="Confirm password"
          onChange={change}
        />
        <p className="text-danger">{error.cpassword}</p>

        <label htmlFor="adhaar">Upload Aadhaar Card</label>
        <input
          type="file"
          name="adhaar"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={upload}
        />
        <p className="text-danger">{error.adhaar}</p>

        <label htmlFor="image">Upload Profile Image</label>
        <input
          type="file"
          name="image"
          accept=".jpg,.jpeg,.png,.pdf"
          onChange={upload}
        />
        <p className="text-danger">{error.image}</p>

        <button type="submit">Register</button>

        <p>
          Already registered? <Link to="/fosterlogin">Go to Login</Link>
        </p>
        <Link to="/" className="home-link">
          ← Back to Home
        </Link>
      </form>
    </div>
  );
}

export default FosterRegister;
