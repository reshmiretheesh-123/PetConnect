import React from "react";
import "../styles/contact.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact-page">
      {/* Header Section */}
      <div className="contact-header">
        <h1>Contact <span>PetConnect</span></h1>
        <p>We’d love to hear from you! Reach out to us with any questions, suggestions, or support needs.</p>
      </div>

      {/* Contact Details Section */}
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-box">
            <FaEnvelope className="icon" />
            <h3>Email</h3>
            <p>support@petconnect.com</p>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <h3>Phone</h3>
            <p>+91 98765 43210</p>
          </div>

          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <h3>Location</h3>
            <p>Cardif,UK,London</p>
          </div>
        </div>

        {/* Google Map Embed */}
        <div className="contact-map">
          <iframe
            title="PetConnect Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.931524320238!2d76.7220508735929!3d9.152341588859223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b064a4c46a41e4f%3A0xabc9e05a3b6813e8!2sSNIT%20Adoor!5e0!3m2!1sen!2sin!4v1694421050294!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: "0", borderRadius: "12px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Contact;
