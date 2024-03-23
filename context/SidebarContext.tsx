'use client'
import React, { createContext, useContext, useState } from 'react';

// Step 1: Create the Sidebar Context
const SidebarContext = createContext(null);

// Step 2: Create `SidebarProvider` Component
const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Default state
  const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
  };

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
