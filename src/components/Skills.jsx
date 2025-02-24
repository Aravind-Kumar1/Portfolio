import { Code, Database, Settings, CheckCircle } from "lucide-react"; // Import Lucide Icons
import "../styles/skills.css"; // Import styles

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-heading">
        My <span className="highlight">Skills</span>
      </h2>

      <div className="skills-container">
        {/* Frontend Development */}
        <div className="skills-category">
          <div className="icon-box">
            <Code size={50} className="icon" />
          </div>
          <h3>Frontend Development</h3>
          <ul>
            <li><CheckCircle size={18} className="list-icon" /> <strong>HTML5, CSS3, JavaScript (ES6+)</strong></li>
            <li><CheckCircle size={18} className="list-icon" /> React.js, Next.js</li>
            <li><CheckCircle size={18} className="list-icon" /> Tailwind CSS, ShadCN, Bootstrap</li>
            <li><CheckCircle size={18} className="list-icon" /> UI/UX Implementation (Figma to Code)</li>
          </ul>
        </div>

        {/* Backend & Database */}
        <div className="skills-category">
          <div className="icon-box">
            <Database size={50} className="icon" />
          </div>
          <h3>Backend & Database</h3>
          <ul>
            <li><CheckCircle size={18} className="list-icon" /> MongoDB, Firebase, Firestore</li>
            <li><CheckCircle size={18} className="list-icon" /> RESTful APIs, Axios</li>
            <li><CheckCircle size={18} className="list-icon" /> Authentication (JWT, OAuth)</li>
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div className="skills-category">
          <div className="icon-box">
            <Settings size={50} className="icon" />
          </div>
          <h3>Tools & Technologies</h3>
          <ul>
            <li><CheckCircle size={18} className="list-icon" /> Git, GitHub, GitLab</li>
            <li><CheckCircle size={18} className="list-icon" /> VS Code, DevTools, Postman</li>
            <li><CheckCircle size={18} className="list-icon" /> Netlify, Vercel, Jest, Cypress</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
