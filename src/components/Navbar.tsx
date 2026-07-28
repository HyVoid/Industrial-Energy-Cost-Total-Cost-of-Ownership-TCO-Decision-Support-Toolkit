import React from 'react';
import { Sidebar, SidebarProps, TabKey, TABS } from './Sidebar';

export type { TabKey };
export { TABS, Sidebar };

// Re-export Navbar component pointing to Sidebar for backward compatibility
export const Navbar: React.FC<SidebarProps> = (props) => {
  return <Sidebar {...props} />;
};
