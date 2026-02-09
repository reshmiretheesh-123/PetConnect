import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/applicationrequest.css";

function Applicationrequest() {
    const [details, setDetails] = useState([])
    const [refresh, setRefresh] = useState(false)
    async function applicationData() {
        const response = await instance.get("/admin/adoptapplications")
        setDetails(response.data.application)
    }
    useEffect(() => {
        applicationData()
    }, [refresh])
    async function approve(applicationid) {
        await instance.patch("/admin/requestapprove",{applicationid})
        setRefresh(!refresh)
        alert("Adopter activated successfully")
    }
    async function reject(applicationid) {
        await instance.patch("/admin/requestreject",{applicationid})
        setRefresh(!refresh)
        alert("Adopter deactivated successfully")
    }
    return (
        <div className="admin-adopter-container">
            <h2>Adoption Applications</h2>

            <table className="adopters-table">
                <thead>
                    <tr>
                        <th>pet Name</th>
                        <th>Age</th>
                        <th>Breed</th>
                        <th>Species</th>
                        <th>Health</th>
                        <th>Vaccination</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {details.map((item) => (
                        <tr key={item._id}>
                            <td>{item.petId.name}</td>
                            <td>{item.petId.age}</td>
                            <td>{item.petId.breed}</td>
                            <td>{item.petId.species}</td>
                            <td>{item.petId.health}</td>
                            <td>{item.petId.vaccinations}</td>
                            <td>
                                {item.Approved === true ? (
                                    <span className="status approved">
                                        ✔ Approved
                                    </span>
                                ) : (
                                    <button onClick={() => { approve(item._id) }} className='approve-btn'>Approve</button>

                                )}

                            </td>
                            <td>
                                {item.Approved === false ? (
                                    <span className="status rejected">
                                        ✖ Rejected
                                    </span>
                                ) : (
                                    <button onClick={() => { reject(item._id) }} className='reject-btn'>Reject</button>
                                )}

                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Applicationrequest;