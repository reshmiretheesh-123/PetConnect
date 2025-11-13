import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/adopterhomepage.css";

function AdopterHomepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    alert("Logged out successfully!");
    navigate("/adopterlogin");
  };

  return (
    <div className="adopter-homepage">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">PetConnect</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/adoptpets">Adopt Pets</Link></li>
          <li><Link to="/applicationstatus">Application Status</Link></li>
          <li><Link to="/adoptedpets">Adopted Pets</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h5>YOUR ONE-STEP</h5>
          <h1>
            Platform for Pet <br />
            <span>Adoption & Rescue!</span>
          </h1>
          <p>
            Whether you're looking to adopt, foster, or reunite a lost pet,
            PetConnect makes the process seamless and efficient.
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://shelterplus.adoptapet.com/cdn/shop/files/Stocksy_txpe0eaaa5eVNf300_Medium_5028785_11dabcba-d0a8-47f2-b20f-8df4b3f6b40b.png?v=1741127180&width=1500"
            alt="Pet Adoption"
          />
        </div>
      </section>
    </div>
  );
}

export default AdopterHomepage;
 