import React, { useEffect, useState } from 'react'
import "../styles/petownerfindpet.css"
import instance from '../utils/apiClient'
import { Link } from 'react-router'

function Petownerfindpet() {
  const [details, setDetails] = useState([])

  async function findpetData() {
    try {
      const response = await instance.get("/findpet/view")
      setDetails(response.data)
    } catch (error) {
      console.error("Error fetching pets:", error)
    }
  }

  useEffect(() => {
    findpetData()
  }, [])

  return (
    <>
      <div className='petowner-findpet-container'>
        <button><Link to="/petownerfindpet/findpet">findpets</Link></button>

        <h1>LOST or FOUND PETS</h1>
        {details.map((item) => (
          <div className='petowner-findpet-list'>
            <img
              src={`http://localhost:8080/uploads/${item.petpicture}`}
              alt="pet"
            />

            <div className='petowner-findpet-view'>
              <p><strong>Pet Name:</strong> {item.petname}</p>
              <p><strong>Species:</strong> {item.species}</p>
              <p><strong>Breed:</strong> {item.breed}</p>
              <p><strong>Health Status:</strong> {item.healthstatus}</p>
              <p><strong>Lost Date:</strong> {item.lostdate}</p>
              <button>Found</button>
            </div>
          </div>
        ))}
      </div>
    </>

  )
}

export default Petownerfindpet
