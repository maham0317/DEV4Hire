import Sidebar from "@/components/sidebar/sidebar";
import React, { ReactNode, useState } from "react";
import Navbar from "@/components/header/navbar";
import AdminRoutes from "@/navigation/admin-routes";
import { BrowserRouter as Router } from "react-router-dom";

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => {
    const dom: any = document.querySelector("body");
    dom.classList.toggle("mini-navbar");
    setIsSidebarOpen((prevState) => !prevState);
  };
  return (
    <>
      <div className="flex">
        <Sidebar open={isSidebarOpen} />
        <div id="page-wrapper" className="w-full">
          <Navbar toggleSidebar={toggleSidebar} />
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
