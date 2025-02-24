import React from "react";
import "../styles/experience.css"; // Import CSS

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2 className="experience-title">Experience</h2>

      {/* ELIM Experience - Freelance Contribution */}
      <div className="experience-card elim">
        <h3 className="role">Freelance Front-end Developer</h3>
        <p className="company">Emmanuel Living Impact Mission (ELIM)</p>
        <p className="duration">Nov 2024 – Feb 2025</p>
        <ul className="experience-list">
          <li>Designed and developed a modern, high-performance website using Next.js, improving user engagement.</li>
          <li>Integrated EmailJS to automate communication, reducing manual workload by 50%.</li>
          <li>Implemented Server-Side Rendering (SSR) and Static Site Generation (SSG) for better performance and SEO.</li>
          <li>Ensured seamless compatibility across desktops, tablets, and mobile devices.</li>
          <li>Optimized accessibility and UI components, enhancing user experience and navigation.</li>
        </ul>
      </div>

      {/* Moment Makers Experience */}
      <div className="experience-card team-events">
  <h3 className="role">Freelance Front-end Developer</h3>
  <p className="company">The Team Events</p>
  <p className="duration">Sept 2024 – Oct 2024</p>
  <ul className="experience-list">
    <li>Designed and developed a high-performance, fully responsive event management website using Next.js, enhancing the online booking experience.</li>
    <li>Integrated Clerk authentication for a seamless and secure user login/signup process.</li>
    <li>Utilized ShadCN UI components to create an elegant, modern, and user-friendly interface.</li>
    <li>Optimized website speed and performance, ensuring smooth navigation across all devices.</li>
    <li>Delivered the project on time while maintaining a strong focus on user experience and functionality.</li>
  </ul>
</div>

    </section>
  );
};

export default Experience;
