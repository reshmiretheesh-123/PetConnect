import axios from 'axios';
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import "../styles/petowner.css";
import instance from "../utils/apiClient";

function PetOwnerRegister() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        username: "",
        address: "",
        contact: "",
        password: "",
        cpassword: "",
        adhaar: "",
        image: "",
    });
    const [error, setError] = useState({
        name: "",
        username: "",
        address: "",
        contact: "",
        password: "",
        cpassword: "",
        adhaar: "",
        image: "",
    });
    console.log(data);

    function change(e) {
        e.preventDefault()

        setData({ ...data, [e.target.name]: e.target.value })

    }

    function upload(e) {
        setData({ ...data, [e.target.name]: e.target.files[0] });
    }

    function submit(e) {
        e.preventDefault()
        let localerror = {
            name: "", username: "", address: "", contact: "", password: "", cpassword: "",
            adhaar: "", image: ""
        }

        if (data.name == "") {
            localerror.name = "Name is required"
        }
        else {
            localerror.name = ""
        }
        if (data.username == "") {
            localerror.username = "Email is required"
        }
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.username)) {
            localerror.username = "Invalid Email"
        }
        else {
            localerror.username = ""
        }
        if (data.address == "") {
            localerror.address = "Address is required"
        }
        else {
            localerror.address = ""
        }
        if (data.contact == "") {
            localerror.contact = "Contact number is required"
        }
        else if (data.contact.length < 10 || data.contact.length > 10) {
            localerror.contact = "Contact number should be 10 digits"
        }
        else {
            localerror.contact = ""
        }
        if (data.password == "") {
            localerror.password = "Password is required"
        }
        else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(data.password)) {
            localerror.password = "Atleast 8 characters including 1 uppercase, 1 lowercase, 1 number and 1 special character"
        }
        else {
            localerror.password = ""
        }
        if (data.cpassword == "") {
            localerror.cpassword = "Confirm Password is required"
        }
        else if (data.cpassword != data.password) {
            localerror.cpassword = "Password and Confirm Password should be same"
        }
        else {
            localerror.cpassword = ""
        }
        if (data.adhaar == "") {
            localerror.adhaar = "Adhaar is required"
        }
        else {
            localerror.adhaar = ""
        }
        if (data.image == "") {
            localerror.image = "Profile picture is required"
        }
        else {
            localerror.image = ""
        }

        setError({ ...localerror })
        if (Object.values(localerror).every((item) => item === "")) {
            const formData = new FormData();
            for (let key in data) {
                formData.append(key, data[key]);
            }
            instance.post("/petowner/register", formData, {
            })
                .then((res) => {
                    alert("Registered Successfully");
                    console.log(res.data);
                })
                .catch((err) => {
                    console.error("Error submitting form:", err);
                });
        }
        else {
            alert("Please fill the form to register");
        }
    }
    return (
        <>
            <div className="register-page">
                <form className="petowner-form">
                    <h2>Register as Pet Owner</h2>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        onChange={change}
                    />
                    <p id='error' className="text-danger">{error.name}</p>

                    <label htmlFor="username">Email</label>
                    <input
                        type="email"
                        name="username"
                        placeholder="Enter username"
                        onChange={change}
                    />
                    <p id='error' className="text-danger">{error.username}</p>

                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                        onChange={change}
                    />
                    <p id='error' className="text-danger">{error.address}</p>

                    <label htmlFor="contact">Contact Number</label>
                    <input
                        type="tel"
                        name="contact"
                        placeholder="Enter contact number"
                        onChange={change}
                    />
                    <p id='error' className="text-danger">{error.contact}</p>

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        onChange={change}
                    />
                    <p id='error' className="text-danger">{error.password}</p>

                    <label htmlFor="cpassword">Confirm Password</label>
                    <input
                        type="password"
                        name="cpassword"
                        placeholder="Confirm password"
                        onChange={change}
                    />
                    <p id='error' className="text-danger">{error.cpassword}</p>

                    <label htmlFor="adhaar">Upload Aadhaar Card</label>
                    <input
                        type="file"
                        name="adhaar"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={upload}
                    />
                    <p id='error' className="text-danger">{error.adhaar}</p>

                    <label htmlFor="image">Upload Profile Image</label>
                    <input
                        type="file"
                        name="image"
                        accept=".jpg,.jpeg,.png,.pdf"
                        onChange={upload}
                    />
                    <p id='error' className="text-danger">{error.image}</p>

                    <button onClick={submit} type="submit"><Link to="/login">Register</Link></button>
                    <p>
                        Already registered? <Link to="/login">Go to Login</Link>
                    </p>
                    <Link to="/" className="home-link">
                        ← Back to Home
                    </Link>
                </form>
            </div>
        </>
    );
}

export default PetOwnerRegister;