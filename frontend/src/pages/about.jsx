import React from "react";
import "../styles/about.css";
import { FaPaw, FaHeart, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <section className="about-page">

      {/* ============ HEADER SECTION ============ */}
      <div className="about-header">
        <h1>
          About <span>PetConnect</span>
        </h1>
        <p>
          We are on a mission to connect animal lovers, adopters, and shelters across
          the world — creating a safe and loving space for every pet.
        </p>
      </div>

      {/* ============ WHO WE ARE SECTION ============ */}
      <div className="about-section">
        <div className="about-image">
          <img
            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=539,h=381,fit=crop/Yan1lOReMPhOZXjl/jumbotron-YBg4w7jp9QcGLleP.jpg"
            alt="Who we are"
          />
        </div>
        <div className="about-content">
          <h2><FaPaw className="icon" /> Who We Are</h2>
          <p>
            <strong>PetConnect</strong> is an online community dedicated to uniting pets and people.
            We simplify adoption and fostering through an AI-powered platform that helps you
            find your perfect furry companion — safely and seamlessly.
          </p>
        </div>
      </div>

      {/* ============ MISSION SECTION ============ */}
      <div className="about-section reverse">
        <div className="about-content">
          <h2><FaHeart className="icon" /> Our Mission</h2>
          <p>
            Our mission is to ensure no pet is left without a home. Through the support of
            shelters, fosters, and adopters, <b>PetConnect</b> provides a compassionate
            network that promotes love, care, and responsible pet ownership.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://articles.hepper.com/wp-content/uploads/2023/05/labrador-retriever-dog-pawing-to-his-owner_New-Africa-Shutterstock.jpg"
            alt="Our mission"
          />
        </div>
      </div>

      {/* ============ VISION SECTION ============ */}
      <div className="about-section">
        <div className="about-image">
          <img
            src="https://weton.biz.id/wp-content/uploads/2025/08/Contact-Us.webp"
            alt="Our vision"
          />
        </div>
        <div className="about-content">
          <h2><FaUsers className="icon" /> Our Vision</h2>
          <p>
            We envision a connected world where technology helps every animal find love,
            safety, and belonging. PetConnect aims to become the most trusted digital
            platform for pet adoption and rescue management.
          </p>
        </div>
      </div>

      {/* ============ MEET OUR TEAM SECTION ============ */}
      <div className="team-section">
        <h2><FaUsers className="icon" /> Meet Our Team</h2>
        <div className="team-container">
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Team member" />
            <h3>Reshmi Retheesh</h3>
            <p>Founder & Lead Developer</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Team member" />
            <h3>Rahul Kumar</h3>
            <p>Backend Developer</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/women/54.jpg" alt="Team member" />
            <h3>Meera Nair</h3>
            <p>UI/UX Designer</p>
          </div>
          <div className="team-member">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="Team member" />
            <h3>Arjun Das</h3>
            <p>AI Integration Specialist</p>
          </div>
        </div>
      </div>

      {/* ============ BACK TO HOME BUTTON ============ */}
      <div className="back-home-container">
        <Link to="/" className="btn-back-home">← Back to Home</Link>
      </div>
    </section>
  );
}

export default About;
