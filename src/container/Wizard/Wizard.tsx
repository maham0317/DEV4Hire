import React, { useState } from "react";
import WorkRolesWizard from "../../components/Wizard/WorkrolesWizard/WorkrolesWizard";
import IndustryInfoWizard from "../../components/Wizard/IndustryInfoWizard/IndustryInfoWizard";
import CompetenceAreasWizard from "../../components/Wizard/CompetenceAreasWizard/CompetenceAreasWizard";
import WorkLocation from "../../components/Wizard/WorkLocation/WorkLocation";
import CvLanguage from "../../components/Wizard/CvLanguage/CvLanguage";
import { Link } from "react-router-dom";
import Navbar from "../../components/Header/Navbar";

function Wizard() {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isLastStep: boolean = currentStep === 5;
  const progressBarWidth: number =
    currentStep === 1 ? 20 : (currentStep - 1) * 25;

  return (
    <>
      <Navbar />
      <div className="mb-4">
        {currentStep > 1 && (
          <button
            onClick={handlePrevious}
            className="text-blue-500 font-semibold hover:text-blue-700 py-4 px-12 rounded-l ml-5"
          >
            Previous step
          </button>
        )}
        {isLastStep ? (
          <div className="float-right">
            <button
              onClick={handleNext}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-5"
              disabled
            >
              Complete
            </button>
          </div>
        ) : (
          <div className="float-right">
            <button
              onClick={handleNext}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mr-5"
            >
              Next step
            </button>
          </div>
        )}
      </div>

      <div className="text-center mt-5">
        <div className="flex flex-col items-center ml-5">
          <p className=" font-bold text-[#1f0f32] text-2xl mb-2 times-new-roman-font">
            Create new CV
          </p>
          <div className="text-[#74769c] text-xs font-extralight">
            STEP {currentStep} OF 5
          </div>
        </div>

        <div className="w-full h-1 bg-gray-100 mt-2">
          <div
            className={`h-full bg-[#1eeb7ac3] rounded`}
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>
      </div>

      {currentStep === 1 && <WorkRolesWizard />}
      {currentStep === 2 && <IndustryInfoWizard />}
      {currentStep === 3 && <CompetenceAreasWizard />}
      {currentStep === 4 && <WorkLocation />}
      {currentStep === 5 && <CvLanguage />}
    </>
  );
}

export default Wizard;
