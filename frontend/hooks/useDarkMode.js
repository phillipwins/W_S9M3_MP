import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (initialValue) => {
  const [darkMode, setDarkMode] = useLocalStorage("dark-mode", initialValue);

  useEffect(() => {
    const className = "dark-mode";
    const bodyClass = window.document.body.classList;

    darkMode ? bodyClass.add(className) : bodyClass.remove(className);
  }, [darkMode]);

  return [darkMode, setDarkMode];
};
