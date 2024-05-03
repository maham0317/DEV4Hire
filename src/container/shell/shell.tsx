import Sidebar from "@/components/sidebar/sidebar";
import React, { useState } from "react";
import Navbar from "@/components/header/navbar";
import AdminRoutes from "@/navigation/admin-routes";

const Shell = () => {
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
        <div id="page-wrapper" className="w-10/12">
          <Navbar toggleSidebar={toggleSidebar} />
          <AdminRoutes />
        </div>
      </div>
    </>
  );
};

export default Shell;
