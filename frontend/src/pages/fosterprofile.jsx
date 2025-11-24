import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/fosterprofile.css";
import instance from "../utils/apiClient";

function FosterProfile() {
  const [details, setDetails] = useState(null);

  async function fetchFosterData() {
    try {
      const response = await instance.get("/foster/profile");
      setDetails(response.data.foster);
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  }

  useEffect(() => {
    fetchFosterData();
  }, []);

  return (
    <>
      <div className="foster-profile-container">
        <div className="profile-card">

          {/* Header */}
          <div className="profile-header">
            <img
              src={"http://localhost:8080/uploads/" + details?.image}
              alt="Profile"
              className="profile-image"
            />

            <h1 className="profile-name">{details?.fostername || "Loading..."}</h1>
            <p className="profile-role">🐾 Foster</p>
          </div>

          {/* Details */}
          <div className="profile-details">

            <div className="detail-item">
              <strong>📧 Email:</strong> {details?.emailid}
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
            <Link to="/fosterupdateprofile">Update Profile</Link>
          </button>

        </div>
      </div>
    </>
  );
}

export default FosterProfile;
