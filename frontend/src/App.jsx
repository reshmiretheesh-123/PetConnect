import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router'
import Landingpage from './pages/landingpage'
import About from './pages/about'
import Contact from './pages/contact'
import Register from './pages/Register'
import Login from './pages/login'
import PetOwnerRegister from './pages/petowner'
import PetOwnerHome from './pages/petownerhomepage'
import ManagePets from './pages/petownermanagepets'
import AdopterRegister from './pages/adopterregister'
import AdopterLogin from './pages/adopterlogin'
import AdopterHomepage from './pages/adopterhomepage'
import RescueShelterRegister from './pages/rescueshelterregister'
import RescueShelterLogin from './pages/rescueshelterlogin'
import RescueShelterHomePage from './pages/rescueshelterhomepage'
import FosterRegister from './pages/fosterregister'
import FosterLogin from './pages/fosterlogin'
import FosterHomePage from './pages/fosterhomepage'
import AdminLogin from './pages/adminlogin'
import AdminHomePage from './pages/adminhomepage'
import PetOwnerProfile from './pages/petownerprofile'
import PetownerUpdateprofile from './pages/petownerupdateprofile'
import AdopterProfile from './pages/adopterprofile'
import AdopterUpdateProfile from './pages/adopterupdateprofile'
import FosterProfile from './pages/fosterprofile'
import FosterUpdateProfile from './pages/fosterupdateprofile'
import RescueShelterProfile from './pages/rescueshelterprofile'
import AdminPetOwner from './pages/adminpetowner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/petowner" element={<PetOwnerRegister />} />
        <Route path="/petownerhomepage" element={<PetOwnerHome />} />
        <Route path="/managepets" element={<ManagePets />} />
        <Route path="/register/adopterregister" element={<AdopterRegister />} />
        <Route path="/adopterlogin" element={<AdopterLogin />} />
        <Route path="/adopterhomepage" element={<AdopterHomepage />} />
        <Route path="/register/rescueshelter" element={<RescueShelterRegister />} />
        <Route path="/rescueshelterlogin" element={<RescueShelterLogin />} />
        <Route path="/rescueshelterhomepage" element={<RescueShelterHomePage />} />
        <Route path="/register/foster" element={<FosterRegister />} />
        <Route path="/fosterlogin" element={<FosterLogin />} />
        <Route path="/fosterhomepage" element={<FosterHomePage />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/adminhomepage" element={<AdminHomePage />} />
        <Route path="/petownerprofile" element={<PetOwnerProfile />} />
        <Route path="/petownerupdateprofile" element={<PetownerUpdateprofile />} />
        <Route path="/adopterprofile" element={<AdopterProfile />} />
        <Route path="/adopterupdateprofile" element={<AdopterUpdateProfile />} />
        <Route path="/fosterprofile" element={<FosterProfile />} />
        <Route path="/fosterupdateprofile" element={<FosterUpdateProfile />} />
        <Route path="/rescueshelterprofile" element={<RescueShelterProfile />} />
        <Route path="/adminpetowner" element={<AdminPetOwner/>} />
        
      </Routes>
    </>
  )
}

export default App
