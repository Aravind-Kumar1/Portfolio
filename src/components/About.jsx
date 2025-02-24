import "../styles/about.css";
import profileImg from "../assets/Professional_pics.png"; // High-quality profile image
import resume from "../assets/resume.pdf";


const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-heading">
        About <span>Me</span>
      </h2>

      <div className="about-container">
        
        {/* Profile Image */}
        <div className="about-image">
          <img src={profileImg} alt="Aravind Kumar" className="profile-img" />
        </div>

        {/* About Me Card */}
        <div className="about-card">
          <h3 className="about-title">Who Am I?</h3>
          <p className="about-description">
            I'm <span className="highlight">Aravind Kumar</span>, a dedicated Frontend Developer with a strong passion for 
            creating modern, user-friendly web applications. My expertise includes React, Next.js, and UI/UX design, allowing me to 
            develop seamless and interactive digital experiences.
          </p>
            <p className="about-description">
              I strive to write clean, efficient, and scalable code to build web solutions that are both visually appealing and highly functional.
            </p>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="https://github.com/Aravind-Kumar1" className="btn github-btn">
              GitHub Profile
            </a>
            <a href={resume} className="btn resume-btn" download>
  Download Resume
</a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
