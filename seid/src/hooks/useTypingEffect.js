import { useState, useEffect } from "react";

export const useTypingEffect = (
  texts,
  typingSpeed = 120,
  deletingSpeed = 50,
  pauseAfter = 1000
) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentTextFull = texts[currentTextIndex];

        if (isTyping) {
          // Typing
          if (currentText.length < currentTextFull.length) {
            setCurrentText(
              currentTextFull.substring(0, currentText.length + 1)
            );
          } else {
            // Finished typing current text, start deleting after pause
            setIsTyping(false);
            setTimeout(() => setIsDeleting(true), pauseAfter);
          }
        } else if (isDeleting) {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            // Finished deleting, move to next text
            setIsDeleting(false);
            setCurrentTextIndex((prev) => (prev + 1) % texts.length);
            setIsTyping(true);
          }
        }
      },
      isTyping ? typingSpeed : deletingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentTextIndex,
    texts,
    isTyping,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseAfter,
  ]);

  return {
    currentText,
    currentTextIndex,
    isTyping,
    isDeleting
  };
};
