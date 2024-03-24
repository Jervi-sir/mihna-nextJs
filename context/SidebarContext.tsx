'use client'
import React, { createContext, useContext, useEffect, useState } from 'react';

// Step 1: Create the Sidebar Context
const SidebarContext = createContext(null);

// Step 2: Create `SidebarProvider` Component
const SidebarProvider = ({ children }) => {
  // Initialize state based on localStorage or default to true
  const [isSidebarOpen, setSidebarOpen] = useState(() => {
    const storedState = localStorage.getItem('isSidebarOpen');
    return storedState !== null ? JSON.parse(storedState) : true;
  });

  // Function to toggle sidebar state
  const toggleSidebar = () => {
    setSidebarOpen(prevState => !prevState);
  };

  // Save sidebar state to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('isSidebarOpen', JSON.stringify(isSidebarOpen));
  }, [isSidebarOpen]);

  // Automatically close the sidebar in mobile resolution
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) { // Assuming 768px as the breakpoint for mobile devices
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    // Call the handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Step 3: Create `useSidebar` Hook
const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};

export { SidebarProvider, useSidebar };
