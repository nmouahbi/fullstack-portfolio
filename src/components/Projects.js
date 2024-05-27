import React, { useState } from "react";
import portfolioData from "../portfolioData";
import { Card, Button } from "react-bootstrap";
import "../styles/Projects.css";

function Projects() {
  const [showFullDescriptions, setShowFullDescriptions] = useState({});

  const toggleDescription = (index) => {
    setShowFullDescriptions((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const MAX_DESCRIPTION_LENGTH = 150;

  return (
    <section id="projects" className="container">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row">
        {portfolioData.projects.map((project, index) => {
          const isDescriptionLong =
            project.description.length > MAX_DESCRIPTION_LENGTH;
          const showFullText = showFullDescriptions[index];

          return (
            <div className="col-md-6 mb-6" key={index}>
              {" "}
              {/* Added mb-4 for spacing */}
              <Card className="h-100">
                <Card.Img
                  variant="top"
                  src={project.image}
                  alt={project.title}
                  style={{ objectFit: "cover", height: "200px" }} // Fixed image size
                />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="text-center">
                    {project.title}
                  </Card.Title>
                  <Card.Text>
                    {showFullText || !isDescriptionLong
                      ? project.description
                      : project.description.substring(
                          0,
                          MAX_DESCRIPTION_LENGTH
                        ) + "..."}
                  </Card.Text>
                  {isDescriptionLong && (
                    <Button
                      variant="link"
                      onClick={() => toggleDescription(index)}
                      className="mt-auto"
                    >
                      {showFullText ? "Read Less" : "Read More"}
                    </Button>
                  )}
                  <div className="d-grid mt-2">
                    {" "}
                    {/* Center button */}
                    <Button
                      variant="primary"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
