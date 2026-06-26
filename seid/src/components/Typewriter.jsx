import React, { useState, useEffect } from "react";

const Typewriter = ({
  texts = [
    "React Developer",
    "Node.js Developer",
    "Express.js Developer",
    "MySQL Database Engineer",
    "Backend Systems Engineer",
    "AI Integration Specialist",
    "Production Deployment Engineer",
  ],
  typingSpeed = 75,
  deletingSpeed = 35,
  pauseTime = 2000,
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
    <>
      <span className="typewriter-text">{currentText}</span>
      <span className="typewriter-cursor">|</span>
    </>
  );
};

export default Typewriter;
