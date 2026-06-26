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

  const scrollToProjects = (e) => {
    e.preventDefault();
    const section = document.querySelector("#projects");
    if (section) {
      const headerHeight = 72;
      window.scrollTo({ top: section.offsetTop - headerHeight, behavior: "smooth" });
    }
  };

  const stats = [
    { value: "12+", label: "Projects Shipped" },
    { value: "3+", label: "Years Coding" },
    { value: "100%", label: "Remote-Ready" },
    { value: "Open", label: "to Hire" },
  ];

  const credPills = ["React.js", "Node.js", "REST APIs", "JWT Auth", "AI Integration", "MySQL"];

  return (
    <section id="hero" className="hero section dark-background">
      {/* Background Image */}
      <img src={banner} alt="Seid Sualeh — Full-Stack Web Developer" className="hero-bg-img" />
      {/* Overlay */}
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">
          {/* Availability pill */}
          <div className="hero-availability">
            <span className="availability-dot"></span>
            Open to Hire — Remote &amp; International
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="name-animate">SEID SUALEH</span>
          </h1>

          <h3 className="typed-text">
            <Typewriter />
          </h3>

          <p className="hero-desc">
            I am a full-stack web developer — from database schema to
            deployed UI — with security, performance, and scalability built in
            from day one.
          </p>

          {/* Credibility pills */}
          <div className="hero-cred-pills">
            {credPills.map((pill, i) => (
              <span key={i} className="hero-cred-pill">{pill}</span>
            ))}
          </div>

          <div className="cta-buttons">
            <a
              href="#projects"
              className="btn-primary"
              onClick={scrollToProjects}
            >
              <i className="fa-solid fa-folder-open"></i>
              View My Work
            </a>
            <a href="#contact" className="btn-secondary hero-contact-btn" onClick={scrollToContact}>
              Start a Project
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* Social Links */}
          <div className="hero-socials">
            <a
              href="https://github.com/Seid-Sualeh"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="hero-social-link"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/seid-sualih-92b938370/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="hero-social-link"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="../../../assets/pdf/SEID SUALEH RESUME.pdf"
              className="hero-social-link"
              download="SEID SUALEH RESUME.pdf"
              aria-label="Download Resume"
            >
              <i className="fa-solid fa-file-arrow-down"></i>
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
