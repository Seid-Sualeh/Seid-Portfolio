import React from "react";
import "./footer.css";

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 72;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <a
              href="#hero"
              className="logo"
              onClick={(e) => scrollToSection(e, "#hero")}
            >
              <span className="logo-mark">S</span>
              <span className="logo-name">
                <span className="logo-first">Seid</span>
                <span className="logo-last">Sualeh</span>
              </span>
            </a>
            <p className="footer-brand-desc">
              Building premium, scalable full-stack applications with elegant
              design, clean architecture, and optimized performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
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
                <a href="#experience" onClick={(e) => scrollToSection(e, "#experience")}>
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" onClick={(e) => scrollToSection(e, "#education")}>
                  Education
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => scrollToSection(e, "#projects")}>
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Legal / Contact Quick */}
          <div className="footer-links-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <ul className="footer-links-list">
              <li>
                <a href="mailto:Plshireseid@gmail.com">
                  <i className="fa-regular fa-envelope"></i> Plshireseid@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+251929075365">
                  <i className="fa-solid fa-phone"></i> +251 929 075 365
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/seid-sualih-92b938370/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin-in"></i> LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Seid-Sualeh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copy">
            <p>&copy; {currentYear} Seid Sualeh. All rights reserved.</p>
          </div>
          <div className="footer-meta">
            <p>
              Crafted with <i className="fa-solid fa-heart heart-pulse"></i> by Seid Sualeh
            </p>
          </div>
          <a
            href="#hero"
            className="back-to-top-btn"
            aria-label="Back to top"
            onClick={scrollToTop}
          >
            <i className="fa-solid fa-arrow-up"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
