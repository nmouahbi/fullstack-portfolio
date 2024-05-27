import React, { useState, useEffect } from "react";
import axios from "axios";

import "../styles/Testimonial.css";

function TestimonialList() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/testimonials`
        );
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs once on component mount

  return (
    <div className="testimonial-list">
      <h2>Testimonials</h2>
      {testimonials.length === 0 ? (
        <p>No testimonials available yet.</p>
      ) : (
        <div
          id="testimonialCarousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial._id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div
                  className="card h-100 mx-auto"
                  style={{ maxWidth: "600px" }}
                >
                  <div className="card-body">
                    <blockquote className="blockquote mb-0">
                      <p className="quote">{testimonial.quote}</p>
                      <footer className="blockquote-footer">
                        {testimonial.name}
                        {testimonial.company && (
                          <cite title="Company">{testimonial.company}</cite>
                        )}
                        {testimonial.designation && (
                          <cite title="Designation">
                            , {testimonial.designation}
                          </cite>
                        )}
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonialCarousel"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#testimonialCarousel"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      )}
    </div>
  );
}

export default TestimonialList;
