import { useState } from "react";
import Header from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import { dark, light, GlobalStyles } from "./themes";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyles />
      <Header toggle={toggleTheme} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
