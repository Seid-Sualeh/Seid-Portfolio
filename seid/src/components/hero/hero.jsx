import React from "react";
import "./hero.css";
import banner from "../../../assets/image/seid.jpg";
import Typewriter from "../Typewriter";

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const headerHeight = 72;
      const targetPosition = contactSection.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  const stats = [
    { value: "11+", label: "Projects Shipped" },
    { value: "5+", label: "Technologies Mastered" },
    { value: "1+", label: "Year Experience" },
    { value: "Open", label: "To Work" },
  ];

  return (
    <section id="hero" className="hero section dark-background">
      {/* Background Image */}
      <img src={banner} alt="Seid Sualeh — Full-Stack Developer" className="hero-bg-img" />
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Availability pill */}
          <div className="hero-availability">
            <span className="availability-dot"></span>
            Available for freelance &amp; full-time
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-animate">SEID SUALEH</span>
          </h1>

          <h3 className="typed-text">
            <Typewriter />
          </h3>

          <p className="hero-desc">
            I build fast, beautiful, and scalable web applications that deliver
            exceptional user experiences — from pixel-perfect frontends to robust
            backend systems.
          </p>

          <div className="cta-buttons">
            <a
              href="../../../assets/pdf/SEID SUALEH RESUME.pdf"
              className="btn-primary"
              download="SEID SUALEH RESUME.pdf"
            >
              <i className="fa-solid fa-download"></i>
              Download Resume
            </a>
            <a href="#contact" className="btn-secondary hero-contact-btn" onClick={scrollToContact}>
              Let's Talk
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href="https://github.com/Seid-Sualeh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hero-social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/seid-sualih-92b938370/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hero-social-link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="hero-stats">
          {stats.map((stat, i) => (
            <div key={i} className="hero-stat-item">
              <span className="hero-stat-value">{stat.value}</span>
              <span className="hero-stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
