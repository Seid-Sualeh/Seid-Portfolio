import React, { useState, useEffect } from "react";
import image from "../../../assets/image/seid.jpg";
import "./about.css";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  const frontendSkills = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-gradient-orange" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-gradient-blue" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-gradient-yellow" },
    {
      name: "TypeScript",
      icon: "fab fa-js",
      color: "text-gradient-blue",
      custom: true,
    },
    {
      name: "Bootstrap5",
      icon: "fab fa-bootstrap",
      color: "text-gradient-purple",
    },
    { name: "Tailwind", icon: "fa-solid fa-wind", color: "text-gradient-cyan" },
    { name: "React.js", icon: "fab fa-react", color: "text-gradient-cyan" },
    {
      name: "Next.js",
      icon: "fab fa-js",
      color: "text-gradient-dark",
      custom: true,
    },
    {
      name: "UI/UX Design",
      icon: "fa-solid fa-paintbrush",
      color: "text-gradient-pink",
    },
    { name: "NPM", icon: "fa-brands fa-npm", color: "text-gradient-red" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "fab fa-node", color: "text-gradient-green" },
    {
      name: "Express.js",
      icon: "fa-solid fa-server",
      color: "text-gradient-slate",
    },
    { name: "MySQL", icon: "fas fa-database", color: "text-gradient-blue" },
    { name: "MongoDB", icon: "fas fa-leaf", color: "text-gradient-green" },
    {
      name: "Rest API",
      icon: "fa-solid fa-plug",
      color: "text-gradient-green",
    },
    {
      name: "Firebase",
      icon: "fa-brands fa-firebase",
      color: "text-gradient-orange",
    },
    { name: "JWT", icon: "fa-solid fa-key", color: "text-gradient-orange" },
  ];

  const tools = [
    {
      name: "Figma",
      icon: "fa-brands fa-figma",
      color: "text-gradient-orange",
    },
    { name: "Git", icon: "fa-brands fa-git-alt", color: "text-gradient-red" },
    {
      name: "GitHub",
      icon: "fa-brands fa-github",
      color: "text-gradient-slate",
    },
    { name: "VS Code", icon: "fa-solid fa-code", color: "text-gradient-blue" },
    {
      name: "Chrome DevTools",
      icon: "fa-brands fa-chrome",
      color: "text-gradient-cyan",
    },
    {
      name: "Postman",
      icon: "fa-brands fa-npm",
      color: "text-gradient-orange",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const SkillBadge = ({ skill, index }) => {
    const getIconElement = (skill) => {
      if (skill.custom) {
        if (skill.name === "TypeScript") {
          return (
            <div className="custom-icon">
              <span className="ts-text">TS</span>
            </div>
          );
        }
        if (skill.name === "Next.js") {
          return (
            <div className="custom-icon">
              <span className="nextjs-text">N</span>
            </div>
          );
        }
      }
      return <i className={`${skill.icon} ${skill.color}`}></i>;
    };

    return (
      <span
        className="skill-badge"
        style={{
          transitionDelay: `${index * 0.05}s`,
          animationDelay: `${index * 0.05}s`,
          "--i": index,
        }}
      >
        {getIconElement(skill)}
        <span>{skill.name}</span>
      </span>
    );
  };

  const SkillSection = ({ title, skills }) => (
    <div className="skill-tags">
      <h3 className="section-title">{title}</h3>
      <div className="skills-horizontal">
        {skills.map((skill, index) => (
          <SkillBadge key={`${title}-${index}`} skill={skill} index={index} />
        ))}
      </div>
      <br />
    </div>
  );

  return (
    <section id="about" className="section">
      <div className="container">
        <h2
          className={`section-title animate-on-scroll ${
            isVisible ? "fade-in" : ""
          }`}
        >
          About Me
        </h2>
        <div className="about-content">
          <div
            className={`about-image animate-on-scroll ${
              isVisible ? "zoom-in" : ""
            }`}
          >
            <img src={image} alt="seid photo" />
          </div>
          <div
            className={`about-text animate-on-scroll ${
              isVisible ? "slide-in-right" : ""
            }`}
          >
            <p>
              I'm a passionate <span>Full-Stack Web Developer</span> in training
              with a strong foundation in both frontend and backend
              technologies, and a background in the health sector. My journey
              began with self-learning HTML, CSS, and JavaScript, and I am now
              advancing into modern frameworks like React, Node.js, and MySQL
              through the Evangadi scholarship program.
            </p>
            <p>
              I love creating beautiful, functional, and responsive websites
              that deliver exceptional user experiences. My long-term goal is to
              use technology to create digital solutions that benefit my
              community and open opportunities for others. I'm always eager to
              learn new technologies, improve my skills, and share knowledge
              with others. Outside of coding, I enjoy exploring educational
              technology and continuous learning.
            </p>

            <div className="skills">
              <h2 className="section-title text-center">💻 My Skills</h2>
              <br />

              <div className="skills-container">
                <SkillSection title="Frontend" skills={frontendSkills} />
                <SkillSection title="Backend" skills={backendSkills} />
                <SkillSection title="Tools" skills={tools} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
