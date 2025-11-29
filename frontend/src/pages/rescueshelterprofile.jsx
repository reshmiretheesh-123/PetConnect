import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/rescueshelterprofile.css";
import instance from "../utils/apiClient";

function RescueShelterProfile() {
  const [details, setDetails] = useState();

  async function fetchRescueData() {
    try {
      const response = await instance.get("/rescueshelter/profile");
      setDetails(response.data.rescueshelter);
    } catch (err) {
      console.error("Error fetching rescue shelter profile:", err);
    }
  }

  useEffect(() => {
    fetchRescueData();
  }, []);

  return (
    <>
      <div className="rescueshelter-profile-container">
        <div className="profile-card">

          {/* Header */}
          <div className="profile-header">
            <img
              src={"http://localhost:8080/uploads/" + details?.image}
              alt="Profile"
              className="profile-image"
            />
            <h1 className="profile-name">{details?.name || "Loading..."}</h1>
            <p className="profile-role">🐶 Rescue Shelter</p>
          </div>

          {/* Details Section */}
          <div className="profile-details">

            <div className="detail-item">
              <strong>📧 Email:</strong> {details?.userid}
            </div>

            <div className="detail-item">
              <strong>🏥 Address:</strong> {details?.address}
            </div>

            <div className="detail-item">
              <strong>📞 Contact:</strong> {details?.contact}
            </div>

            <div className="detail-item">
              <strong>🆔 Aadhaar:</strong> {details?.adhaar}
            </div>

          </div>

          {/* Update Button */}
          <button className="update-btn">
            <Link to="/rescueshelterupdateprofile">Update Profile</Link>
          </button>

        </div>
      </div>
    </>
  );
}

export default RescueShelterProfile;
