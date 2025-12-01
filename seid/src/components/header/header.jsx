import React, { useState, useEffect } from "react";
import "./header.css";
import { useTheme } from "../../hooks/useTheme";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerHeight = 70; // Approximate header height
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
      closeMobileMenu();
    }
  };

  return (
    <>
      <header
        id="header"
        className={isHeaderScrolled ? "scrolled" : ""}
        style={{
          padding: isHeaderScrolled ? "0.5rem 0" : "1rem 0",
          boxShadow: isHeaderScrolled
            ? "0 5px 20px rgba(0, 0, 0, 0.1)"
            : "0 1px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="container">
          <div className="logo">
            <a href="#hero" onClick={(e) => handleNavLinkClick(e, "#hero")}>
              <span className="highlight">SEID </span>SUALEH
            </a>
          </div>
          <nav>
            <ul className="nav-links">
              <li>
                <a href="#hero" onClick={(e) => handleNavLinkClick(e, "#hero")}>
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavLinkClick(e, "#about")}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavLinkClick(e, "#projects")}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavLinkClick(e, "#services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavLinkClick(e, "#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
            <button
              id="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              <i
                className={`fa-solid ${isDarkMode ? "fa-sun" : "fa-moon"}`}
              ></i>
            </button>
            <div
              className={`mobile-menu-button ${
                isMobileMenuOpen ? "active" : ""
              }`}
              id="mobile-menu-button"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              onClick={toggleMobileMenu}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </nav>
        </div>
        <div
          className={`mobile-menu ${isMobileMenuOpen ? "active" : "hidden"}`}
          id="mobile-menu"
        >
          <ul>
            <li>
              <a href="#hero" onClick={(e) => handleNavLinkClick(e, "#hero")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavLinkClick(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavLinkClick(e, "#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleNavLinkClick(e, "#services")}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavLinkClick(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </header>
      <canvas id="code-particles" aria-hidden="true"></canvas>
    </>
  );
}

export default Header;
