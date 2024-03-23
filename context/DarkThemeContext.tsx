'use client'
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the DarkTheme Context
const DarkThemeContext = createContext(null);

// Step 2: Create `DarkThemeProvider` Component
const DarkThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkThemeOpen] = useState(false); // Default state
  const toggleDarkTheme = () => {
      setDarkThemeOpen(!isDarkTheme);
  };

  return (
      <DarkThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
          {children}
      </DarkThemeContext.Provider>
  );
};

// Step 3: Create `useDarkTheme` Hook
const useDarkTheme = () => {
  const context = useContext(DarkThemeContext);
  if (context === undefined) {
      throw new Error('useDarkTheme must be used within a DarkThemeProvider');
  }
  return context;
};

export { DarkThemeProvider, useDarkTheme };
