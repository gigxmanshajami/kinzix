'use client';
import { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [isOnWhiteSection, setIsOnWhiteSection] = useState(false);

  return (
    <NavbarContext.Provider value={{ isOnWhiteSection, setIsOnWhiteSection }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);
