import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/adminfoster.css";

function AdminFoster() {
const [details, setDetails] = useState([])
    async function fosterData() {
        const response = await instance.get("/admin/fosterview")
        setDetails(response.data.foster)
    }
    useEffect(() => {
        fosterData()
    }, [])

  return (
    <div className="admin-foster-container">
      <h2>Registered Fosters</h2>

      <table className="fosters-table">
        <thead>
          <tr>
            <th>Profilepic</th>
            <th>Fostername</th>
            <th>Emailid</th>
            <th>Address</th>
            <th>Contact</th>
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
                  className="foster-img"
                />
              </td>
              <td>{item.fostername}</td>
              <td>{item.emailid}</td>
              <td>{item.address}</td>
              <td>{item.contact}</td>
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

export default AdminFoster;
