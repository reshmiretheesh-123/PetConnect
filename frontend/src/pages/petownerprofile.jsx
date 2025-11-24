import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
import "../styles/petownerprofile.css";
import instance from "../utils/apiClient";
import PetOwnerHomepage from "./petownerhomepage";

function PetOwnerProfile() {
  const [details, setDetails] = useState(null);

  async function fetchOwnerData() {
    try {
      const response = await instance.get("/petowner/profile");
      setDetails(response.data.petowner);
    } catch (err) {
      console.error("Error fetching profile:", err);
    }
  }

  useEffect(() => {
    fetchOwnerData();
  }, []);

  return (
    <>
      {/* <PetOwnerHomepage /> */}

      <div className="petowner-profile-container">
        <div className="profile-card">

          {/* Header */}
          <div className="profile-header">
            <img 
              src={"http://localhost:8080/uploads/" + details?.image}
              alt="Profile"
              className="profile-image"
            />

            <h1 className="profile-name">{details?.name || "Loading..."}</h1>
            <p className="profile-role">🐾 Pet Owner</p>
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
            <Link to="/petownerupdateprofile">Update Profile</Link>
          </button>

        </div>
      </div>
    </>
  );
}

export default PetOwnerProfile;
