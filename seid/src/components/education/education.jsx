import React from "react";
import "./education.css";

const Education = () => {
  const educationData = [
    {
      title: "Full-Stack Web Development",
      date: "Mar 2025 - Oct 2025",
      institution: "Evangadi Tech Scholarship Program",
      icon: "fa-solid fa-laptop-code",
      description:
        "Comprehensive training in full-stack development, covering both frontend and backend technologies, database management, and deployment best practices.",
    },
    {
      title: "Self-Taught Web Development",
      date: "2021 - Present",
      institution: "Online Courses & Personal Projects",
      icon: "fa-solid fa-code",
      description:
        "Continuously learning through platforms like YouTube, freeCodeCamp, and online tutorials. Built personal projects to strengthen understanding of modern web technologies and frameworks.",
    },
    {
      title: "Medical Laboratory Science",
      date: "2016 - 2021",
      institution: "Wollo University",
      icon: "fa-solid fa-user-doctor",
      description:
        "Earned a Bachelor's degree in Medical Laboratory Science with a focus on diagnostic analysis, healthcare systems, and research methodologies.",
    },
    {
      title: "MERN Stack Development & AI Exploration",
      date: "2024 - Ongoing",
      institution: "O'Reilly Media",
      icon: "fa-solid fa-brain",
      description:
        "Exploring advanced web technologies such as the MERN stack, alongside foundational concepts in Artificial Intelligence and Machine Learning integration in web applications.",
    },
    {
      title: "Full-Stack Web Development",
      date: "2024 - Ongoing",
      institution: "Gebeya Talent Academy",
      icon: "fa-solid fa-network-wired",
      description:
        "Focused on professional software engineering practices, including API design, DevOps fundamentals, and scalable full-stack application development.",
    },
    {
      title: "Full-Stack Development Program",
      date: "2024 - Ongoing",
      institution: "Safaricom Talent Cloud X DIY Program",
      icon: "fa-solid fa-cloud",
      description:
        "Hands-on training program focused on practical web development, cloud computing, and emerging digital technologies for innovative project building.",
    },
  ];

  return (
    <section id="education" className="education section">
      <div className="container">
        <h2 className="section-title animate-on-scroll">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <div className="edu-header">
                <h3>
                  <i className={edu.icon}></i> {edu.title}
                </h3>
                <span className="date">{edu.date}</span>
              </div>
              <div className="edu-body">
                <p>
                  <strong>{edu.institution}</strong>
                </p>
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
