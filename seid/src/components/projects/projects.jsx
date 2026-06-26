import React, { useState, useEffect } from "react";
import "./project.css";
import medicareAi from "../../../assets/image/medicare-ai.png";
import hussuDrug from "../../../assets/image/hussuDrug.png";
import kitchineware from "../../../assets/image/kitchineware.jpg";
import forum from "../../../assets/image/evangadi forum.png";
import abegarage from "../../../assets/image/abe garage.jpg";
import appointmentApp from "../../../assets/image/Appointment.jpg";
import blogApp from "../../../assets/image/blog.png";
import amazon from "../../../assets/image/amazon.jpg";
import apple from "../../../assets/image/apple.png";
import netflix from "../../../assets/image/netflix.jpg";
import alpaca from "../../../assets/image/computer size.png";
import weather from "../../../assets/image/desktop-size.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState([]);

  const projects = [
    {
      title: "MediCare AI — Hospital Management System",
      description:
        "Full-stack hospital management platform with AI-powered patient triage, multi-role dashboards (Admin, Doctor, Patient), appointment scheduling, RBAC authentication, and real-time data management — deployed on Netlify.",
      image: medicareAi,
      tags: ["React", "Node.js", "Express", "MySQL", "AI Integration", "RBAC"],
      category: "Full-Stack",
      featured: true,
      badge: "AI-Powered",
      badgeColor: "#10b981",
      liveDemo: "https://medicares-ai.netlify.app/",
      github: "https://github.com/Seid-Sualeh/Hospital-Managment-System",
    },
    {
      title: "Hussu Drug Store",
      description:
        "Pharmacy inventory management system with RBAC (Admin/Guest roles), JWT authentication, live stock alerts, sales reporting, and supplier management. Built for a real pharmacy business.",
      image: hussuDrug,
      tags: ["React", "Node.js", "Express", "MySQL", "JWT", "RBAC"],
      category: "Full-Stack",
      featured: true,
      badge: "Featured",
      badgeColor: "#6366f1",
      liveDemo: "https://hussu-drug-store.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Hussu-Drug-Store",
    },
    {
      title: "Brother's Kitchenware",
      description:
        "Production e-commerce platform with product catalog, customer authentication, checkout flow, admin dashboard, real-time notifications, and multilingual support. Handles real product transactions.",
      image: kitchineware,
      tags: ["React", "Node.js", "Express", "MySQL", "REST API"],
      category: "Full-Stack",
      featured: true,
      badge: "E-Commerce",
      badgeColor: "#f59e0b",
      liveDemo: "https://brothers-kitchenware.netlify.app",
      github: "https://github.com/Seid-Sualeh/Brothers-Kitchenware",
    },
    {
      title: "Evangadi Forum",
      description:
        "AI-powered Q&A platform integrating OpenAI API to surface contextually relevant video, book, and resource suggestions per question. Full authentication, threaded discussions, and role-based moderation.",
      image: forum,
      tags: ["React.js", "Node.js", "MySQL", "OpenAI API", "JWT"],
      category: "Full-Stack",
      featured: true,
      badge: "AI-Powered",
      badgeColor: "#10b981",
      liveDemo: "https://seidforum.vercel.app",
      github: "https://github.com/Seid-Sualeh/Evangadi_Forum_Front-end",
    },
    {
      title: "Abe Garage",
      description:
        "Vehicle service management system with customer/technician/manager dashboards, work-order lifecycle tracking, vehicle history, and multi-role JWT authentication. Built for a real auto service center.",
      image: abegarage,
      tags: ["React.js", "Node.js", "Express.js", "MySQL", "JWT"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://seid-abe-garage.netlify.app",
      github: "https://github.com/Seid-Sualeh/Abe-Garage-Project",
    },
    {
      title: "My Appointment App",
      description:
        "Appointment scheduling system with calendar integration, real-time availability management, user authentication, and booking confirmation flows. Built with the MERN stack.",
      image: appointmentApp,
      tags: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://my-appointment-app-eta.vercel.app/",
      github: "https://github.com/Seid-Sualeh/My-Appointment",
    },
    {
      title: "Blog App",
      description:
        "Full-stack blogging platform with user authentication, rich text post creation, CRUD operations, comment system, and a clean reader/writer interface powered by a REST API.",
      image: blogApp,
      tags: ["React.js", "Node.js", "Express.js", "REST API", "JWT"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://seid-blog-app.vercel.app/",
      github: "https://github.com/Seid-Sualeh/my-blog-frontend",
    },
    {
      title: "Amazon Clone",
      description:
        "Full-stack Amazon replica with product browsing, Firebase authentication, cart management, and Node.js/Express backend. Demonstrates full e-commerce user flow with real-time data.",
      image: amazon,
      tags: ["React", "Firebase", "Express", "Node.js", "REST API"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://seidamazoneclone.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Amazon__Frontend",
    },
    {
      title: "Apple Website Clone",
      description:
        "Apple website replica that fetches the latest 9 YouTube videos via REST API integration, with smooth GSAP-inspired animations and a pixel-accurate responsive layout.",
      image: apple,
      tags: ["React", "Node.js", "Express.js", "REST API", "CSS3"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://seidappleclone.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Apple-Frontend",
    },
    {
      title: "Netflix Clone",
      description:
        "Responsive Netflix clone pulling dynamic content from the TMDB API — browse popular films, trending series, and watch trailers. Demonstrates API integration and component architecture.",
      image: netflix,
      tags: ["React", "CSS3", "JavaScript", "TMDB API"],
      category: "Frontend",
      featured: false,
      liveDemo: "https://seidnetflix.vercel.app/",
      github: "https://github.com/Seid-Sualeh/My-Ntflix-Project",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather application with smooth location search, animated weather icons, and live data from a weather API for any city worldwide. Fully responsive design.",
      image: weather,
      tags: ["React.js", "CSS3", "Weather API"],
      category: "Frontend",
      featured: false,
      liveDemo: "https://seid-weather-app.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Weather-App",
    },
    {
      title: "Alpaca Image Generator",
      description:
        "Interactive alpaca avatar builder where users customize appearance from multiple options. Demonstrates DOM manipulation, state management, and creative UI without a framework.",
      image: alpaca,
      tags: ["HTML5", "CSS3", "Vanilla JavaScript"],
      category: "Frontend",
      featured: false,
      liveDemo: "https://seid-image-generator-website.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Alpaca-Image-Generator",
    },
  ];

  const filters = ["All", "Full-Stack", "Frontend"];

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  // Trigger re-animation on filter change
  useEffect(() => {
    setVisible([]);
    const timer = setTimeout(() => {
      filtered.forEach((_, i) => {
        setTimeout(() => {
          setVisible((prev) => [...prev, i]);
        }, i * 60);
      });
    }, 50);
    return () => clearTimeout(timer);
  }, [activeFilter]);

  return (
    <section id="projects" className="section projects-section section-alt">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <span className="section-eyebrow">
            <i className="fa-solid fa-code-fork"></i> Portfolio
          </span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            12+ production-grade applications — full-stack, AI-integrated, and deployed with real users
          </p>
        </div>

        {/* Filter buttons */}
        <div className="project-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`filter-btn ${activeFilter === f ? "active" : ""}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
              <span className="filter-count">
                {f === "All"
                  ? projects.length
                  : projects.filter((p) => p.category === f).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((project, index) => (
            <div
              key={`${project.title}-${activeFilter}`}
              className={`project-card ${project.featured ? "featured" : ""} ${
                visible.includes(index) ? "card-visible" : ""
              }`}
              style={{ transitionDelay: `${index * 0.06}s` }}
            >
              {/* Image */}
              <div className="project-img">
                <img src={project.image} alt={project.title} loading="lazy" />
                {/* Overlay */}
                <div className="project-overlay">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn"
                    aria-label="Live Demo"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="overlay-btn overlay-btn-ghost"
                    aria-label="GitHub"
                  >
                    <i className="fab fa-github"></i>
                    GitHub
                  </a>
                </div>
                {/* Badge */}
                {project.badge ? (
                  <div
                    className="project-badge"
                    style={{ background: project.badgeColor || "var(--indigo-500)" }}
                  >
                    {project.badge === "AI-Powered" && <i className="fa-solid fa-brain"></i>}
                    {project.badge === "Featured" && <i className="fa-solid fa-star"></i>}
                    {project.badge === "E-Commerce" && <i className="fa-solid fa-cart-shopping"></i>}
                    {project.badge}
                  </div>
                ) : null}
              </div>

              {/* Info */}
              <div className="project-info">
                <div className="project-tags">
                  {project.tags.map((tag, ti) => (
                    <span key={ti} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn ghost"
                  >
                    <i className="fab fa-github"></i>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="projects-github-cta">
          <p>More projects, contributions, and open source work on GitHub</p>
          <a
            href="https://github.com/Seid-Sualeh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <i className="fab fa-github"></i>
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
