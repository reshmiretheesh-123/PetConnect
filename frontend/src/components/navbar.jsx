import { Link } from 'react-router';
import '../styles/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <h2 className="navbar-brand" id="logo">🐾 PetConnect</h2>

        <ul className="item">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>

          {/* Login Dropdown */}
          <li className="nav-item dropdown">
            <Link 
              to="" 
              className="nav-link dropdown-toggle" 
              role="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
            >
              Login
            </Link>
            <ul className="dropdown-menu">
              <li><Link to="/login" className="dropdown-item">Pet Owner</Link></li>
              <li><Link to="/adopterlogin" className="dropdown-item">Adopter</Link></li>
              <li><Link to="/fosterlogin" className="dropdown-item">Foster</Link></li>
              <li><Link to="/rescueshelterlogin" className="dropdown-item">Rescue/Shelter</Link></li>
              <li><Link to="/adminlogin" className="dropdown-item">Admin</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
