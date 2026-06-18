import React, { useEffect } from "react";
import "./education.css";

const Education = () => {
  const educationData = [
    {
      title: "Full-Stack Web Development",
      date: "Mar 2025 – Oct 2025",
      institution: "Evangadi Tech Scholarship Program",
      icon: "fa-solid fa-laptop-code",
      iconColor: "#6366f1",
      status: "Completed",
      statusType: "completed",
      achievement: "Scholarship Recipient",
      description:
        "Intensive full-stack training covering modern web technologies, database management, API design, and deployment best practices through a competitive scholarship program.",
      technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Git", "REST API"],
    },
    {
      title: "MERN Stack & AI Integration",
      date: "2024 – Ongoing",
      institution: "O'Reilly Media",
      icon: "fa-solid fa-brain",
      iconColor: "#10b981",
      status: "In Progress",
      statusType: "ongoing",
      achievement: "Self-Directed",
      description:
        "Advanced study of MERN stack architecture and foundational AI/ML concepts for web integration, including hands-on projects with real-world datasets.",
      technologies: ["MongoDB", "Express", "React", "Node.js", "AI/ML Basics", "TypeScript"],
    },
    {
      title: "Full-Stack Development Program",
      date: "2024 – Ongoing",
      institution: "Gebeya Talent Academy",
      icon: "fa-solid fa-network-wired",
      iconColor: "#f59e0b",
      status: "In Progress",
      statusType: "ongoing",
      achievement: "Professional Track",
      description:
        "Professional software engineering practices including API design, DevOps fundamentals, system design, and scalable full-stack application architecture.",
      technologies: ["System Design", "DevOps", "API Design", "Full-Stack", "Agile"],
    },
    {
      title: "Full-Stack Development (DIY Program)",
      date: "2024 – Ongoing",
      institution: "Safaricom Talent Cloud",
      icon: "fa-solid fa-cloud",
      iconColor: "#8b5cf6",
      status: "In Progress",
      statusType: "ongoing",
      achievement: "Industry Partner",
      description:
        "Hands-on training focused on practical web development, cloud computing, and emerging digital technologies for building innovative projects.",
      technologies: ["Cloud Computing", "Web Dev", "Digital Innovation", "Agile"],
    },
    {
      title: "Self-Taught Web Development",
      date: "2021 – Present",
      institution: "Online Platforms & Personal Projects",
      icon: "fa-solid fa-code",
      iconColor: "#f43f5e",
      status: "Ongoing",
      statusType: "ongoing",
      achievement: "11+ Projects Built",
      description:
        "Continuous learning through freeCodeCamp, YouTube, documentation, and building real projects. This hands-on approach formed the foundation of my practical engineering skills.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "Problem Solving"],
    },
    {
      title: "Bachelor of Medical Laboratory Science",
      date: "2016 – 2021",
      institution: "Wollo University",
      icon: "fa-solid fa-microscope",
      iconColor: "#06b6d4",
      status: "Graduated",
      statusType: "completed",
      achievement: "BSc Graduate",
      description:
        "Earned a Bachelor's degree with a focus on diagnostic analysis, research methodologies, and healthcare systems. Cultivated strong analytical and data-driven thinking skills transferable to software engineering.",
      technologies: ["Research Methods", "Data Analysis", "Systematic Thinking", "Problem Solving"],
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
      { threshold: 0.12 }
    );
    const elements = document.querySelectorAll(".edu-animate");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <section id="education" className="education section section-alt">
      <div className="container">
        {/* Section Header */}
        <div className="section-header edu-animate">
          <span className="section-eyebrow">
            <i className="fa-solid fa-graduation-cap"></i> Education & Learning
          </span>
          <h2 className="section-title">
            My Learning <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            A committed path from formal academia to self-directed mastery in
            modern software development
          </p>
        </div>

        {/* Timeline */}
        <div className="edu-timeline">
          {/* Animated vertical line */}
          <div className="edu-timeline-line"></div>

          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`edu-item edu-animate ${index % 2 === 0 ? "edu-left" : "edu-right"}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Timeline dot */}
              <div
                className="edu-dot"
                style={{ "--dot-color": edu.iconColor }}
              >
                <i className={edu.icon} style={{ color: edu.iconColor }}></i>
              </div>

              {/* Card */}
              <div className="edu-card">
                {/* Card top */}
                <div className="edu-card-top">
                  <div className="edu-meta">
                    <span
                      className={`edu-status-badge edu-status-${edu.statusType}`}
                    >
                      <span className="status-dot"></span>
                      {edu.status}
                    </span>
                    <span className="edu-achievement-badge">
                      <i className="fa-solid fa-award"></i>
                      {edu.achievement}
                    </span>
                  </div>
                  <div className="edu-date">
                    <i className="fa-regular fa-calendar"></i>
                    {edu.date}
                  </div>
                </div>

                {/* Title & Institution */}
                <h3 className="edu-title">{edu.title}</h3>
                <div className="edu-institution">
                  <i className="fa-solid fa-building-columns"></i>
                  <span>{edu.institution}</span>
                </div>

                {/* Description */}
                <p className="edu-description">{edu.description}</p>

                {/* Technologies */}
                <div className="edu-tech-wrap">
                  {edu.technologies.map((tech, ti) => (
                    <span key={ti} className="edu-tech-tag">
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
};

export default Education;
