import React from "react";
import { Link } from "react-router-dom";
import "../styles/fosterhomepage.css";

function FosterHomepage() {
  const foster = JSON.parse(localStorage.getItem("foster"));
  const fosterName = foster ? `Welcome back, ${foster.name}!` : "Welcome back, Foster!";

  return (
    <div className="foster-homepage">
      <div className="sidebar">
        <h2>Foster Panel</h2>
        <ul>
          <li><Link to="/fosterpets">Foster Pets</Link></li>
          <li><Link to="/applicationstatus">Application Status</Link></li>
          <li><Link to="/assignedpets">Assigned Pets</Link></li>
          <li><Link to="/fosterprofile">Profile</Link></li>
          <li><Link to="/fosterlogin">Logout</Link></li>
        </ul>
      </div>

      <div className="main-content">
        <h1>{fosterName}</h1>
        <p>Manage your foster pets, track applications, and view assigned pets easily.</p>
      </div>
    </div>
  );
}

export default FosterHomepage;
