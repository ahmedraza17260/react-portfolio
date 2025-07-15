import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    // <IconButton
    //   onClick={() => setDarkMode((prev) => !prev)}
    //   color="inherit"
    //   size="large"
    // >
    //   {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
    // </IconButton>
    <IconButton
      onClick={() => setDarkMode((prev) => !prev)}
      sx={{
        width: "40px",
        color: "inherit",
        display: 'block', // Makes margin auto work for horizontal centering
        margin: '0 auto', // Centers horizontally
        height: "40px",
      }}
    >
      {darkMode ? (
        <Brightness7Icon sx={{ fontSize: 25 }} />
      ) : (
        <Brightness4Icon sx={{ fontSize: 25 }} />
      )}
    </IconButton>
  );
};

export default DarkModeToggle;
