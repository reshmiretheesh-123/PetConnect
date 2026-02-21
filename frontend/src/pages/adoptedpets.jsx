import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/adoptedpets.css";

function Adoptedpets() {
    const [details, setDetails] = useState([]);
    async function ApplicationData() {
        const response = await instance.get("/adopter/adoptedpets")
        setDetails(response.data.adoptedpets)
    }
    useEffect(() => {
        ApplicationData()
    }, []
    )


    return (
        <div className="adoptedpets-container">
            <h2>Adopted Pets</h2>

            <div className="adoptedpets-grid">
                {details.map((item) => (
                    <div className="status-card">
                        <img
                            src={"http://localhost:8080/uploads/" + item.petId.image}
                            alt={item.petId.petname}
                            className="adoptedpets-image"
                        />
                        <h3>{item.petId.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Adoptedpets;
