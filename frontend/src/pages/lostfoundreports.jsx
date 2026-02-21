import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/lostfoundreports.css";

function Lostfoundpets() {
const [details, setDetails] = useState([])
    async function petownerData() {
        const response = await instance.get("/admin/lostfound")
        setDetails(response.data.findpet)
    }
    useEffect(() => {
        petownerData()
    }, [])

  return (
    <div className="lostfound-container">
      <h2>Lostpets</h2>

      <table className="lostpets-table">
        <thead>
          <tr>
            <th>Pet Picture</th>
            <th>Pet Name</th>
            <th>Species</th>
            <th>Breed</th>
            <th>Health Status</th>
            <th>Lost Date</th>
          </tr>
        </thead>

        <tbody>
          {details.map((item) => (
            <tr key={item._id}>
              <td>
                <img
                  src={"http://localhost:8080/uploads/"+item.petpicture}
                  alt="Profile"
                  className="lostpets-img"
                />
              </td>
              <td>{item.petname}</td>
              <td>{item.species}</td>
              <td>{item.breed}</td>
              <td>{item.healthstatus}</td>
              <td>{item.lostdate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Lostfoundpets;
