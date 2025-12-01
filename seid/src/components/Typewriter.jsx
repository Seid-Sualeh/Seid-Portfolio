import React, { useRef, useEffect } from "react";

const Typewriter = ({
  texts = [
    "Front-End Web Developer.",
    "Full-Stack Web Developer.",
    "MERN Stack Developer.",
    "React.js Developer.",
    "AI Integration Specialist.",
    "Problem Solver.",
    "Quick Learner.",
  ],
  colors = [
    "#ff4d4d",
    "#4dff4d",
    "#4dd2ff",
    "#ffd24d",
    "#b84dff",
    "#ff6b6b",
    "#4ecdc4",
    "#45b7d1",
    "#96ceb4",
    "#ffeaa7",
    "#dda0dd",
    "#98d8c8",
    "#f7dc6f",
    "#bb8fce",
    "#85c1e9",
    "#f8c471",
    "#82e0aa",
    "#f1948a",
    "#aed6f1",
    "#d2b4de",
    "#a3e4d7",
    "#f9e79f",
    "#d5a6bd",
    "#85c1e9",
    "#f7dc6f",
  ],
  typingSpeed = 120,
  deletingSpeed = 50,
  pauseTime = 1000,
}) => {
  const typedTextRef = useRef(null);

  // State variables for typing effect
  const textIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  const typeEffect = () => {
    if (!typedTextRef.current) {
      // Retry after a short delay if ref is not ready
      setTimeout(typeEffect, 50);
      return;
    }

    const currentText = texts[textIndexRef.current];
    typedTextRef.current.innerHTML = "";

    for (let i = 0; i < charIndexRef.current; i++) {
      const char = currentText[i];
      const span = document.createElement("span");

      // Handle special characters and spaces
      if (char === " ") {
        span.innerHTML = "&nbsp;";
      } else {
        span.textContent = char;
      }

      // Assign color based on position in the current text
      span.style.color = colors[i % colors.length];
      span.style.fontWeight = "700";
      span.style.display = "inline-block";
      span.style.marginRight = "0.5px";

      typedTextRef.current.appendChild(span);
    }

    if (!isDeletingRef.current && charIndexRef.current < currentText.length) {
      charIndexRef.current += 1;
      setTimeout(typeEffect, typingSpeed);
    } else if (isDeletingRef.current && charIndexRef.current > 0) {
      charIndexRef.current -= 1;
      setTimeout(typeEffect, deletingSpeed);
    } else {
      if (!isDeletingRef.current) {
        isDeletingRef.current = true;
        setTimeout(typeEffect, pauseTime);
      } else {
        isDeletingRef.current = false;
        textIndexRef.current = (textIndexRef.current + 1) % texts.length;
        setTimeout(typeEffect, 300);
      }
    }
  };

  useEffect(() => {
    // Small delay to ensure DOM element is mounted
    const timer = setTimeout(() => {
      typeEffect();
    }, 100);

    return () => clearTimeout(timer);
  }, []); // Run only once on mount

  return (
    <span id="typed" className="typewriter-text" ref={typedTextRef}></span>
  );
};

export default Typewriter;
