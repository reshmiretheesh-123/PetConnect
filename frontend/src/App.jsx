import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes,Route} from 'react-router'
import Landingpage from './pages/landingpage'
import About from './pages/about'
import Contact from './pages/contact'
import Register from './pages/Register'
import Login from './pages/login'
import PetOwnerRegister from './pages/petowner'
import PetOwnerHome from './pages/petownerhomepage'
import ManagePets from './pages/managepets'
import AdopterRegister from './pages/adopterregister'
import AdopterLogin from './pages/adopterlogin'
import AdopterHomepage from './pages/adopterhomepage'
import RescueShelterRegister from './pages/rescueshelterregister'
import RescueShelterLogin from './pages/rescueshelterlogin'
import RescueShelterHomePage from './pages/rescueshelterhomepage'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register/petowner" element={<PetOwnerRegister />} />
        <Route path="/petownerhomepage" element={<PetOwnerHome/>}/> 
        <Route path="/petownerhomepage/managepets" element={<ManagePets/>}/>
        <Route path="/register/adopterregister" element={<AdopterRegister/>} />
        <Route path="/adopterlogin" element={<AdopterLogin/>} />
        <Route path="/adopterhomepage" element={<AdopterHomepage/>}/>
        <Route path="/register/rescueshelter" element={<RescueShelterRegister/>} />
        <Route path="/rescueshelterlogin" element={<RescueShelterLogin/>} />
        <Route path="/rescueshelterhomepage" element={<RescueShelterHomePage/>}/>
        </Routes>
    </>
  )
}

export default App
