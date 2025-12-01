import React from "react";
import "./service.css";

const Service = () => {
  const services = [
    {
      icon: "fas fa-laptop-code",
      title: "Web Development",
      description:
        "Building modern, responsive websites using the latest web technologies like HTML5, CSS3, JavaScript, React, and Node.js.",
    },
    {
      icon: "fas fa-mobile-alt",
      title: "Responsive Design",
      description:
        "Creating mobile-friendly designs that ensure optimal user experiences across all devices and screen sizes.",
    },
    {
      icon: "fas fa-paint-brush",
      title: "UI/UX Design",
      description:
        "Designing intuitive user interfaces and engaging user experiences that align with your brand identity and business goals.",
    },
    {
      icon: "fas fa-search",
      title: "SEO Optimization",
      description:
        "Implementing SEO best practices to improve your website's search engine rankings and increase organic traffic.",
    },
  ];

  return (
    <section id="services" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">My Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-on-scroll">
              <div className="service-icon">
                <i className={`${service.icon} icon-3d`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
