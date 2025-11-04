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

      </Routes>
    </>
  )
}

export default App
