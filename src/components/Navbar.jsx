import React, { useState, useEffect } from "react";
import "../styles/nav.css"; // Import the CSS

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">Aravind's Portfolio</div>
      <ul className="nav-links">
      <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <a href="https://github.com/Aravind-Kumar1" target="_blank" rel="noopener noreferrer" className="github-btn">
        GitHub Profile
      </a>
    </nav>
  );
};

export default Navbar;
