import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import EditTitleForm from "./edit-title-form";
import EditNameForm from "@/components/cv/cv-details/edit-name-form";
import { useGetProfileInfoByIdQuery } from "@/services/profile-info";

export const CvDetails: React.FC = () => {
  const { t } = useTranslation();
  const { data, isLoading, isError } = useGetProfileInfoByIdQuery(1);
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
      <div className="cv-page">
        <h2 className="cv-page-title times-new-roman-font">{t("ParseCv")}</h2>
      </div>

      <div className="flex ml-5 mt-2 mb-2">
        <p className="text-black-600 mr-5 text-base">
          {t("UploadInstruction")}
        </p>
      </div>
      <button className="cv-button">{t("AddCVButton")}</button>
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
        <button className="draft-button">{t("DraftButton")}</button>
        <button className="norwegian-button">{t("NorwegianButton")}</button>
      </div>
      <h2 className="text-2xl font-bold ml-3 mt-5 times-new-roman-font">
        {t("ProfileIntro")}
      </h2>
      <div className="flex items-center ml-3 mt-5">
        <div className="cv-image">
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
        <p className="font-bold">{t("JobTitle")}</p>
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
        <p className="ml-auto">
          {isLoading
            ? "Loading..."
            : isError
            ? "Error fetching data"
            : data?.DateOfBirth}
        </p>

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
        <p className="ml-auto">
          {isLoading
            ? "Loading..."
            : isError
            ? "Error fetching data"
            : data?.AvailableFrom}
        </p>
        <a href="#edit-link" className="text-blue-700 ml-3 font-semibold">
          {t("EditLink")}
        </a>
      </div>
      <hr className="ml-3 mt-5 border-gray-400" />
      <div className="flex items-center ml-3 mt-5">
        <p className="font-bold">{t("ExperienceSince")}</p>
        <p className="ml-auto">
          {isLoading
            ? "Loading..."
            : isError
            ? "Error fetching data"
            : data?.ExperienceSince}
        </p>
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
        {isLoading
          ? "Loading..."
          : isError
          ? "Error fetching data"
          : data?.Summary}
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
