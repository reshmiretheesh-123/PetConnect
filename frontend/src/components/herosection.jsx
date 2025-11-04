import React from "react";
import "../styles/herosection.css";

function Herosection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to <span>PetConnect</span></h1>
        <p>
          PetConnect is your one-stop platform for pet adoption, fostering, and rescue
          management. We bring together pet lovers, shelters, and adopters to create
          a compassionate community where every pet finds a loving home.
        </p>
        <button className="hero-btn">Get Started</button>
      </div>

      <div className="hero-image">
        <img
          src="https://petconnect.social/wp-content/uploads/2025/03/Petconnect_1200x675.png"
          alt=" "
        />
      </div>
    </section>
  );
}

export default Herosection;
