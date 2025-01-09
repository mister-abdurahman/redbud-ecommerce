"use client";
import { ThemeContext } from "@/store/themeStore";
import React, { ReactNode, useContext } from "react";

function ThemedBody({ children }: { children: ReactNode }) {
  const { isDarkMode } = useContext(ThemeContext);
  return <body className={isDarkMode ? `dark` : ""}>{children}</body>;
}

export default ThemedBody;
