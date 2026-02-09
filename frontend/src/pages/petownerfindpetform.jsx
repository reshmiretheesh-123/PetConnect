import React from 'react'
import "../styles/petownerfindpetform.css"
import { useState } from 'react';
import instance from '../utils/apiClient';
import { useNavigate } from 'react-router';

function PetOwnerFindPetForm() {
    const Navigate = useNavigate()
    const [data, setData] = useState({
        petname: "",
        species: "",
        breed: "",
        healthstatus: "",
        lostdate:"",
        petpicture: ""
    });
    const [error, setError] = useState({
        petname: "",
        species: "",
        breed: "",
        healthstatus: "",
        lostdate:"",
        petpicture: ""
    });
    function change(e) {
        setData({ ...data, [e.target.name]: e.target.value });
    }
    function upload(e) {
        const file = e.target.files[0];
        setData({ ...data, petpicture: file });
    }
    async function add(e) {
        e.preventDefault();
        let lerror = {
            petname: "",
            species: "",
            breed: "",
            healthstatus: "",
            lostdate:"",
            petpicture: ""
        };
        if (!data.petname) {
            lerror.petname = "Pet name is required";
        }
        if (!data.species) {
            lerror.species = "Species is required";
        }
        if (!data.breed) {
            lerror.breed = "Breed is required";
        }
        if (!data.healthstatus) {
            lerror.healthstatus = "Health Status is required";
        }
        if (!data.lostdate) {
            lerror.lostdate= "Lostdate is required";
        }
        if (!data.petpicture) {
            lerror.petpicture = "Pet Picture is required";
        }
        setError({ ...lerror });
        if (Object.values(lerror).every((item) => item === "")) {
            try {
                const formData = new FormData();
                formData.append("petname", data.petname);
                formData.append("species", data.species);
                formData.append("breed", data.breed);
                formData.append("healthstatus", data.healthstatus);
                formData.append("petpicture", data.petpicture);
                formData.append("lostdate", data.lostdate);
                await instance.post("/findpet/find", formData);
                alert("Losted Pet added successfully!");
                Navigate("/petownerfindpet")
            } catch (e) {
                console.error(e);
                alert(e.response?.data?.message || "Error adding lostpets");
            }
        }
        else {
            alert("⚠ Please fill all fields correctly");
        }
    }

    return (
        <div className="findpet-edit-container">
            <div className="edit-card">
                <h2>Add Lost Pet</h2>

                <form className="findpet-edit-form">


                    <label>Pet Name</label>
                    <input
                        type="text"
                        name="petname"
                        onChange={change}

                    />


                    <label>Species</label>
                    <input
                        type="Species"
                        name="species"
                        onChange={change}

                    />


                    <label>Breed</label>
                    <input
                        type="text"
                        name="breed"
                        onChange={change}

                    />

                    <label>Health status</label>
                    <input
                        type="number"
                        name="healthstatus"
                        onChange={change}

                    />

                    <label>Lost Date</label>
                    <input
                        type="date"
                        name="lostdate"
                        onChange={change}

                    />

                    <label>Pet Picture:</label>
                    <input type="file" name="petpicture" onChange={upload} />

                    <button type="submit" onClick={add} className="update-button">
                        Update
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PetOwnerFindPetForm
