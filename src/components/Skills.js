import React from "react";
import portfolioData from "../portfolioData";
import "../styles/Skills.css"; // Import the CSS file

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      {portfolioData.skills.map((skill, index) => (
        <div key={index} className="mb-3">
          <h4>{skill.name}</h4>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${skill.percentage}%` }}
              aria-valuenow={skill.percentage}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.percentage}%
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Skills;
