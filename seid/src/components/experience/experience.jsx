import React from "react";
import "./experience.css";

function Experience() {
  const experiences = [
    {
      title: "Full-Stack Web Developer",
      date: "2025 - Present",
      company: "Freelance & Personal Projects",
      icon: "fa-solid fa-laptop-code",
      description:
        "Designing and developing fully responsive web applications using the MERN stack (MongoDB, Express, React, Node.js). Built dynamic projects such as Netflix, Amazon, and Apple clones, implementing RESTful APIs and optimized UI/UX for performance and accessibility.",
    },
    {
      title: "Web Development Trainee",
      date: "Mar 2025 - Oct 2025",
      company: "Evangadi Tech Scholarship Program",
      icon: "fa-solid fa-graduation-cap",
      description:
        "Completed an intensive full-stack development training program. Learned and applied modern technologies including HTML5, CSS3, JavaScript (ES6+), React, Node.js, Express, and MySQL. Collaborated on team projects and practiced version control using Git and GitHub.",
    },
    {
      title: "Medical Laboratory Technologist",
      date: "2021 - Present",
      company: "Bati Primary Hospital",
      icon: "fa-solid fa-user-doctor",
      description:
        "Applied strong analytical and problem-solving skills in healthcare settings. Gained experience in teamwork, data accuracy, and process optimization — skills now transferred to software development and project management.",
    },
  ];

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Work Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <h3>
                  <i className={exp.icon}></i> {exp.title}
                </h3>
                <span className="date">{exp.date}</span>
                <p>
                  <strong>{exp.company}</strong>
                </p>
                <p>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
