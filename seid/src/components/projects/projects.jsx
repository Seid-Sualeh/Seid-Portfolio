import React from "react";
import "./project.css";
import netflix from "../../../assets/image/netflix.jpg";
import amazon from "../../../assets/image/amazon.jpg";
import apple from "../../../assets/image/apple.png";
import forum from "../../../assets/image/evangadi forum.png";
import abegarage from "../../../assets/image/abe garage.jpg";
import portfolio from "../../../assets/image/portfolio.jpeg";
import alpaca from "../../../assets/image/computer size.png";
import weather from "../../../assets/image/desktop-size.png";
import blogApp from "../../../assets/image/screencapture-seid-blog-app-vercel-app-2025-12-01-20_23_55.png";

const Projects = () => {
  const projects = [
    {
      title: "Blog App",
      description:
        "A modern, responsive blog application built with React and Node.js. Features include user authentication, CRUD operations for blog posts, rich text editing, and a clean, intuitive interface for both readers and writers.",
      image: blogApp,
      tags: [
        "React.js",
        "Node.js",
        "Express.js",
        "REST API",
        "Responsive Design",
      ],
      liveDemo: "https://seid-blog-app.vercel.app/",
      github: "https://github.com/Seid-Sualeh/my-blog-frontend",
    },
    {
      title: "Netflix-Clone",
      description:
        "A responsive Netflix clone built with React, featuring dynamic content fetching from TMDB API and allowing users to watch trailers of popular movies and TV shows.",
      image: netflix,
      tags: ["React", "CSS", "JavaScript", "Rest API"],
      liveDemo: "https://seidnetflix.vercel.app/",
      github: "https://github.com/Seid-Sualeh/My-Ntflix-Project",
    },
    {
      title: "Amazon Frontend and Backend",
      description:
        "A full-stack Amazon clone featuring a React frontend, RESTful API integration, Express/Node.js backend, and Firebase authentication and database. Includes modern UI with CSS and real-time data updates.",
      image: amazon,
      tags: ["HTML", "CSS", "RESTful API", "Express", "Node.js", "Firebase"],
      liveDemo: "https://seidamazoneclone.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Amazon__Frontend",
    },
    {
      title: "Apple Website Clone",
      description:
        "A modern, full-stack Apple website replica built using React, Node.js, Express, and MySQL. It dynamically fetches the latest nine videos from Apple's official YouTube channel through REST API integration. Designed with responsive UI and smooth animations for a real Apple-like experience.",
      image: apple,
      tags: ["React", "Node.js", "Express.js", "REST API", "MySQL"],
      liveDemo: "https://seidappleclone.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Apple-Frontend",
    },
    {
      title: "Evangadi Forum",
      description:
        "A modern discussion platform built with React.js that allows users to ask, answer, and explore questions across various topics. Features AI-powered suggestions of videos, websites, and books for each question, helping learners explore topics deeply. Includes authentication, responsive UI, and smooth dynamic interactions for an engaging learning experience.",
      image: forum,
      tags: ["React.js", "Node.js", "Express.js", "MySQL", "AI Integration"],
      liveDemo: "https://seidforum.vercel.app",
      github: "https://github.com/Seid-Sualeh/Evangadi_Forum_Front-end",
    },
    {
      title: "Abe Garage",
      description:
        "A full-featured web application for managing car repairs and services. Users can track vehicles, schedule services, and view maintenance history. Built with modern technologies for responsive UI and smooth user experience.",
      image: abegarage,
      tags: ["React.js", "Node.js", "Express.js", "MySQL", "REST API"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive portfolio website with smooth animations, dark mode toggle, and contact form functionality.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript"],
      liveDemo: "#",
      github: "#",
    },
    {
      title: "Alpaca Image Generator",
      description:
        "Alpaca image generation website that creates custom alpaca illustrations. Features include responsive design, smooth animations, and a user-friendly interface.",
      image: alpaca,
      tags: ["HTML", "CSS", "JavaScript"],
      liveDemo: "https://seid-image-generator-website.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Alpaca-Image-Generator",
    },
    {
      title: "Weather Forecast",
      description:
        "A weather forecast application that provides real-time weather updates and forecasts for any location. Features include responsive design, smooth animations, and integration with a weather API for accurate data.",
      image: weather,
      tags: ["React.js", "CSS", "RESTful API"],
      liveDemo: "https://seid-weather-app.vercel.app/",
      github: "https://github.com/Seid-Sualeh/Weather-App",
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card animate-on-scroll">
              <div className="project-img">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex}>{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.liveDemo}
                    className="btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="btn-sm secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
