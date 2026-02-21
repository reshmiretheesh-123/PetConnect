import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/applicationstatus.css";

function Applicationstatus() {
    const [details, setDetails] = useState([]);
    async function ApplicationData() {
        const response = await instance.get("/adopter/applicationstatus")
        setDetails(response.data.status)
    }
    useEffect(() => {
        ApplicationData()
    }, []
    )


    return (
        <div className="applicationstatus-container">
            <h2>Application Status</h2>

            <div className="application-grid">
                {details.map((item) => (
                    <div className="status-card">
                        <img
                            src={"http://localhost:8080/uploads/" + item.petId.image}
                            alt={item.petId.petname}
                            className="application-image"
                        />
                        <h3>{item.petId.name}</h3>
                        {item.Approved ? (
                            <span className="applicationstatus-approved">✔ Approved</span>
                        ) : (
                            <span className="applicationstatus-rejected">✖ Rejected</span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Applicationstatus;
