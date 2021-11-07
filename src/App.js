import "App.css";
import { Card, Toggle } from "./components";
import { useState } from "react";

export default function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.setAttribute("data-theme", "light");
    }
  };

  return (
    <div className="container">
      <Toggle toggleTheme={toggleTheme} mode={theme} />
      <Card mode={theme} />
    </div>
  );
}
