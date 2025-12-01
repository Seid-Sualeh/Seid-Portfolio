import React from "react";
import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 70;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer id="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")}>
              <span className="highlight">Seid</span>Sualeh
            </a>
            <p>
              Web Developer
              <br />
              Creating beautiful web experiences that are user-friendly.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#hero" onClick={(e) => scrollToSection(e, "#hero")}>
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, "#about")}>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => scrollToSection(e, "#projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => scrollToSection(e, "#services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => scrollToSection(e, "#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Seid Sualeh. All rights reserved.</p>
          <p>Designed by Seid Sualeh</p>
          <a
            href="#hero"
            className="back-to-top"
            aria-label="Back to top"
            onClick={scrollToTop}
          >
            <i className="fas fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
