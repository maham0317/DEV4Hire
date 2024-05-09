import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import Profile from "../profile/profile";

const NavbarPublic: React.FC = () => {
  const { t } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSidebar = () => {
    const dom: any = document.querySelector("body");
    dom.classList.toggle("mini-navbar");
  };

  const handleLogout = () => {
    console.log("User logging out...");
    window.location.href = "/auth-buttons";
  };

  return (
    <section className="pb-4">
      <div
        className={isCollapsed ? "hidden" : ""}
        id="navbarToggleExternalContent"
      >
        <div className="block bg-[#130c37] p-6 dark:bg-neutral-600 dark:text-neutral-50">
          <p className="text-2xl text-white">CVs</p>
          <span className="text-neutral-400">Toggles to Navbar</span>
        </div>
      </div>
      <nav className="relative flex w-full flex-nowrap px-8 h-20 items-center justify-between bg-[#130c37] py-2  text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex items-center">
          <img
            src="assets/images/Navbar.png"
            alt="Navbar Logo"
            className="h-6 mr-2 ml-12"
          />
          <span className="mr-2 text-white">{t("CVs")}</span>
        </div>
        <button
          className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200"
          type="button"
          onClick={toggleCollapse}
          aria-controls="navbarToggleExternalContent"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.3"
            className="h-5 w-6 transform transition-transform duration-300 ease-in-out"
            style={{
              transform: isCollapsed ? "rotate(0deg)" : "rotate(180deg)",
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <button
          className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 ml-auto"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-label="Toggle dropdown"
        >
          <Profile />
          {/* <img
            src="assets/images/Navbar2.jpg"
            alt="Dropdown Trigger"
            className="h-6"
          /> */}
        </button>
        {isDropdownOpen && (
          <div className="absolute top-full right-0 mt-2 bg-neutral-800 dark:bg-neutral-600 p-2 shadow-lg">
            {/* Temporary Dropdown content */}
            <p className="text-white">Yasir Butt</p>
            <p className="text-white">Personal Details</p>
            <p className="text-white">Send Feedback</p>

            <button
              className="text-white text-red-500 block w-full text-left mb-2"
              onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        )}
      </nav>
    </section>
  );
};

export default NavbarPublic;
