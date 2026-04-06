import React from 'react';
import { Navbar } from './Navbar.tsx';
import { Footer } from './Footer.tsx';
import { Sidebar } from './Sidebar.tsx';

interface MainLayoutProps {
  children: React.ReactNode;
  showSidebar?: boolean;
  sidebarItems?: Array<{
    label: string;
    href: string;
    icon?: string;
    active?: boolean;
  }>;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  showSidebar = true,
  sidebarItems = [],
}) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">
        {showSidebar && <Sidebar items={sidebarItems} />}
        <main className="layout-main">{children}</main>
      </div>
      <Footer />
    </div>
  );
};
