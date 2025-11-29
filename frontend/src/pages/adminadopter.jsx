import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/adminadopter.css";

function AdminAdopter() {
const [details, setDetails] = useState([])
const [refresh,setRefresh] = useState(false)
    async function adopterData() {
        const response = await instance.get("/admin/adopterview")
        setDetails(response.data.adopter)
    }
    useEffect(() => {
        adopterData()
    }, [refresh])
    async function activate(adopterid) {
      await instance.patch("/admin/activate", { adopterid})
      setRefresh(!refresh)
      alert("Adopter activated successfully")
    }
    async function deactivate(adopterid) {
      await instance.patch("/admin/deactivate", { adopterid})
      setRefresh(!refresh)
      alert("Adopter deactivated successfully")
    }


  return (
    <div className="admin-adopter-container">
      <h2>Registered Adopters</h2>

      <table className="adopters-table">
        <thead>
          <tr>
            <th>Profile</th>
            <th>Adoptername</th>
            <th>Username</th>
            <th>Contact</th>
            <th>Address</th>
            <th>Aadhar</th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {details.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={"http://localhost:8080/uploads/"+item.image}
                  alt="Profile"
                  className="adopter-img"
                />
              </td>
              <td>{item.adoptername}</td>
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
              <td>
                {item.Approved === true?(
                  <span className="status-badge activated">
                    ✔ Activated
                    </span>
                ) : (
                  <button onClick={() => { activate(item._id)}} className='btn btn-primary'>Approve</button>

                )}
              
              </td>
              <td>
                {item.Approved === false ? (
                  <span className="status-badge deactivated">
                    ✖ Deactivated
                    </span>
                ) : (
                  <button onClick={() => { deactivate(item._id)}} className='btn btn-secondary'>Reject</button>
                )}
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminAdopter;
