import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const PopUp = () => {
  const { t } = useTranslation();
  const [isPopupVisible, setPopupVisibility] = useState(false);

  const togglePopup = () => {
    setPopupVisibility(!isPopupVisible);
  };

  return (
    <div className="fixed bottom-4 right-4 p-8">
      <div className="flex flex-col items-center">
        <span className={`emoji ${isPopupVisible ? 'open' : 'closed'}`} onClick={togglePopup}>
          {isPopupVisible ? (
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.75 6.75L6.75 8.75L10.25 12.25L6.75 15.75L8.75 17.75L12.25 14.25L15.75 17.75L17.75 15.75L14.25 12.25L17.75 8.75L15.75 6.75L12.25 10.25L8.75 6.75Z"
                fill="#1eeb7ac3"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-16 h-16 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 21 21"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.2685 13.1C19.7985 12.81 19.1885 12.95 18.8985 13.41C17.0385 16.33 13.8385 18.07 10.3485 18.07C6.88853 18.07 3.70853 16.35 1.83853 13.47C1.53853 13.01 0.928529 12.88 0.458529 13.17C-0.00147086 13.46 -0.14147 14.07 0.15853 14.53C2.39853 17.98 6.20853 20.04 10.3485 20.04C14.5185 20.04 18.3485 17.96 20.5785 14.46C20.8685 13.99 20.7285 13.39 20.2685 13.1ZM3.16853 4.55C4.43853 4.55 5.46853 3.53 5.46853 2.28C5.46853 1.03 4.43853 0 3.16853 0C1.89853 0 0.868529 1.02 0.868529 2.28C0.868529 3.53 1.89853 4.55 3.16853 4.55ZM17.5285 4.55C18.7985 4.55 19.8285 3.53 19.8285 2.28C19.8285 1.03 18.7985 0 17.5285 0C16.2585 0 15.2285 1.02 15.2285 2.28C15.2285 3.53 16.2585 4.55 17.5285 4.55Z"
                fill="#1eeb7ac3"
              ></path>
            </svg>
          )}
        </span>
        <p className="text-xs mt-1 font-semibold">
          {isPopupVisible ? '' : 'Regina'}
        </p>
        {isPopupVisible && (
          <div className="flex flex-col mt-4 bg-white text-black rounded-md shadow-md p-2 message-bubble">
            <p className="text-xs font-bold">{t('HelloText')}</p>
            <p className="text-xs">
              {t('HelpText')}
            </p>
            <p className="text-xs">Email: hafiz.irfan@codeit.pk</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PopUp;
