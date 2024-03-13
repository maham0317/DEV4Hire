import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavbarButtonsProps {
  context: string;
}

const NavbarButtons: React.FC<NavbarButtonsProps> = ({ context }) => {
  const { t } = useTranslation(); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="content-section">
      <div className="flex justify-end pr-8 mt-1">
        {context === 'home' && (
          <>
            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded mr-4">
              {t('ParseCVButton')}
            </button>
           
            <Link to="/Wizard">
              <button className="bg-[#1eeb7ac3] hover:bg-green-600 text-white font-semibold py-3 px-6 rounded mr-4">
                {t('CreateNewCVButton')}
              </button>
            </Link>
          </> 
        )}

        {context === 'workRoles' && (
          <div className="relative inline-block ">
            <Link
              to="/"
              className="text-blue-700 font-semibold  text-sm hover:text-blue-700 py-4 px-12 rounded-l ml-5"
            >
              {t('GoToList')}
            </Link>

            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border  border-blue-500 hover:border-transparent rounded mr-4"
              type="button"
            >
            {t('Options')}
    <i className="fas fa-chevron-down ml-2"></i>
               
            </button>
     
            {isDropdownOpen && (
              <div
                id="dropdown"
                className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
              >
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover-bg-gray-100 dark:hover-bg-gray-600 dark:hover-text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}

<button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-8 border border-blue-500 hover:border-transparent rounded mr-4">
              {t('ParseCVButton')}
            </button>
           
            <Link to="/Wizard">
              <button className="bg-[#1eeb7ac3] hover:bg-green-600 text-white font-semibold py-3 px-6 rounded mr-4">
                {t('CreateNewCVButton')}
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavbarButtons;
