import React from "react";
import portfolioData from "../portfolioData";
import "../styles/About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={portfolioData.about.image} alt="Your Name" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm {portfolioData.about.name}. I'm a passionate{" "}
            <b>full-stack developer</b> eager to learn and grow in the
            ever-evolving world of web development.
          </p>
          <p>
            I have a solid foundation in both frontend and backend technologies,
            and I'm constantly expanding my skillset.
          </p>
          {/* Optional: Add your key skills or interests */}
          <p>
            I'm particularly interested in building user-friendly interfaces and
            creating robust, scalable applications that solve real-world
            problems.
          </p>
          <p>
            I'm always looking for opportunities to collaborate on exciting
            projects and continue my learning journey. Let's connect!
          </p>
          {/* Added button */}
          <a href="/contact" className="contact-button">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
