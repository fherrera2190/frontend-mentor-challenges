import React, { useContext } from "react";
import { Navbar } from "../components";
import ThemeContext from "../context/ThemeContext";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useContext(ThemeContext);
  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <Navbar />
      
      <main>{children}</main>
    </div>
  );
};
