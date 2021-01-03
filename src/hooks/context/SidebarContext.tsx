import React, { useCallback, useState } from "react";

export const SidebarContext = React.createContext(null);

interface Props {
  children: React.ReactNode;
}

export function SidebarProvider({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <SidebarContext.Provider value={{ isOpen, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebarContext() {
  const ctx = React.useContext(SidebarContext);

  if (!ctx) {
    throw new Error("The hook is used outside a SidebarContext Provider.");
  }

  return ctx;
}
