import React, { useEffect } from "react";
import "./service.css";

const Service = () => {
  const services = [
    {
      icon: "fa-solid fa-laptop-code",
      title: "Full-Stack Development",
      tag: "Modern Apps",
      description:
        "Building scalable, highly-interactive web applications using React, Node.js, Express, and modern databases like MySQL and MongoDB.",
    },
    {
      icon: "fa-solid fa-mobile-screen-button",
      title: "Responsive Design",
      tag: "Mobile-First",
      description:
        "Crafting fluid, responsive user interfaces that adapt seamlessly to all device screens — from mobile phones to high-resolution desktops.",
    },
    {
      icon: "fa-solid fa-wand-magic-sparkles",
      title: "UI/UX & Prototyping",
      tag: "Premium Look",
      description:
        "Designing intuitive user experiences and premium visual interfaces with custom CSS animations, modern layouts, and clean typography.",
    },
    {
      icon: "fa-solid fa-arrow-trend-up",
      title: "SEO & Performance Optimization",
      tag: "Fast & Findable",
      description:
        "Implementing technical SEO, schema markup, image optimization, and advanced performance tuning to ensure high search rankings and sub-2s load times.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = document.querySelectorAll(".srv-animate");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="services" className="services-section section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header srv-animate">
          <span className="section-eyebrow">
            <i className="fa-solid fa-cubes"></i> Services
          </span>
          <h2 className="section-title">
            What I <span className="gradient-text">Deliver</span>
          </h2>
          <p className="section-subtitle">
            High-performance solutions designed to elevate your digital presence
            and scale your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card srv-animate"
              style={{ transitionDelay: `${index * 0.08}s` }}
            >
              <div className="service-card-glow"></div>
              
              <div className="service-header-row">
                <div className="service-icon-box">
                  <i className={service.icon}></i>
                </div>
                <span className="service-tag">{service.tag}</span>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.description}</p>
              
              <div className="service-footer">
                <span className="service-learn-more">
                  Learn more
                  <i className="fa-solid fa-arrow-right-long"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
