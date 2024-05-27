import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faFacebook,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="navbar navbar-dark bg-dark mt-5">
      <div className="container d-flex justify-content-center align-items-center py-3">
        <span className="text-light me-4">
          &copy; 2024 Nabil Mouahbi. All Rights Reserved.
        </span>

        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/nabil-m-08500283/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="https://www.facebook.com/nabil.mouahbi1?mibextid=LQQJ4d"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://twitter.com/YOUR_TWITTER_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a
            href="https://github.com/nmouahbi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-light mx-2"
          >
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
