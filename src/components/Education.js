import React from "react";
import portfolioData from "../portfolioData";

function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="timeline">
        {portfolioData.education.map((edu, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{edu.institution}</h3>
              <p>
                {edu.degree}, {edu.year}
              </p>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
