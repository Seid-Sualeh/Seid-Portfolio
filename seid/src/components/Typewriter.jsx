import React, { useState, useEffect } from "react";

const Typewriter = ({
  texts = [
    "Full-Stack Web Developer",
    "MERN Stack Developer",
    "React.js Developer",
    "AI Integration Specialist",
    "Creative Problem Solver",
  ],
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1500,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const fullText = texts[textIndex];

    if (isDeleting) {
      // Deleting characters
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      }, deletingSpeed);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }, typingSpeed);
    }

    // Handle state transitions
    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className="typewriter-text">
      {currentText}
      <span className="typewriter-cursor">|</span>
    </span>
  );
};

export default Typewriter;
