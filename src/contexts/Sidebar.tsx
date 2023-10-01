import { ReactNode, createContext, useContext, useState } from "react";

interface Sidebar {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

interface Children {
  children: ReactNode;
}

const SidebarContext = createContext({} as Sidebar);

export const SidebarProvider = ({ children }: Children) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  return context;
};
