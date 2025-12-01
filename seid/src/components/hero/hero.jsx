import React from "react";
import "./hero.css";
import banner from "../../../assets/image/dev1.jpg";
import Typewriter from "../Typewriter";

const Hero = () => {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      const headerHeight = 70;
      const targetPosition = contactSection.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="hero" className="hero section dark-background">
      <div className="container">
        <div className="hero-content">
          <h1 className="slide-in-bottom">
            Hi, I'm <span className="name-animate">SEID SUALEH</span>
          </h1>

          <h3 className="typed-text">
            <Typewriter />
          </h3>

          <p className="slide-in-bottom">
            I create beautiful, functional, and responsive websites that deliver
            exceptional user experiences
          </p>
          <div className="cta-buttons slide-in-bottom">
            <a
              href="../../../assets/pdf/SEID SUALEH RESUME.pdf"
              className="btn-primary"
              download="SEID SUALEH RESUME.pdf"
            >
              <i className="fa-solid fa-download "></i> Download Resume
            </a>

            <a
              href="#contact"
              className="btn-secondary"
              onClick={scrollToContact}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>

      <img src={banner} alt="" data-aos="fade-in" />
    </section>
  );
};

export default Hero;
