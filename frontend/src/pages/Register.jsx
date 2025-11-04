import React from "react";
import "../styles/register.css";
import { FaPaw, FaHome, FaHeart, FaHandsHelping } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <section className="register-page">
      <h1 className="register-title">Join the PetConnect</h1>
      <p className="register-subtitle">
        Choose your role and become a part of our mission to help every pet find a loving home.
      </p>

      <div className="register-container">
        {/* ========== PET OWNER ========== */}
        <div className="register-card">
          <FaPaw className="register-icon" />
          <h2>Register as Pet Owner</h2>
          <p>
            Share your pet’s story, post for adoption, or report a lost pet. Manage all pet details easily.
          </p>
          <button onClick={() => navigate("/register/petowner")}>Register Now</button>
        </div>

        {/* ========== FOSTER ========== */}
        <div className="register-card">
          <FaHome className="register-icon" />
          <h2>Register as Foster</h2>
          <p>
            Open your heart and home temporarily for pets in need until they find their forever family.
          </p>
          <button onClick={() => navigate("/register/foster")}>Register Now</button>
        </div>

        {/* ========== ADOPTER ========== */}
        <div className="register-card">
          <FaHeart className="register-icon" />
          <h2>Register as Adopter</h2>
          <p>
            Find your perfect furry friend and bring unconditional love into your life today.
          </p>
          <button onClick={() => navigate("/register/adopter")}>Register Now</button>
        </div>

        {/* ========== RESCUE / MANAGEMENT ========== */}
        <div className="register-card">
          <FaHandsHelping className="register-icon" />
          <h2>Register as Rescue / Management</h2>
          <p>
            Manage shelter operations, post adoptable pets, and connect with fosters and adopters.
          </p>
          <button onClick={() => navigate("/register/rescue")}>Register Now</button>
        </div>
      </div>
    </section>
  );
}

export default Register;
