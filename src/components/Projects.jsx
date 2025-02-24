import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa/index";
// Importing Icons
import smart from "../assets/smart.png"; // Importing the image
import ch from "../assets/ch.png";
import "../styles/projects.css";
import event from "../assets/event.png";

const projects = [
  {
    title: "Church Website",
    description: "A responsive church website with sermon, event, and donation features.",
    image: ch,
    technologies: ["Next.js", "Email JS", "CSS Module"],
    github: "https://github.com/Aravind-Kumar1/church-community.git",
    live: "https://elimimpact.com/",
    timeline: "Nov 2024 – Feb 2025",
  },
  {
    title: "Event Management",
    description:
      "An event platform for decorations and entertainment services.",
    image: event,
    technologies: ["React", "ShadCN", "Clerk"],
    github: "https://github.com/Aravind-Kumar1/The_Team_Events_Website.git",
    live: "https://github.com/Aravind-Kumar1/The_Team_Events_Website.git",
    timeline: "Sept 2024 – Oct 2024",
  },
  {
    title: "Smart Read Platform",
    description:
      "An interactive book platform with notes, wishlist, and real-time updates.",
    image: smart,
    technologies: ["React", "Firebase", "Firestore"],
    github: "https://github.com/Aravind-Kumar1/SMART_READ.git",
    live: "https://github.com/Aravind-Kumar1/SMART_READ.git",
    timeline: "June 2024 – Aug 2024",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img
              src={project.image} // Using the imported image here
              alt={project.title}
              className="project-image"
            />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-timeline">
                <strong>{project.timeline}</strong>
              </p>
              <div className="technologies">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="project-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
