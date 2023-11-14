// AutoTypeText.js

import React, { useState, useEffect } from 'react';


const AutoTypeText = () => {
  const [textToType, setTextToType] = useState("  Associate Software Engineer - Mern");
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedText((prevText) => prevText + textToType[index]);
      index = (index + 1) % textToType.length; // Loop through the text

      if (index === 0) {
        setDisplayedText(""); // Clear the displayed text after completing a cycle
      }
    }, 150); // Adjust the typing speed (milliseconds)

    // Clear the interval on component unmount to avoid memory leaks
    return () => clearInterval(typingInterval);
  }, [textToType]);

  return (
    <div className="auto-type-text" style={{ color: 'white' }}>{displayedText}</div>
  );
};

export default AutoTypeText;
