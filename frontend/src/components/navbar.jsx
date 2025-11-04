import React, { useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router";
function Navbar() {
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">🐾 PetConnect</div>
        <ul className="nav-links">
          <li>Home</li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          {/* Register Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setRegisterOpen(true)}
            onMouseLeave={() => setRegisterOpen(false)}
          >
            Register ▾
            {registerOpen && (
              <ul className="dropdown-menu">
                <Link><li>Pet Owner </li></Link>
                <li>Foster</li>
                <li>Adopter</li>
                <li>Rescue/Management</li>
              </ul>
            )}
          </li>

          {/* Login Dropdown */}
          <li
            className="dropdown"
            onMouseEnter={() => setLoginOpen(true)}
            onMouseLeave={() => setLoginOpen(false)}
          ><Link to="/login">Login</Link>
            Login ▾
            {loginOpen && (
              <ul className="dropdown-menu">
                <li>Pet Owner </li>
                <li>Foster </li>
                <li>Adopter </li>
                <li>Rescue/Management </li>
                <li>Admin Login</li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
