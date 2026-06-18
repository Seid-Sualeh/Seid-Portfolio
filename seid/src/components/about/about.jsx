import React, { useEffect, useRef } from "react";
import image from "../../../assets/image/seid.jpg";
import "./about.css";

const About = () => {
  const sectionRef = useRef(null);

  const frontendSkills = [
    { name: "HTML5", icon: "fab fa-html5", color: "#e34f26" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "#264de4" },
    { name: "JavaScript", icon: "fab fa-js", color: "#f7df1e" },
    { name: "TypeScript", icon: "fab fa-js", color: "#3178c6", label: "TS" },
    { name: "React.js", icon: "fab fa-react", color: "#61dafb" },
    { name: "Next.js", icon: "fab fa-react", color: "#000000", label: "N" },
    { name: "Tailwind", icon: "fa-solid fa-wind", color: "#38bdf8" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
    { name: "UI/UX Design", icon: "fa-solid fa-paintbrush", color: "#ff4785" },
    { name: "NPM", icon: "fa-brands fa-npm", color: "#cb3837" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "fab fa-node", color: "#339933" },
    { name: "Express.js", icon: "fa-solid fa-server", color: "#404d59" },
    { name: "MySQL", icon: "fas fa-database", color: "#4479a1" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "#47a248" },
    { name: "REST API", icon: "fa-solid fa-plug", color: "#10b981" },
    { name: "Firebase", icon: "fa-brands fa-google", color: "#ffca28" },
    { name: "JWT Auth", icon: "fa-solid fa-key", color: "#f59e0b" },
  ];

  const tools = [
    { name: "Git", icon: "fa-brands fa-git-alt", color: "#f05032" },
    { name: "GitHub", icon: "fa-brands fa-github", color: "#333" },
    { name: "Figma", icon: "fa-brands fa-figma", color: "#f24e1e" },
    { name: "VS Code", icon: "fa-solid fa-code", color: "#007acc" },
    { name: "Postman", icon: "fa-solid fa-satellite-dish", color: "#ff6c37" },
    { name: "Chrome DevTools", icon: "fa-brands fa-chrome", color: "#4285f4" },
  ];

  // Scroll-triggered reveal
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

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const SkillTag = ({ skill, index }) => (
    <span
      className="skill-pill"
      style={{ "--accent": skill.color, animationDelay: `${index * 0.04}s` }}
    >
      <i
        className={skill.icon}
        style={{ color: skill.color, fontSize: "0.9rem" }}
      ></i>
      <span>{skill.name}</span>
    </span>
  );

  const SkillGroup = ({ title, skills, icon }) => (
    <div className="skill-group animate-on-scroll">
      <div className="skill-group-header">
        <i className={icon}></i>
        <h4>{title}</h4>
      </div>
      <div className="skill-pills-wrap">
        {skills.map((skill, i) => (
          <SkillTag key={i} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );

  return (
    <section id="about" className="section about-section" ref={sectionRef}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header animate-on-scroll">
          <span className="section-eyebrow">
            <i className="fa-solid fa-user"></i> About Me
          </span>
          <h2 className="section-title">
            The Developer <span className="gradient-text">Behind the Code</span>
          </h2>
          <p className="section-subtitle">
            Passionate about building products that make a difference
          </p>
        </div>

        <div className="about-layout">
          {/* Image Column */}
          <div className="about-image-col animate-on-scroll from-left">
            <div className="about-image-wrapper">
              <img src={image} alt="Seid Sualeh — Full-Stack Developer" />
              {/* Floating badges */}
              <div className="about-badge badge-top-right">
                <i className="fab fa-react"></i>
                <span>React Dev</span>
              </div>
              <div className="about-badge badge-bottom-left">
                <i className="fa-solid fa-code-branch"></i>
                <span>11+ Projects</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="about-text-col">
            <div className="animate-on-scroll from-right">
              <h3 className="about-greeting">
                Full-Stack Developer &amp; Problem Solver
              </h3>
              <p className="about-bio">
                I'm a <strong>Full-Stack Web Developer</strong> with hands-on
                experience building 11+ production-grade applications using the
                MERN stack and modern web technologies. My journey started with
                self-teaching HTML and CSS in 2021, and has rapidly evolved into
                delivering complete, deployable solutions for real-world
                problems.
              </p>
              <p className="about-bio">
                What makes me stand out is my unique background — combining
                analytical precision from Medical Laboratory Science with
                creative problem-solving in software development. I thrive on
                turning complex challenges into elegant, user-friendly digital
                experiences.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fa-solid fa-bolt"></i>
                  <span>Fast learner — from zero to MERN stack in 2 years</span>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-globe"></i>
                  <span>Open to remote, freelance, and full-time roles</span>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-heart"></i>
                  <span>Passionate about clean code &amp; great UX</span>
                </div>
              </div>

              <div className="about-cta-row">
                <a
                  href="../../../assets/pdf/SEID SUALEH RESUME.pdf"
                  className="btn-primary"
                  download="SEID SUALEH RESUME.pdf"
                >
                  <i className="fa-solid fa-download"></i>
                  Download Resume
                </a>
                <a
                  href="https://github.com/Seid-Sualeh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <i className="fab fa-github"></i>
                  GitHub Profile
                </a>
              </div>
            </div>

            {/* Skills */}
            <div className="skills-section animate-on-scroll">
              <div className="skills-header-row">
                <i className="fa-solid fa-layer-group"></i>
                <h3>Technical Skills</h3>
              </div>
              <div className="skills-grid">
                <SkillGroup
                  title="Frontend"
                  icon="fa-solid fa-palette"
                  skills={frontendSkills}
                />
                <SkillGroup
                  title="Backend"
                  icon="fa-solid fa-server"
                  skills={backendSkills}
                />
                <SkillGroup
                  title="Tools"
                  icon="fa-solid fa-toolbox"
                  skills={tools}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
