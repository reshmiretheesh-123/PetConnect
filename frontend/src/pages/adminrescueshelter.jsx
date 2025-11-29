import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/adminrescueshelter.css";

function AdminRescueshelter() {
	const [details, setDetails] = useState([])
	const [refresh, setRefresh] = useState([false])
	async function rescueshelterData() {
		const response = await instance.get("/admin/rescueshelterview")
		setDetails(response.data.rescueshelter)
	}
	useEffect(() => {
		rescueshelterData()
	}, [refresh])
	async function activate(rescueshelterid) {
		await instance.patch("/admin/approve", { rescueshelterid })
		setRefresh(!refresh)
		alert("RescueShelter activated successfully")
	}
	async function deactivate(rescueshelterid) {
		await instance.patch("/admin/reject", { rescueshelterid })
		setRefresh(!refresh)
		alert("RescueShelter deactivated successfully")
	}

	return (
		<div className="admin-rescueshelter-container">
			<h2>Registered Rescueshelter</h2>

			<table className="rescueshelter-table">
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Userid</th>
						<th>Address</th>
						<th>Contact</th>
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
									src={"http://localhost:8080/uploads/" + item.image}
									alt="Profile"
									className="rescueshelter-img"
								/>
							</td>
							<td>{item.name}</td>
							<td>{item.userid}</td>
							<td>{item.address}</td>
							<td>{item.contact}</td>
							<td>
								{item.adhaar && (
									<a
										href={"http://localhost:8080/uploads/" + item.adhaar}
										target="_blank"
										rel="noopener noreferrer"
									>
										View Aadhaar
									</a>
								)}
							</td>
							<td>
								{item.Approved === true ? (
									<span className="status-badge activated">
										✔ Activated
									</span>
								) : (
									<button onClick={() => { activate(item._id) }}>Approve</button>
								)}
							</td>
							<td>
								{item.Approved === false ? (
									<span className="status-badge deactivated">
										✖ Deactivated
									</span>
								) : (
									<button onClick={() => { deactivate(item._id) }}>Reject</button>
								)}

							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default AdminRescueshelter;
