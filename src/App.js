// import "App.css";
import GlobalStyles, { Container } from "./globalStyles";
import { ThemeProvider } from "styled-components/macro";
import { Card, Toggle } from "./components";
import { useState } from "react";

const dark = {
  body: "#1c1e21",
  card: "#333333",
  toggle: "#333333",
  knob: "#ffffff",
  text: "lightgrey",
  hover: "rgba(228, 230, 235, 0.1)",
};

const light = {
  body: "#DADFE1",
  card: "#FFFFFF",
  toggle: "#ffffff",
  knob: "#333333",
  text: "#000",
  hover: "rgba(228, 230, 235, 0.9)",
};

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <Container>
        <GlobalStyles />
        <Toggle toggleTheme={toggleTheme} mode={theme} />
        <Card mode={theme} />
      </Container>
    </ThemeProvider>
  );
}
