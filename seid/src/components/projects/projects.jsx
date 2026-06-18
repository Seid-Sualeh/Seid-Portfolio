import React, { useState, useEffect } from "react";
import "./project.css";
import netflix from "../../../assets/image/netflix.jpg";
import amazon from "../../../assets/image/amazon.jpg";
import apple from "../../../assets/image/apple.png";
import forum from "../../../assets/image/evangadi forum.png";
import abegarage from "../../../assets/image/abe garage.jpg";
import alpaca from "../../../assets/image/computer size.png";
import weather from "../../../assets/image/desktop-size.png";
import blogApp from "../../../assets/image/blog.png";
import appointmentApp from "../../../assets/image/Appointment.jpg";
import kitchineware from "../../../assets/image/kitchineware.jpg";
import hussuDrug from "../../../assets/image/hussuDrug.png";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visible, setVisible] = useState([]);

  const projects = [
    {
      title: "Hussu Drug Store",
      description:
        "Full-stack pharmacy inventory management with dashboard, stock tracking, sales reporting, supplier management, and role-based access control (Admin/Guest).",
      image: hussuDrug,
      tags: ["React", "Node.js", "Express", "MySQL"],
      category: "Full-Stack",
      featured: true,
      liveDemo: "https://hussu-drug-store.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Hussu-Drug-Store",
    },
    {
      title: "Brother's Kitchenware",
      description:
        "E-commerce platform with product browsing, customer authentication, checkout flow, admin dashboard, real-time notifications, and multilingual support.",
      image: kitchineware,
      tags: ["React", "Node.js", "Express", "MySQL"],
      category: "Full-Stack",
      featured: true,
      liveDemo: "https://brothers-kitchenware.netlify.app",
      github: "https://github.com/Seid-Sualeh/Brothers-Kitchenware",
    },
    {
      title: "Evangadi Forum",
      description:
        "AI-powered discussion platform with authentication, question/answer flows, and AI suggestions for videos, books, and resources per question.",
      image: forum,
      tags: ["React.js", "Node.js", "MySQL", "AI Integration"],
      category: "Full-Stack",
      featured: true,
      liveDemo: "https://seidforum.vercel.app",
      github: "https://github.com/Seid-Sualeh/Evangadi_Forum_Front-end",
    },
    {
      title: "Abe Garage",
      description:
        "Car repair and service management system. Users track vehicles, schedule services, and view maintenance history with a clean responsive UI.",
      image: abegarage,
      tags: ["React.js", "Node.js", "Express.js", "MySQL"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://seid-abe-garage.netlify.app",
      github: "https://github.com/Seid-Sualeh/Abe-Garage-Project",
    },
    {
      title: "My Appointment App",
      description:
        "Appointment scheduling with calendar integration, user authentication, real-time availability, and booking management.",
      image: appointmentApp,
      tags: ["React", "Node.js", "Express", "MongoDB"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://my-appointment-app-eta.vercel.app/",
      github: "https://github.com/Seid-Sualeh/My-Appointment",
    },
    {
      title: "Blog App",
      description:
        "Full-stack blog platform with user auth, CRUD for posts, rich text editing, and a clean reader/writer interface.",
      image: blogApp,
      tags: ["React.js", "Node.js", "Express.js", "REST API"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://seid-blog-app.vercel.app/",
      github: "https://github.com/Seid-Sualeh/my-blog-frontend",
    },
    {
      title: "Amazon Clone",
      description:
        "Full-stack Amazon replica with React frontend, Firebase authentication, Express/Node.js backend, and real-time data updates.",
      image: amazon,
      tags: ["React", "Firebase", "Express", "Node.js"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://seidamazoneclone.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Amazon__Frontend",
    },
    {
      title: "Apple Website Clone",
      description:
        "Full-stack Apple website replica that fetches the latest 9 YouTube videos via REST API integration, with smooth animations and responsive UI.",
      image: apple,
      tags: ["React", "Node.js", "Express.js", "REST API"],
      category: "Full-Stack",
      featured: false,
      liveDemo: "https://seidappleclone.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Apple-Frontend",
    },
    {
      title: "Netflix Clone",
      description:
        "Responsive Netflix clone with dynamic content from TMDB API, letting users browse and watch trailers of popular movies and shows.",
      image: netflix,
      tags: ["React", "CSS", "JavaScript", "REST API"],
      category: "Frontend",
      featured: false,
      liveDemo: "https://seidnetflix.vercel.app/",
      github: "https://github.com/Seid-Sualeh/My-Ntflix-Project",
    },
    {
      title: "Weather Forecast App",
      description:
        "Real-time weather app with responsive design, smooth animations, and live data from a weather API for any location worldwide.",
      image: weather,
      tags: ["React.js", "CSS", "REST API"],
      category: "Frontend",
      featured: false,
      liveDemo: "https://seid-weather-app.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Weather-App",
    },
    {
      title: "Alpaca Image Generator",
      description:
        "Fun alpaca illustration generator with custom options and a user-friendly responsive interface.",
      image: alpaca,
      tags: ["HTML", "CSS", "JavaScript"],
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
            11+ production-grade applications spanning full-stack, frontend, and AI integration
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
                {project.featured && (
                  <div className="featured-badge">
                    <i className="fa-solid fa-star"></i> Featured
                  </div>
                )}
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
          <p>Want to see more of my work?</p>
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
