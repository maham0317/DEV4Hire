import { useTranslation } from "react-i18next";
import React, { useState } from "react";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  const { t } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // const toggleSidebar = () => {
  //   const dom: any = document.querySelector('body');
  //   dom.classList.toggle('mini-navbar');
  // }

  const handleLogout = () => {
    console.log("User logging out...");
    window.location.href = "/auth-buttons";
  };

  return (
    <section>
      <nav className="relative flex w-full flex-nowrap px-8 h-20 items-center justify-between bg-[#FFFFFF] py-2  text-neutral-500 hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4 drop-shadow">
        <div className="flex items-center">
          <img
            src="assets/icons/nav-icon.svg"
            alt="Navbar Logo"
            className=""
            onClick={() => toggleSidebar()}
          />
        </div>
        <button
          className="block border-0 bg-transparent px-2 text-white hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 ml-auto"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-label="Toggle dropdown"
        >
          <img
            src="assets/images/Navbar2.jpg"
            alt="Dropdown Trigger"
            className="h-6"
          />
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

export default Navbar;
