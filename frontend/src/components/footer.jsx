import React from "react";
import "../styles/footer.css";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaPaw } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-section about">
          <h3><FaPaw className="paw-icon" /> PetConnect</h3>
          <p>
            Connecting adopters, fosters, and shelters to build a loving community
            where every pet finds a home. Join us in making a difference, one paw at a time.
          </p>
        </div>

        {/* Quick Links
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Adopt</a></li>
            <li><a href="#">Foster</a></li>
            <li><a href="#">Contact</a></li>
          </ul> 
        </div> */}

        {/* Contact Info */}
        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p><FaPhoneAlt /> +91 98765 43210</p>
          <p><FaPhoneAlt /> +91 91234 56789</p>
          <p><FaEnvelope /> petconnect@gmail.com</p>
          <p><FaMapMarkerAlt /> Kayamkulam, Kerala, India</p>
        </div>

        {/* Social Media */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 <span>PetConnect</span> | All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
