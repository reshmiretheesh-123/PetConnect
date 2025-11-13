import React from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";
  
function Register() {
  return (
    <section className="register-selection">
      <div className="register-header">
        <h1>Register with <span>PetConnect</span></h1>
        <p>Select your role to create your account</p>
      </div>

      <div className="register-options">
        <Link to="/register/petowner" className="register-card">
          <h3>Register as Pet Owner</h3>
          <p>List your pets for adoption and connect with caring adopters.</p>
        </Link>

        <Link to="/register/adopterregister" className="register-card">
          <h3>Register as Adopter</h3>
          <p>Find your perfect pet companion and give them a loving home.</p>
        </Link>

        <Link to="/register/foster" className="register-card">
          <h3>Register as Foster</h3>
          <p>Provide temporary care and love to pets waiting for adoption.</p>
        </Link>

        <Link to="/register/rescueshelter" className="register-card">
          <h3>Register as Rescue/Shelter</h3>
          <p>Manage adoptions and connect with pet lovers in your community.</p>
        </Link>
      </div>

      <div className="back-home">
        <Link to="/">← Back to Home</Link>
      </div>
    </section>
  );
}

export default Register;
