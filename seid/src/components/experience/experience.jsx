import React, { useEffect } from "react";
import "./experience.css";

function Experience() {
  const experiences = [
    {
      title: "Full-Stack Software Engineer",
      date: "2025 – Present",
      company: "Freelance & Independent Projects",
      type: "Freelance",
      typeColor: "type-freelance",
      icon: "fa-solid fa-laptop-code",
      iconColor: "#6366f1",
      achievements: [
        "Engineered 12+ production-grade full-stack applications — from database schema to cloud deployment",
        "Implemented RBAC, JWT authentication, REST APIs, and SQL query optimization across all projects",
        "Built AI-integrated features using OpenAI API — shipped in the Evangadi Forum and MediCare AI projects",
        "Achieved sub-2s load times via lazy loading, code splitting, and database indexing strategies",
        "Deployed on Vercel, Netlify, and Render with CI/CD workflows and environment configuration",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "REST API", "JWT", "OpenAI API"],
    },
    {
      title: "Web Development Trainee",
      date: "Mar 2025 – Oct 2025",
      company: "Evangadi Tech Scholarship Program",
      type: "Training",
      typeColor: "type-training",
      icon: "fa-solid fa-graduation-cap",
      iconColor: "#10b981",
      achievements: [
        "Awarded a competitive full-stack scholarship among hundreds of applicants based on aptitude",
        "Mastered HTML5, CSS3, JavaScript ES6+, React, Node.js, Express.js, and MySQL in an intensive program",
        "Collaborated on team projects using Git/GitHub and agile workflows with daily standups",
        "Delivered the Evangadi Forum capstone — a live AI-powered Q&A platform used by real students",
        "Gained production mindset: error handling, input validation, environment variables, and API security",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MySQL", "Git", "REST API"],
    },
    {
      title: "Medical Laboratory Technologist",
      date: "2021 – Present",
      company: "Bati Primary Hospital",
      type: "Healthcare",
      typeColor: "type-healthcare",
      icon: "fa-solid fa-microscope",
      iconColor: "#f59e0b",
      achievements: [
        "Applied high-stakes diagnostic analysis in a clinical environment — zero margin for error mindset",
        "Managed and interpreted large diagnostic datasets — directly transferable to backend data modeling",
        "Developed disciplined processes for quality control and systematic troubleshooting",
        "Cross-functional collaboration with doctors, nurses, and administrators — agile teamwork in practice",
        "This analytical background gives my software a precision and rigor that typical bootcamp grads lack",
      ],
      technologies: ["Data Analysis", "Process Optimization", "Critical Thinking", "Systems Thinking", "Documentation"],
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
    const elements = document.querySelectorAll(".exp-animate");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="experience" className="experience section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header exp-animate">
          <span className="section-eyebrow">
            <i className="fa-solid fa-briefcase"></i> Work Experience
          </span>
          <h2 className="section-title">
            Career <span className="gradient-text">Timeline</span>
          </h2>
          <p className="section-subtitle">
            A diverse background combining technical excellence with analytical
            precision
          </p>
        </div>

        {/* Timeline */}
        <div className="exp-timeline">
          <div className="exp-timeline-line"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`exp-item exp-animate ${index % 2 === 0 ? "exp-left" : "exp-right"}`}
              style={{ transitionDelay: `${index * 0.12}s` }}
            >
              {/* Center dot */}
              <div className="exp-dot" style={{ "--dot-color": exp.iconColor }}>
                <i className={exp.icon} style={{ color: exp.iconColor }}></i>
              </div>

              {/* Card */}
              <div className="exp-card">
                {/* Card header */}
                <div className="exp-card-header">
                  <div className="exp-header-top">
                    <span className={`exp-type-badge ${exp.typeColor}`}>
                      {exp.type}
                    </span>
                    <span className="exp-date">
                      <i className="fa-regular fa-calendar-days"></i>
                      {exp.date}
                    </span>
                  </div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <div className="exp-company">
                    <i className="fa-solid fa-building"></i>
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="exp-achievements">
                  {exp.achievements.map((ach, ai) => (
                    <li key={ai} className="exp-achievement-item">
                      <i className="fa-solid fa-check-circle"></i>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="exp-tech-wrap">
                  {exp.technologies.map((tech, ti) => (
                    <span key={ti} className="exp-tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
