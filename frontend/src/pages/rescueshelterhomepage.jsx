import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/rescueshelterhomepage.css";

function RescueShelterHomepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    alert("Logged out successfully!");
    navigate("/rescueshelterlogin");
  };

  return (
    <div className="rescueshelter-homepage">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">PetConnect</h2>
        <ul className="nav-links">
          <li><Link to="/rescueshelter/managepets">Manage Pets</Link></li>
          <li><Link to="/rescueshelter/applications">Applications</Link></li>
          <li><Link to="/rescueshelter/lostfound">Lost/Found Reports</Link></li>
          <li><Link to="/rescueshelter/adoptedpets">Adopted Pets</Link></li>
          <li><Link to="/rescueshelter/fosteredpets">Fostered Pets</Link></li>
          <li><Link to="/rescueshelter/profile">Profile</Link></li>
        </ul>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h5>WELCOME BACK</h5>
          <h1>
            Manage Your <br />
            <span>Rescue Shelter Efficiently 🐾</span>
          </h1>
          <p>
            Handle pets, applications, and reports all in one place.
            Make adoption and fostering easier with PetConnect!
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkjmPDiJleNtt3G4nPov94nX26DbqJyZfnLw&s"
            alt="Rescue Shelter"
          />
        </div>
      </section>
    </div>
  );
}

export default RescueShelterHomepage;
