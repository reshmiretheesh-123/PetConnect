import { useNavigate } from "react-router";
import "../styles/petownerhomepage.css";

function PetOwnerHome() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("petownerToken");
    navigate("/petowner/login");
  };

  return (
    <div className="petowner-home">
      {/* Hero Section */}
      <div className="hero-section">
        <img
          src="/images/petowner-hero.jpg"
          alt="Happy pets"
          className="hero-image"
        />
        <h1>Welcome to PetConnect</h1>
        <p>Connecting pet lovers and helping you care for your furry friends!</p>
      </div>

      {/* Buttons Section */}
      <div className="button-grid">
        <button onClick={() => navigate("/petowner/managepets")}>Manage Pets</button>
        <button onClick={() => navigate("/petowner/findpet")}>Find Pet</button>
        <button onClick={() => navigate("/petowner/reports")}>Lost/Found Reports</button>
        <button onClick={() => navigate("/petowner/profile")}>Profile</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default PetOwnerHome;
