import React from "react";
import "./stepper.css";
import { useTranslation } from "react-i18next";

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  const { t } = useTranslation();
  const steps = ["1", "2", "3"];

  return (
    <div className="text-sm">
      <h1 className="text-3xl text-[#332c55] font-times-new-roman flex justify-center items-center min-h-[90px]">
        {t("Credentials")}
      </h1>

      <div className="stepper-container mt-3 mb-3">
        <div>
          <div className="flex justify-center">
            <ol className="flex items-center space-x-48">
              {steps.map((step, index) => (
                <li
                  className={`relative ${
                    currentStep === index + 1 ? "active-step" : ""
                  }`}
                  key={index}
                >
                  <div
                    className={`z-10 flex items-center justify-center w-7 h-7 ${
                      currentStep === index + 1
                        ? "bg-[#1eeb7ac3]"
                        : "bg-gray-100"
                    } rounded-full ring-0 ring-white dark:${
                      currentStep === index + 1
                        ? "bg-[#1eeb7ac3]"
                        : "bg-gray-700"
                    } sm:ring-8 dark:ring-gray-900 shrink-0`}
                  >
                    {step}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-48 h-0.5 bg-gray-200 dark:bg-gray-700 absolute right-10 left-10 top-2/4`}
                    ></div>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
