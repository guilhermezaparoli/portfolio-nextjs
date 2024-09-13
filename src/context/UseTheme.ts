"use client";
import { useEffect, useState } from "react";

export function UseTheme() {
  const [isLightTheme, setIsLightTheme] = useState<boolean | undefined>(true);

  // () => {
  //   if(typeof localStorage !== "undefined"){
  //       const storedTheme = localStorage
  //       ? localStorage.getItem('theme')
  //       : null
  //     if (storedTheme) {
  //       return storedTheme === 'light'
  //     }
  //     return !window.matchMedia('(prefers-color-scheme: light)').matches
  //   }
  // return
  // }

  useEffect(() => {
    if (isLightTheme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [isLightTheme]);

  // Update localStorage when the theme changes
  useEffect(() => {
    localStorage.setItem("theme", isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return {
    isLightTheme,
    setIsLightTheme,
  };
}
