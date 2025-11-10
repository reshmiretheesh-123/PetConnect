import React, { useState } from "react";
import "../styles/managepets.css";

function ManagePets() {
  const [pet, setPet] = useState({
    name: "",
    age: "",
    breed: "",
    species: "",
    health: "",
    vaccinations: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setPet({ ...pet, [name]: files[0] });
    } else {
      setPet({ ...pet, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Pet Added:", pet);
    alert("Pet added successfully!");
    setPet({
      name: "",
      age: "",
      breed: "",
      species: "",
      health: "",
      vaccinations: "",
      image: null,
    });
  };

  return (
    <div className="managepets-container">
      <h2>Add a New Pet</h2>
      <form className="pet-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Pet Image</label>
          <input type="file" name="image" accept="image/*" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Pet Name</label>
          <input type="text" name="name" value={pet.name} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Age</label>
          <input type="number" name="age" value={pet.age} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Breed</label>
          <input type="text" name="breed" value={pet.breed} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Species</label>
          <input type="text" name="species" value={pet.species} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Health Condition</label>
          <input type="text" name="health" value={pet.health} onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Vaccinations</label>
          <input type="text" name="vaccinations" value={pet.vaccinations} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-btn">Add Pet</button>
      </form>
    </div>
  );
}

export default ManagePets;
