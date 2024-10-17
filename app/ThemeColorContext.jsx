'use client';
import { createContext, useContext, useEffect } from 'react';

const ThemeColorContext = createContext();

export const ThemeColorProvider = ({ children }) => {
  const setThemeColor = (color) => {
    document.querySelector('meta[name="theme-color"]').setAttribute('content', color);
  };

  return (
    <ThemeColorContext.Provider value={setThemeColor}>
      {children}
    </ThemeColorContext.Provider>
  );
};

export const useThemeColor = () => useContext(ThemeColorContext);