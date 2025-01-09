"use client";
import { ThemeContext } from "@/store/themeStore";
import React, { useContext } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function DarkModeToggler() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  return isDarkMode ? (
    <MdLightMode
      className="fill-secondary dark:fill-blue-100 w-6 h-6"
      onClick={toggleTheme}
    />
  ) : (
    <MdDarkMode
      className="fill-secondary dark:fill-blue-100 w-6 h-6"
      onClick={toggleTheme}
    />
  );
}

export default DarkModeToggler;
