import React, { useState } from "react";
import axios from "axios";
import "../styles/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        `${process.env.REACT_APP_API_URL}/contact`,
        formData
      );
      if (response.status === 201) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact">
      <div className="title-container">
        <h2 className="title">Contact</h2>
        <p className="subtitle">We'd love to hear from you!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h3>Get in Touch</h3>

          <p>
            <a href="tel:+13218778474">Phone: (321) 877-8474</a>
          </p>
          <p>
            <a href="mailto:mouahbi@orlandofullstack.tech">
              Email: mouahbi@orlandofullstack.tech
            </a>
          </p>
          <p>
            <a
              href="https://www.google.com/maps/place/Orlando,+FL/@28.4808175,-81.6544897,11z/data=!3m1!4b1!4m6!3m5!1s0x88e773d8fecdbc77:0xac3b2063ca5bf9e!8m2!3d28.5383832!4d-81.3789269!16zL20vMHBseTA?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
            >
              Address: Orlando,32821
            </a>
          </p>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
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
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
