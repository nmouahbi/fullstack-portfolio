import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TestingData from "./components/TestimonialForm";
import TestimonialList from "./components/TestimonialList";

import "./App.css"; // Ensure your CSS file is imported

function Portfolio() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
  const closeNav = () => setIsNavCollapsed(true);

  return (
    <Router>
      <div id="root">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/" onClick={closeNav}>
              Home
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={!isNavCollapsed ? true : false}
              aria-label="Toggle navigation"
              onClick={handleNavCollapse}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/about" onClick={closeNav}>
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/education" onClick={closeNav}>
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/experience"
                    onClick={closeNav}
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects" onClick={closeNav}>
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/skills" onClick={closeNav}>
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact" onClick={closeNav}>
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/testemonial"
                    onClick={closeNav}
                  >
                    Testimonial form
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/testemonialList"
                    onClick={closeNav}
                  >
                    Testimonial
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container-flex">
          <div className="container mt-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/education" element={<Education />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/testemonial" element={<TestingData />} />
              <Route path="/testemonialList" element={<TestimonialList />} />
            </Routes>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default Portfolio;
