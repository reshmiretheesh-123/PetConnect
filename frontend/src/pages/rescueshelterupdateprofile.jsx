import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/rescueshelterupdateprofile.css";
import instance from "../utils/apiClient";


function RescueShelterUpdateprofile() {
  const [details, setDetails] = useState({});
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  async function getDetails() {
    try {
      const response = await instance.get("/rescueshelter/profile");
      setDetails(response.data.rescueshelter);
    } catch (err) {
      console.log("Error:", err);
    }
  }

  useEffect(() => {
    getDetails();
  }, []);

  function change(e) {
    setDetails({ ...details, [e.target.name]: e.target.value });
  }

  function upload(e) {
    setFile(e.target.files[0]);
  }

  async function update(e) {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(details).forEach((key) =>
        formData.append(key, details[key])
      );
      if (file) formData.append("image", file);

      await instance.put("/rescueshelter/updateprofile", formData);
      alert("Profile Updated Successfully!");
      navigate("/rescueshelterprofile");

    } catch (err) {
      alert("Update Failed");
      console.log(err);
    }
  }

  return (
    <>


      <div className="rescueshelter-edit-container">
        <div className="edit-card">
          <h2>Edit Profile</h2>

          <form className="edit-form" onSubmit={update}>

            <div className="form-grid">

              <div className="form-group">
                <label>Full Name:</label>
                <input
                  type="text"
                  name="name"
                  value={details?.name || ""}
                  onChange={change}
                />
              </div>

              <div className="form-group">
                <label>Email (Userid):</label>
                <input
                  type="email"
                  name="userid"
                  value={details?.userid || ""}
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
    </>
  );
}

export default RescueShelterUpdateprofile;
