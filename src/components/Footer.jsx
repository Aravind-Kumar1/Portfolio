import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer">
      <div className="custom-footer-container">
        {/* 🔹 About Section */}
        <div className="custom-footer-section">
          <h3 className="custom-footer-title">About Me</h3>
          <p className="custom-footer-text">
            Passionate frontend developer dedicated to crafting beautiful and
            functional web experiences. 🚀
          </p>
        </div>

        {/* 🔹 Quick Links */}
        <div className="custom-footer-section">
          <h3 className="custom-footer-title">Quick Links</h3>
          <ul className="custom-footer-links">
            
      <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* 🔹 Social Media & Contact */}
        <div className="custom-footer-section">
          <h3 className="custom-footer-title">Follow Me</h3>
          <div className="custom-footer-social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="custom-footer-social-icon"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="custom-footer-social-icon"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="custom-footer-social-icon"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="custom-footer-social-icon"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="custom-footer-bottom">
        <p className="custom-footer-copyright">
          © {new Date().getFullYear()} Aravind Chamaakuri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
