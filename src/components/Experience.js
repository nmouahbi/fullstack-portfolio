import React from "react";
import portfolioData from "../portfolioData";

function Experience() {
  return (
    <section id="experience">
      <h2>experience</h2>
      <div className="timeline">
        {portfolioData.experience.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{exp.institution}</h3>
              <p>
                {exp.position}, {exp.year}
              </p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
