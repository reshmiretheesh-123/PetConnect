import React from "react";
import { Link } from "react-router-dom";
import "../styles/fosterhomepage.css";

function FosterHomepage() {
  const foster = JSON.parse(localStorage.getItem("foster"));
  const fosterName = foster ? foster.name : "Foster";

  return (
    <div className="foster-homepage">
      
      {/* SIDEBAR */}
      <div className="sidebar">
        <h2 className="sidebar-title">Foster Panel</h2>
        
        <ul className="sidebar-menu">
          <li><Link to="/fosterpets" className="sidebar-item">Foster Pets</Link></li>
          <li><Link to="/applicationstatus" className="sidebar-item">Application Status</Link></li>
          <li><Link to="/assignedpets" className="sidebar-item">Assigned Pets</Link></li>
          <li><Link to="/viewfosterpets" className="sidebar-item">View Foster Pets</Link></li>
          <li><Link to="/fostereditprofile" className="sidebar-item">Edit Profile</Link></li>
          <li><Link to="/fosterprofile" className="sidebar-item">Profile</Link></li>

          <li><button className="logout-btn" onClick={() => {
            localStorage.removeItem("foster");
            window.location.href = "/fosterlogin";
          }}>Logout</button></li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="main-content">
        <div className="content-box">
          <h1>Welcome back, {fosterName}!</h1>
          <p>Manage your foster pets, track applications, and view assigned pets easily.</p>

          <div className="home-buttons">
            <Link to="/viewfosterpets" className="btn filled">View Foster Pets</Link>
            <Link to="/fostereditprofile" className="btn outline">Edit Profile</Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FosterHomepage;
