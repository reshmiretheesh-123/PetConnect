import React from "react";
import "../styles/adminhomepage.css";
import { Link, useNavigate } from "react-router-dom";
import { FaUserFriends, FaDog, FaHandsHelping, FaFileAlt, FaSignOutAlt } from "react-icons/fa";

function AdminHomePage() {
  const navigate = useNavigate();

  function AdminLogout() {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      localStorage.clear();
      navigate("/");
    }
  }

  const menuCards = [
    {
      title: "Pet Owners",
      icon: <FaUserFriends />,
      path: "/adminpetowner",
    },
    {
      title: "Adopters",
      icon: <FaDog />,
      path: "/adminadopter",
    },
    {
      title: "Fosters",
      icon: <FaHandsHelping />,
      path: "/adminfoster",
    },
    {
      title: "Lost & Found Pets",
      icon: <FaDog />,
      path: "/lostfoundpets",
    },
    {
      title: "Adoption Applications",
      icon: <FaFileAlt />,
      path: "/applicationrequest",
    },
  ];

  return (
    <div className="admin-home">
     
      <div className="topbar">
        <h2>🐾 Admin Dashboard</h2>
        <button onClick={AdminLogout} className="adminlogout-btn">
          <FaSignOutAlt /> Logout
        </button>
      </div>

      <div className="welcome-section">
        <h1>Welcome Admin 👋</h1>
        <p>Manage your platform efficiently with the options below.</p>
      </div>

      {/* Menu Cards */}
      <div className="menu-grid">
        {menuCards.map((item, index) => (
          <Link to={item.path} key={index} className="menu-card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AdminHomePage;


