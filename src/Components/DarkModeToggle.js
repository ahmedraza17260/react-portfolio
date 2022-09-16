import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { Paper } from "@mui/material";

import { useState } from "react";
import { IconButton } from "@mui/material";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div>
          <IconButton
            id="dark-mode"
            onClick={() => {
              setDarkMode(!darkMode);
            }}
            {...(theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            ))}
          ></IconButton>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default DarkModeToggle;

// ---------------------------------------------------------------------------------------------

// import React from "react";

// import Toggle from "./Toggle";
// import useDarkMode from "use-dark-mode";

// const DarkModeToggle = () => {
// // const darkMode = useDarkMode(false);

// return (
// <div>
// <div className="dark-mode-toggle">
//   <button type="button" onClick={darkMode.disable}>
//     ☀ <ion-icon name="sunny-outline"></ion-icon>
//   </button>
//   <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
//   <button type="button" onClick={darkMode.enable}>
//     ☾ <ion-icon name="moon-outline"></ion-icon>
//   </button>
// </div>
// );
// };

// export default DarkModeToggle;

// // import * as React from "react";
// // import * as ReactDOM from "react-dom";
// // import { DarkModeSwitch } from "react-toggle-dark-mode";

// // const DarkModeToggle = () => {
//   // const [isDarkMode, setDarkMode] = React.useState(false);
//   // const darkMode = useDarkMode(false);

//   // const defaultProperties = {
//   //   dark: {
//   //     circle: {
//   //       r: 9,
//   //     },
//   //     mask: {
//   //       cx: "50%",
//   //       cy: "23%",
//   //     },
//   //     svg: {
//   //       transform: "rotate(40deg)",
//   //     },
//   //     lines: {
//   //       opacity: 0,
//   //     },
//   //   },
//   //   light: {
//   //     circle: {
//   //       r: 5,
//   //     },
//   //     mask: {
//   //       cx: "100%",
//   //       cy: "0%",
//   //     },
//   //     svg: {
//   //       transform: "rotate(90deg)",
//   //     },
//   //     lines: {
//   //       opacity: 1,
//   //     },
//   //   },
//   //   springConfig: { mass: 4, tension: 250, friction: 35 },
//   // };
//   // const toggleDarkMode = (checked: boolean) => {
//   //   setDarkMode(checked);
//   // };

//   // return (
//     // <div className="dark-mode-toggle">
//       {/* <button type="button" onClick={darkMode.disable}>
//         ☀ <ion-icon name="sunny-outline"></ion-icon>
//       </button>
//       <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
//       <button type="button" onClick={darkMode.enable}>
//         ☾ <ion-icon name="moon-outline"></ion-icon>
//       </button> */}
//     // </div>
//     // <DarkModeSwitch
//     //   style={{ marginBottom: "2rem" }}
//     //   checked={isDarkMode}
//     //   onChange={toggleDarkMode}
//     //   size={120}
//     // />
//   // );
// // };
// // export default DarkModeToggle;
