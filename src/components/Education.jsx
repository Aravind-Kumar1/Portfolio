import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import "../styles/education.css";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {/* College Education */}
        <div className="education-card">
          <FaGraduationCap className="edu-icon" />
          <div className="edu-info">
            <h3 className="edu-institution">
              St. Peter's Engineering College, Hyderabad
            </h3>
            <p className="edu-degree">
              Bachelor in Engineering - BE, Computer Science and Engineering
            </p>
            <p className="edu-duration">Oct 2021 - Sep 2025</p>
            <p className="edu-grade"><strong>Grade:</strong> 83.2 CGPA</p>
          </div>
        </div>

        {/* High School Education */}
        <div className="education-card">
          <FaGraduationCap className="edu-icon" />
          <div className="edu-info">
            <h3 className="edu-institution">
              Sri Chaitanya Junior College, Hyderabad
            </h3>
            <p className="edu-degree">TSBIE (XII), MPC</p>
            <p className="edu-duration">Apr 2019 - Apr 2021</p>
            <p className="edu-grade"><strong>Grade:</strong> 87.4%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
