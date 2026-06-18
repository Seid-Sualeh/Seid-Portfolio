import React, { useState, useEffect, useRef } from "react";
import "./header.css";
import { useTheme } from "../../hooks/useTheme";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { label: "Home", href: "#hero", id: "hero" },
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = navItems.map((item) =>
      document.querySelector(`#${item.id}`)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((sec) => sec && observer.observe(sec));
    return () => sections.forEach((sec) => sec && observer.unobserve(sec));
  }, []);

  // Code Particles Canvas Engine
  useEffect(() => {
    const canvas = document.getElementById("code-particles");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const chars = ["<", ">", "/", "{", "}", "[", "]", "1", "0", ";", "()", "=>", "&&", "||", "++"];
    const particles = [];
    const particleCount = Math.min(30, Math.floor(width / 40));

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height + height; // Start from bottom or just offscreen
        this.vy = -(Math.random() * 0.4 + 0.1); // Float upwards slowly
        this.vx = (Math.random() * 0.2 - 0.1);
        this.char = chars[Math.floor(Math.random() * chars.length)];
        this.size = Math.random() * 8 + 10; // Font size 10px to 18px
        this.alpha = Math.random() * 0.15 + 0.05; // Subtle opacity
        this.color = Math.random() > 0.5 ? "99, 102, 241" : "139, 92, 246"; // Indigo or Violet
      }

      update() {
        this.y += this.vy;
        this.x += this.vx;

        // Reset if floats off top
        if (this.y < -20 || this.x < -20 || this.x > width + 20) {
          this.reset();
          this.y = height + 20;
        }
      }

      draw() {
        ctx.fillStyle = `rgba(${this.color}, ${this.alpha})`;
        ctx.font = `500 ${this.size}px monospace`;
        ctx.fillText(this.char, this.x, this.y);
      }
    }

    // Initialize
    for (let i = 0; i < particleCount; i++) {
      const p = new Particle();
      // Distribute initial particles across height
      p.y = Math.random() * height;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 72;
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        id="header"
        className={`site-header ${isHeaderScrolled ? "scrolled" : ""}`}
      >
        <div className="container header-inner">
          {/* Logo */}
          <a
            href="#hero"
            className="logo"
            onClick={(e) => handleNavLinkClick(e, "#hero")}
          >
            <span className="logo-mark">S</span>
            <span className="logo-name">
              <span className="logo-first">Seid</span>
              <span className="logo-last">Sualeh</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.id ? "active" : ""}`}
                    onClick={(e) => handleNavLinkClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="header-actions">
            <button
              id="theme-toggle"
              className="theme-btn"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
              onClick={toggleTheme}
              title={isDarkMode ? "Light mode" : "Dark mode"}
            >
              <i className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
            </button>

            <a
              href="../../../assets/pdf/SEID SUALEH RESUME.pdf"
              className="btn-primary btn-sm header-resume-btn"
              download="SEID SUALEH RESUME.pdf"
            >
              <i className="fa-solid fa-download"></i>
              Resume
            </a>

            {/* Hamburger */}
            <button
              className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
              id="mobile-menu-button"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`} id="mobile-menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={(e) => handleNavLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="../../../assets/pdf/SEID SUALEH RESUME.pdf"
            className="btn-primary"
            download
            style={{ marginTop: "1rem", justifyContent: "center" }}
          >
            <i className="fa-solid fa-download"></i>
            Download Resume
          </a>
        </div>
      </header>
      <canvas id="code-particles" aria-hidden="true"></canvas>
    </>
  );
}

export default Header;
