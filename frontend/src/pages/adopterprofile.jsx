import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/adopterprofile.css";
import instance from "../utils/apiClient";

function AdopterProfile() {
  const [details, setDetails] = useState(null);

  async function fetchAdopterData() {
    try {
      const response = await instance.get("/adopter/profile");
      setDetails(response.data.adopter);
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  }

  useEffect(() => {
    fetchAdopterData();
  }, []);

  return (
    <>
      <div className="adopter-profile-container">
        <div className="profile-card">

          {/* Header */}
          <div className="profile-header">
            <img
              src={"http://localhost:8080/uploads/" + details?.image}
              alt="Profile"
              className="profile-image"
            />

            <h1 className="profile-name">{details?.adoptername || "Loading..."}</h1>
            <p className="profile-role">🐶 Adopter</p>
          </div>

          {/* Details */}
          <div className="profile-details">

            <div className="detail-item">
              <strong>📧 Email:</strong> {details?.username}
            </div>

            <div className="detail-item">
              <strong>🏡 Address:</strong> {details?.address}
            </div>

            <div className="detail-item">
              <strong>📞 Contact:</strong> {details?.contact}
            </div>

            <div className="detail-item">
              <strong>🆔 Aadhaar:</strong> {details?.adhaar}
            </div>
          </div>

          <button className="update-btn">
            <Link to="/adopterupdateprofile">Update Profile</Link>
          </button>

        </div>
      </div>
    </>
  );
}

export default AdopterProfile;
