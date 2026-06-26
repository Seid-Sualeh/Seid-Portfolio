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
    { name: "Tailwind CSS", icon: "fa-solid fa-wind", color: "#38bdf8" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "#7952b3" },
    { name: "UI/UX Design", icon: "fa-solid fa-paintbrush", color: "#ff4785" },
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

  const securitySkills = [
    { name: "JWT + Refresh Tokens", icon: "fa-solid fa-shield-halved", color: "#6366f1" },
    { name: "RBAC", icon: "fa-solid fa-user-shield", color: "#8b5cf6" },
    { name: "Helmet.js", icon: "fa-solid fa-helmet-safety", color: "#f59e0b" },
    { name: "Rate Limiting", icon: "fa-solid fa-gauge-high", color: "#ef4444" },
    { name: "CORS", icon: "fa-solid fa-network-wired", color: "#14b8a6" },
    { name: "bcrypt", icon: "fa-solid fa-lock", color: "#64748b" },
    { name: "Input Validation", icon: "fa-solid fa-filter", color: "#22c55e" },
  ];

  const aiAndCloud = [
    { name: "OpenAI API", icon: "fa-solid fa-brain", color: "#10b981" },
    { name: "AI Integration", icon: "fa-solid fa-microchip", color: "#818cf8" },
    { name: "Vercel", icon: "fa-solid fa-triangle", color: "#000" },
    { name: "Netlify", icon: "fa-solid fa-cloud", color: "#00c7b7" },
    { name: "Render", icon: "fa-solid fa-server", color: "#46e3b7" },
    { name: "GitHub Actions", icon: "fab fa-github", color: "#333" },
  ];

  const tools = [
    { name: "Git", icon: "fa-brands fa-git-alt", color: "#f05032" },
    { name: "GitHub", icon: "fa-brands fa-github", color: "#333" },
    { name: "Figma", icon: "fa-brands fa-figma", color: "#f24e1e" },
    { name: "VS Code", icon: "fa-solid fa-code", color: "#007acc" },
    { name: "Postman", icon: "fa-solid fa-satellite-dish", color: "#ff6c37" },
    { name: "npm", icon: "fa-brands fa-npm", color: "#cb3837" },
  ];

  const credentials = [
    {
      icon: "fa-solid fa-shield-halved",
      title: "Security-First",
      desc: "JWT, RBAC, bcrypt, Helmet, rate limiting on every production build",
      color: "#6366f1",
    },
    {
      icon: "fa-solid fa-bolt",
      title: "Performance-Driven",
      desc: "Lazy loading, code splitting, SQL indexing, sub-2s load targets",
      color: "#f59e0b",
    },
    {
      icon: "fa-solid fa-brain",
      title: "AI-Ready",
      desc: "OpenAI API integration, AI-powered features shipped in production",
      color: "#10b981",
    },
    {
      icon: "fa-solid fa-globe",
      title: "Remote-Ready",
      desc: "Asynchronous collaboration, Git workflows, English documentation",
      color: "#22d3ee",
    },
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
            Engineered for <span className="gradient-text">Production</span>
          </h2>
          <p className="section-subtitle">
            Not a tutorial builder. A production engineer who ships real applications with real users.
          </p>
        </div>

        <div className="about-layout">
          {/* Image Column */}
          <div className="about-image-col animate-on-scroll from-left">
            <div className="about-image-wrapper">
              <img src={image} alt="Seid Sualeh — Full-Stack Software Engineer" />
              {/* Floating badges */}
              <div className="about-badge badge-top-right">
                <i className="fab fa-react"></i>
                <span>MERN Engineer</span>
              </div>
              <div className="about-badge badge-bottom-left">
                <i className="fa-solid fa-code-branch"></i>
                <span>12+ Projects Shipped</span>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="about-text-col">
            <div className="animate-on-scroll from-right">
              <h3 className="about-greeting">
                Full-Stack Software Engineer &amp; Systems Thinker
              </h3>
              <p className="about-bio">
                I'm a <strong>production-ready Full-Stack Software Engineer</strong>{" "}
                specializing in React, Node.js, and AI-integrated systems. I've shipped
                12+ applications with real authentication, REST APIs, database design,
                role-based access control, and cloud deployment — not just tutorials or
                demo projects.
              </p>
              <p className="about-bio">
                My background in <strong>Medical Laboratory Science</strong> trained me
                to be methodical, precise, and data-driven — exactly the mindset I bring
                to software engineering. I design systems that are secure by default,
                optimized for scale, and built for real business outcomes.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Ships production code with security, logging, and error handling</span>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Proficient in RBAC, JWT, REST APIs, and SQL query optimization</span>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>Available for remote teams globally — async-first communication</span>
                </div>
                <div className="highlight-item">
                  <i className="fa-solid fa-check-circle"></i>
                  <span>AI integration experience — OpenAI, Gemini, prompt engineering</span>
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

            {/* What I bring credentials */}
            <div className="credentials-grid animate-on-scroll">
              {credentials.map((cred, i) => (
                <div key={i} className="credential-card" style={{ "--cred-color": cred.color }}>
                  <div className="credential-icon-box">
                    <i className={cred.icon} style={{ color: cred.color }}></i>
                  </div>
                  <div>
                    <h4 className="credential-title">{cred.title}</h4>
                    <p className="credential-desc">{cred.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="skills-section animate-on-scroll">
              <div className="skills-header-row">
                <i className="fa-solid fa-layer-group"></i>
                <h3>Technical Stack</h3>
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
                  title="Security"
                  icon="fa-solid fa-shield-halved"
                  skills={securitySkills}
                />
                <SkillGroup
                  title="AI &amp; Cloud"
                  icon="fa-solid fa-cloud"
                  skills={aiAndCloud}
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
