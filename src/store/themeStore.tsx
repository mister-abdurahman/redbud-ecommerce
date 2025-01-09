"use client";
import { useState } from "react";
import { createContext } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const defaultValue: ThemeContextType = {
  isDarkMode: false,
  toggleTheme: () => "",
};

export const ThemeContext = createContext(defaultValue);

export const ThemeContextProvider = function ({ children }) {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
