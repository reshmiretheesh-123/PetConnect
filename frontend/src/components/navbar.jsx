import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">🐾 PetConnect</div>

        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-item">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-item">Contact</Link>
          </li>

          {/* Register Button */}
          <li>
            <Link to="/register" className="btn-register">Register</Link>
          </li>

          {/* Login Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
          >
            <button className="btn-login">Login ▾</button>
            {loginOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/login/petowner">Pet Owner</Link></li>
                <li><Link to="/login/adopter">Adopter</Link></li>
                <li><Link to="/login/foster">Foster</Link></li>
                <li><Link to="/login/rescue">Rescue/Shelter</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
