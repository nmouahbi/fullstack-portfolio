// src/components/TestimonialForm.js
import React, { useState } from "react";
import axios from "axios";
import "../styles/Testimonial.css"; // Assuming you want to use the same styles

function TestimonialForm() {
  const [formData, setFormData] = useState({
    name: "",
    quote: "",
    company: "",
    designation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/testimonials`,
        formData
      );
      if (response.status === 201) {
        alert("Testimonial submitted successfully!");
        setFormData({
          name: "",
          quote: "",
          company: "",
          designation: "",
        });
      }
    } catch (error) {
      alert("Failed to submit testimonial");
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <section id="testimonial">
      {" "}
      {/* Changed section ID for clarity */}
      <div className="title-container">
        <h2 className="title">Submit a Testimonial</h2>
        {/* Optional subtitle */}
      </div>
      <div className="contact-container">
        {" "}
        {/* Reusing the same class for styling */}
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {/* Name field */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Quote (Testimonial) field */}
            <div className="mb-3">
              <label htmlFor="quote" className="form-label">
                Your Testimonial
              </label>
              <textarea
                className="form-control"
                id="quote"
                name="quote"
                rows="3"
                value={formData.quote}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Company field (optional) */}
            <div className="mb-3">
              <label htmlFor="company" className="form-label">
                Company (Optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            {/* Designation field (optional) */}
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
                Title (Optional)
              </label>
              <input
                type="text"
                className="form-control"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default TestimonialForm;
