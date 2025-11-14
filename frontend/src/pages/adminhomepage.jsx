import React, { useEffect, useState } from "react";
import "../styles/adminhomepage.css";
import { Link } from "react-router-dom";
import instance from "../utils/apiClient";

function AdminHomePage() {
  const [counts, setCounts] = useState({
    totalUsers: 0,
    totalPets: 0,
    totalAdopters: 0,
    totalApplications: 0,
    totalDocuments: 0,
    totalFosters: 0,
    totalLostFound: 0,
    totalPetOwners: 0,
    totalRescueShelters: 0,
  });

  // Fetch counts from backend
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await instance.get("/admin/getCounts");
        setCounts(response.data);
      } catch (err) {
        console.error("Error fetching counts", err);
      }
    };
    fetchCounts();
  }, []);

  return (
    <div className="admin-container">

      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">🐾 Pet Connect</h2>

        <ul className="menu">
          <li><Link to="/admin/home">Dashboard</Link></li>
          <li><Link to="/admin/petowners">Pet Owners</Link></li>
          <li><Link to="/admin/adopters">Adopters</Link></li>
          <li><Link to="/admin/fosters">Fosters</Link></li>
          <li><Link to="/admin/shelters">Rescue Shelters</Link></li>
          <li><Link to="/admin/petmanagement">Pet Management</Link></li>
          <li><Link to="/admin/contact">Contact Submissions</Link></li>
          <li><Link to="/admin/lostfound">Lost & Found Pets</Link></li>
          <li><Link to="/admin/applications">Adoption Applications</Link></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main">
        <div className="topbar">
          <h3>Dashboard</h3>
          <button className="logout-btn">Logout</button>
        </div>

        {/* Dashboard Cards */}
        <div className="cards">
          <div className="card"> <h4>Total Users</h4> <p>{counts.totalUsers}</p> </div>
          <div className="card"> <h4>Total Pets</h4> <p>{counts.totalPets}</p> </div>
          <div className="card"> <h4>Total Adopters</h4> <p>{counts.totalAdopters}</p> </div>
          <div className="card"> <h4>Total Applications</h4> <p>{counts.totalApplications}</p> </div>
          <div className="card"> <h4>Total Documents</h4> <p>{counts.totalDocuments}</p> </div>
          <div className="card"> <h4>Total Fosters</h4> <p>{counts.totalFosters}</p> </div>
          <div className="card"> <h4>Total Lost/Found Pets</h4> <p>{counts.totalLostFound}</p> </div>
          <div className="card"> <h4>Total Pet Owners</h4> <p>{counts.totalPetOwners}</p> </div>
          <div className="card"> <h4>Total Rescue Shelters</h4> <p>{counts.totalRescueShelters}</p> </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHomePage;
