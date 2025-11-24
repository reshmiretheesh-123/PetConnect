import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/fosterupdateprofile.css";
import instance from "../utils/apiClient";

function FosterUpdateprofile() {
  const [details, setDetails] = useState({});
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  // Fetch foster details
  async function getDetails() {
    try {
      const response = await instance.get("/foster/profile");
      setDetails(response.data.foster);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  // Input change handler
  function change(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  // File upload handler
  function upload(e) {
    setFile(e.target.files[0]);
  }

  // Update profile
  async function update(e) {
    e.preventDefault();
    try {
      const formData = new FormData();

      Object.keys(details).forEach((key) => {
        formData.append(key, details[key]);
      });

      if (file) {
        formData.append("image", file);
      }

      await instance.put("/foster/updateprofile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Profile Updated Successfully!");
      navigate("/fosterprofile");
    } catch (err) {
      alert("Update Failed");
      console.log(err);
    }
  }

  return (
    <div className="foster-edit-container">
      <div className="edit-card">
        <h2>Edit Foster Profile</h2>

        <form className="edit-form" onSubmit={update}>
          <div className="form-grid">
            <div className="form-group">
              <label>Full Name:</label>
              <input
                type="text"
                name="fostername"
                value={details?.fostername || ""}
                onChange={change}
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="emailid"
                value={details?.emailid || ""}
                onChange={change}
              />
            </div>

            <div className="form-group">
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={details?.address || ""}
                onChange={change}
              />
            </div>

            <div className="form-group">
              <label>Contact:</label>
              <input
                type="number"
                name="contact"
                value={details?.contact || ""}
                onChange={change}
              />
            </div>

            <div className="form-group">
              <label>Aadhaar:</label>
              <input
                type="text"
                name="adhaar"
                value={details?.adhaar || ""}
                onChange={change}
              />
            </div>

            <div className="form-group full-width">
              <label>Profile Picture:</label>
              <input type="file" name="image" onChange={upload} />
            </div>
          </div>

          <button type="submit" className="update-button">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default FosterUpdateprofile;
