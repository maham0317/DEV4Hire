import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import EditTitleForm from "./edit-title-form";
import EditNameForm from "./edit-name-form";

export const CvDetails: React.FC = () => {
  const { t } = useTranslation();
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [title, setTitle] = useState(t("SeniorDeveloperTitle"));
  const [name, setName] = useState("");

  const handleEditNameClick = () => {
    setIsEditingName(true);
  };

  const handleSaveName = (newName: string) => {
    setName(newName);
    setIsEditingName(false);
  };

  const handleCancelEditName = () => {
    setIsEditingName(false);
  };

  const handleEditTitleClick = () => {
    setIsEditingTitle(true);
  };

  const handleSaveTitle = (newTitle: string) => {
    setTitle(newTitle);
    setIsEditingTitle(false);
  };

  const handleCancelEditTitle = () => {
    setIsEditingTitle(false);
  };

  return (
    <>
      <div className="flex justify-between items-center mb-5 ml-5">
        <h2 className="text-2xl font-bold mr-5 times-new-roman-font">
          {t("ParseCv")}
        </h2>
      </div>

      <div className="flex ml-5 mt-2 mb-2">
        <p className="text-black-600 mr-5 text-base">
          {t("UploadInstruction")}
        </p>
      </div>
      <button className="bg-blue-700 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded ml-5 mt-5">
        {t("AddCVButton")}
      </button>
      <div className="flex ml-5 mt-5">
        {isEditingTitle ? (
          <EditTitleForm
            onSave={handleSaveTitle}
            onCancel={handleCancelEditTitle}
          />
        ) : (
          <>
            <h1 className="text-3xl font-bold ml-3 mt-5 times-new-roman-font">
              {title}
            </h1>
            <a
              href="#edit-title-link"
              className="text-blue-700 ml-5 mt-5 font-semibold"
              onClick={handleEditTitleClick}
            >
              {t("EditTitleLink")}
            </a>
          </>
        )}
      </div>
      <div className="flex ml-5 mt-5">
        <button className="bg-[#7e6a4276] hover:bg-gray-700 text-white text-sm  py-1 px-4 rounded mr-4 mt-4 mb-4">
          {t("DraftButton")}
        </button>
        <button className="bg-transparent hover:bg-gray-500 text-gray-500 text-sm hover:text-white py-1 px-4 border border-gray-300 hover:border-transparent rounded mt-4 mb-4">
          {t("NorwegianButton")}
        </button>
      </div>

      <h2 className="text-2xl font-bold ml-3 mt-5 times-new-roman-font">
        {t("ProfileIntro")}
      </h2>
      <div className="flex items-center ml-3 mt-5">
        <div className="rounded-full h-12 w-12  flex items-center justify-center">
          <img
            src="assets/images/Navbar2.jpg"
            alt="Dropdown Trigger"
            className="h-6"
          />
        </div>
        <p className="text-black-600 font-bold ml-3">Yasir Butt</p>

        <div className="flex ml-auto">
          {isEditingName ? (
            <EditNameForm
              onSave={handleSaveName}
              onCancel={handleCancelEditName}
            />
          ) : (
            <>
              <p>{name}</p>
              <a
                href="#edit-name"
                className="text-blue-700 font-semibold ml-auto"
                onClick={handleEditNameClick}
              >
                {t("EditLink")}
              </a>
            </>
          )}
        </div>
      </div>
      <div className="flex items-center ml-3 mt-5">
        <p className="font-bold">{t("Role")}</p>
        <p className="ml-auto">
          {t("SeniorDeveloperTitle")}
          <a href="#edit-link" className="text-blue-700 font-semibold ml-3">
            {t("EditLink")}
          </a>
        </p>
      </div>
      <hr className="ml-3 mt-5 border-gray-400" />
      <div className="flex items-center ml-3 mt-5">
        <p className="font-bold">{t("BirthDate")}</p>
        <p className="ml-auto">08 May 1981</p>
        <a href="#edit-link" className="text-blue-700 ml-3 font-semibold">
          {t("EditLink")}
        </a>
      </div>
      <hr className="ml-3 mt-5 border-gray-400" />
      <div className="flex items-center ml-3 mt-5">
        <p className="font-bold">
          {t("AvailableFrom")}{" "}
          <i className="fas fa-question-circle text-gray-300"></i>
        </p>
        <p className="ml-auto">01 Aug 2022</p>
        <a href="#edit-link" className="text-blue-700 ml-3 font-semibold">
          {t("EditLink")}
        </a>
      </div>
      <hr className="ml-3 mt-5 border-gray-400" />
      <div className="flex items-center ml-3 mt-5">
        <p className="font-bold">{t("ExperienceSince")}</p>
        <p className="ml-auto">2003</p>
        <a href="#edit-link" className="text-blue-700 ml-3 font-semibold">
          {t("EditLink")}
        </a>
      </div>
      <hr className="ml-3 mt-5 border-gray-400" />
      <div className="flex items-center ml-3 mt-5">
        <p className="font-bold">{t("Summary")}</p>
        <a href="#edit-link" className="text-blue-700 ml-auto font-semibold">
          {t("EditLink")}
        </a>
      </div>
      <p className="text-black-600 ml-2 text-sm font-semibold">
        Jeg har mer enn 18 års erfaring og jobber som Fullstack systemutvikler
        med hovedfokus på utvikling ...
      </p>
      <a href="#edit-link" className="text-blue-700 ml-auto font-semibold">
        Read more
      </a>
      <p className="text-xl font-bold mt-5 times-new-roman-font">
        {t("CVStrength")}
      </p>
      <div className="h-1 w-full bg-[#1eeb7ac3] dark:bg-green mt-2 rounded">
        <div className="h-1 bg-primary" style={{ width: "45%" }}></div>
      </div>
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("Photo(optional)")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("ProfileIntro")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("Workroles")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("CompetenceAreas")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("Career&Projects")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("Skills")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("Languages")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("Industryknowledge")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("EducationCertifications")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
      <div className="flex items-center ml-3 mt-5">
        <p className="text-gray-500">{t("AdditionalInformation")}</p>
        <i className="fas fa-check ml-auto text-[#1eeb7ac3]"></i>
      </div>
      <hr className="ml-3 mt-3 border-gray-200" />
    </>
  );
};

export default CvDetails;
