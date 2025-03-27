import React from "react";
import { useState, useEffect } from "react";

export function ThemeProvider({ children, ...props }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export const ThemeContext = React.createContext({
  theme: 'light',
  setTheme: () => {}
});

// Optional: Hook for using theme in other components
export function useTheme() {
  return React.useContext(ThemeContext);
}