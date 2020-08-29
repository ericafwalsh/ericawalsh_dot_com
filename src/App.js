import React from "react";
import { ThemeProvider } from "styled-components";

import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import DarkModeToggle from "./components/DarkModeToggle/DarkModeToggle";
import { useDarkMode } from "./components/DarkModeToggle/useDarkMode";

const App = () => {
  const [theme, themeToggler] = useDarkMode(),
    themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <DarkModeToggle theme={theme} toggleTheme={themeToggler} />
      <Main />
      <Header />
    </ThemeProvider>
  );
};

export default App;
