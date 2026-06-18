import React, { useEffect } from "react";
import "./experience.css";

function Experience() {
  const experiences = [
    {
      title: "Full-Stack Web Developer",
      date: "2025 – Present",
      company: "Freelance & Personal Projects",
      type: "Freelance",
      typeColor: "type-freelance",
      icon: "fa-solid fa-laptop-code",
      iconColor: "#6366f1",
      achievements: [
        "Designed and shipped 11+ full-stack web applications using the MERN stack",
        "Built pharmacy management system, e-commerce platforms, and AI-integrated forum",
        "Implemented RESTful APIs, authentication flows, and optimized database schemas",
        "Achieved sub-2s load times through performance optimization and lazy loading",
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "REST API", "JWT"],
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
        "Selected for competitive full-stack scholarship among hundreds of applicants",
        "Mastered HTML5, CSS3, JavaScript ES6+, React, Node.js, and MySQL",
        "Collaborated on team projects using Git/GitHub and agile workflows",
        "Delivered the Evangadi Forum project with AI-powered learning suggestions",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "MySQL", "Git"],
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
        "Applied rigorous analytical and diagnostic skills in a high-stakes healthcare environment",
        "Developed strong attention to detail, data accuracy, and process optimization habits",
        "Gained cross-functional teamwork experience directly applicable to software engineering",
        "Managed and interpreted large datasets — a skill set now leveraged in backend development",
      ],
      technologies: ["Data Analysis", "Process Optimization", "Teamwork", "Critical Thinking"],
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
