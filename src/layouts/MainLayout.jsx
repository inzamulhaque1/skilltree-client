import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


const MainLayout = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply the theme to the document root (HTML tag)
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {/* Pass down the theme toggle function to Navbar */}
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      {/* Content of pages will be rendered here */}
      <Outlet />
    </div>
  );
};

export default MainLayout;
