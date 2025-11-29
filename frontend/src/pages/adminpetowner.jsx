import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/adminpetowner.css";

function AdminPetOwner() {
const [details, setDetails] = useState([])
    async function petownerData() {
        const response = await instance.get("/admin/petownerview")
        setDetails(response.data.petowner)
    }
    useEffect(() => {
        petownerData()
    }, [])

  return (
    <div className="admin-owner-container">
      <h2>Registered Pet Owners</h2>

      <table className="owners-table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Name</th>
            <th>Email (Username)</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Aadhar</th>
          </tr>
        </thead>

        <tbody>
          {details.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={"http://localhost:8080/uploads/"+item.image}
                  alt="Profile"
                  className="owner-img"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.contact}</td>
              <td>{item.address}</td>
              <td>
                {item.adhaar && (
                  <a
                    href={"http://localhost:8080/uploads/"+ item.adhaar}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Aadhaar
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminPetOwner;
