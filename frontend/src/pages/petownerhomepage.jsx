import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/petownerhomepage.css";

function PetOwnerHomepage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("TOKEN");
    navigate("/login");
  };

  return (
    <div className="homepage-container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616408.png"
            alt="PetConnect Logo"
          />
          <h2>PetConnect</h2>
        </div>

        <ul className="nav-links">
          <li onClick={() => navigate("/petownerhomepage")}>Home</li>
          <li onClick={() => navigate("/managepets")}>Manage Pets</li>
          <li onClick={() => navigate("/findpet")}>Find Pet</li>
          <li onClick={() => navigate("/lostfoundreports")}>Lost/Found Reports</li>
          <li onClick={() => navigate("/petownerprofile")}>Profile</li>
        </ul>

        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h4>YOUR ONE-STEP</h4>
          <h1>
            Platform for Pet <span>Adoption & Rescue!</span>
          </h1>
          <p>
            Whether you're looking to adopt, foster, or reunite a lost pet,
            PetConnect makes the process seamless and efficient.
          </p>
        </div>

        <div className="hero-image">
          <img
            src="https://media.istockphoto.com/id/1276788283/photo/young-woman-with-laughing-corgi-puppy-nature-background.jpg?s=612x612&w=0&k=20&c=nOiBnVA13BupVn0t7o5fCytV5ZROgNgSWkQas3IuHIw="
            alt="Pet Owner with Pets"
          />
        </div>
      </section>
    </div>
  );
}

export default PetOwnerHomepage;
