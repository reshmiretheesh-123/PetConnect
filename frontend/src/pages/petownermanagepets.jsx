import React, { useEffect, useState } from "react";
import "../styles/petownermanagepetss.css";
import instance from "../utils/apiClient";

function ManagePets() {
  const [showForm, setShowForm] = useState(false);
  const [pets, setPets] = useState([]);

  // Fetch pets from backend
  
   async function getinfo(){
        const response=await instance.get("/managepets/viewpets")
        setPets(response.data)
   }
  const handlePetAdded = (newPet) => {
    alert("Pet added successfully!");
    setShowForm(false);
    
  };
   useEffect(()=>{
       getinfo()
   },[showForm])
  return (
    <div className="managepets-container">
      <div className="header-section">
        <h2>Manage Your Pets</h2>
        <button className="add-btn" onClick={() => setShowForm(true)}>Add New Pet</button>
      </div>

      {showForm && (
        <AddPetForm
          onClose={() => setShowForm(false)}
          onPetAdded={handlePetAdded}
        />
      )}

      <div className="pet-list">
        {pets.map((pet) => (
          <div key={pet._id} className="pet-card">
            <img src={`http://localhost:8080/uploads/${pet.image}`} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p><b>Age:</b> {pet.age}</p>
            <p><b>Breed:</b> {pet.breed}</p>
            <p><b>Species:</b> {pet.species}</p>
            <p><b>Health:</b> {pet.health}</p>
            <p><b>Vaccinations:</b> {pet.vaccinations}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function AddPetForm({ onClose, onPetAdded }) {
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(pet).forEach((key) => {
      formData.append(key, pet[key]);
    });

    
    const response=await instance.post("/managepets/addpets" ,formData)
 

    const data = response.data
    
      onPetAdded(formData);
  };

  return (
    <div className="form-overlay">
      <div className="form-container">
        <h2>Add a New Pet</h2>
        <form onSubmit={handleSubmit} className="pet-form">
          <input type="file" name="image" onChange={handleChange} required />
          <input type="text" name="name" placeholder="Pet Name" value={pet.name} onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" value={pet.age} onChange={handleChange} required />
          <input type="text" name="breed" placeholder="Breed" value={pet.breed} onChange={handleChange} required />
          <input type="text" name="species" placeholder="Species" value={pet.species} onChange={handleChange} required />
          <input type="text" name="health" placeholder="Health Condition" value={pet.health} onChange={handleChange} required />
          <input type="text" name="vaccinations" placeholder="Vaccinations" value={pet.vaccinations} onChange={handleChange} required />
          <div className="form-buttons">
            <button type="submit">Add Pet</button>
            <button type="button" onClick={handleSubmit} className="cancel-btn">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ManagePets;
