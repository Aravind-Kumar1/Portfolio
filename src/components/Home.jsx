import React from "react";
import Typewriter from "typewriter-effect";
import "../styles/home.css"; // Import the CSS file
import HeroImage from "../assets/Professional_pics.png"; // Replace with your image path
import resume from "../assets/resume.pdf"; // Importing resume

const Home = () => {
  return (
    <section className="home-container">
      <div className="overlay"></div>

      <div className="home-content">
        {/* Left Section - Text */}
        <div className="text-container">
          <h1>
            Hi, I am <br /> <span className="name">Aravind Chamaakuri</span>
          </h1>

          <h2 className="typewriter">
            I am a{" "}
            <span className="highlight">
              <Typewriter
                options={{
                  strings: ["Frontend Developer", "Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </h2>

          <p className="description">
            Driven and adaptable, I thrive on challenges and continuous learning. With a growth mindset and commitment to excellence, I aim to make a meaningful impact and deliver outstanding results.
          </p>

          {/* Correct Resume Link */}
          <a href={resume} className="resume-button" target="_blank" rel="noopener noreferrer">
  Check Resume
</a>

        </div>

        {/* Right Section - Image with Animation */}
        <div className="image-container">
          <div className="image-wrapper">
            <img src={HeroImage} alt="Hero" className="hero-img" />
            <div className="animation-bg"></div> {/* Background Animation */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
