import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/adoptionrequests.css";

function AdoptionRequests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAdoptionRequests();
  }, []);

  // Fetch all adoption requests (Admin)
  const fetchAdoptionRequests = async () => {
    try {
      const res = await instance.get("/adopter/adoptionrequest");
      setRequests(res.data);
    } catch (error) {
      console.error("Error fetching adoption requests", error);
    } finally { 
      setLoading(false);
    } 
  };

  // Approve request
  const approveRequest = async (requestId) => {
    try {
      await instance.put(`/admin/adoption/approve/${requestId}`);
      updateStatus(requestId, "approved");
    } catch (error) {
      alert("Failed to approve request");
    }
  };

  // Reject request
  const rejectRequest = async (requestId) => {
    try {
      await instance.put(`/admin/adoption/reject/${requestId}`);
      updateStatus(requestId, "rejected");
    } catch (error) {
      alert("Failed to reject request");
    }
  };

  // Update UI status instantly
  const updateStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((req) =>
        req._id === id ? { ...req, status } : req
      )
    );
  };

  if (loading) {
    return <h3 style={{ textAlign: "center" }}>Loading adoption requests...</h3>;
  }

  return (
    <div className="adoption-requests-container">
      <h2>Adoption Applications</h2>

      {requests.length === 0 ? (
        <p style={{ textAlign: "center" }}>No adoption requests found</p>
      ) : (
        <table className="requests-table">
          <thead>
            <tr>
              <th>Pet</th>
              <th>Adopter</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {requests.map((req) => (
              <tr key={req._id}>
                <td>
                  <b>{req.petId?.name}</b><br />
                  <small>{req.petId?.breed}</small>
                </td>

                <td>
                  <b>{req.adopterId?.name}</b><br />
                  <small>{req.adopterId?.email}</small>
                </td>

                <td>
                  <span
                    className={`status ${req.status}`}
                  >
                    {req.status.toUpperCase()}
                  </span>
                </td>

                <td>
                  {req.status === "pending" ? (
                    <>
                      <button
                        className="approve-btn"
                        onClick={() => approveRequest(req._id)}
                      >
                        Approve
                      </button>

                      <button
                        className="reject-btn"
                        onClick={() => rejectRequest(req._id)}
                      >
                        Reject
                      </button>
                    </>
                  ) : (
                    <span>Action Completed</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdoptionRequests;

