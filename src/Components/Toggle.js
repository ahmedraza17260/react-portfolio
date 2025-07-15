import React, { useState } from "react";
import Toggle from "./Toggle";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme", !darkMode);
  };

  return <Toggle checked={darkMode} onChange={handleToggle} />;
};

export default DarkModeToggle;
