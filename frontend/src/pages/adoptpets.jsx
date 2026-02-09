import React, { useEffect, useState } from "react";
import instance from "../utils/apiClient";
import "../styles/adoptpets.css";

function AdoptPets() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    try {
      const res = await instance.get("/adopter/viewadoptpets");
      setPets(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const requestAdopt = async (petId) => {
    try {
      await instance.post("/adopter/adoptionrequest",{petId});
      alert("Adoption request sent successfully 🐾");
    } catch (error) {
      alert("Failed to send adoption request");
    }
  };

  return (
    <div className="adoptpets-container">
      <h2>Available Pets for Adoption</h2>

      <div className="pets-grid">
        {pets.map((pet) => (
          <div className="pet-card" key={pet._id}>
            <img
              src={pet.image && `http://localhost:8080/uploads/${pet.image}`}
              alt={pet.petname}
              className="pet-image"
            />

            <h3>{pet.name}</h3>
            <p><b>Age:</b> {pet.age}</p>
            <p><b>Breed:</b> {pet.breed}</p>
            <p><b>Species:</b> {pet.species}</p>
            <p><b>Health:</b> {pet.health}</p>
            <p><b>Vaccination:</b> {pet.vaccinations}</p>
           
            <button
              className="adopt-btn"
              onClick={() => requestAdopt(pet._id)}
            >
              Request for Adopt
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdoptPets;
