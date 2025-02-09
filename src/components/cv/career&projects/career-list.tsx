import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import CareerAdd from "@/components/cv/career&projects/career-add";
import CareerEdit from "@/components/cv/career&projects/career-edit";
import ActionButtons from "@/components/common/action-buttons";

export const CareerList: React.FC = () => {
  const { t } = useTranslation();
  const [isCareerAddFormOpen, setIsCareerAddFormOpen] = useState(false);
  const [isCareerEditFormOpen, setIsCareerEditFormOpen] = useState(false);

  const careerData = {
    company: "CodeIT",
    startDate: "Jan 2021",
    endDate: "Present",
    jobTitle: "manager",
  };

  const handleCareerEditLinkClick = () => {
    setIsCareerEditFormOpen(true);
    setIsCareerAddFormOpen(false);
  };

  const handleCloseCareerEditForm = () => {
    setIsCareerEditFormOpen(false);
  };

  const handleCareerAddLinkClick = () => {
    setIsCareerAddFormOpen(true);
    setIsCareerEditFormOpen(false);
  };

  const handleCloseCareerAddForm = () => {
    setIsCareerAddFormOpen(false);
  };

  return (
    <>
      {!isCareerAddFormOpen && !isCareerEditFormOpen ? (
        <div className="p-4 rounded bg-white shadow mt-5 text-base">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="cv-page-title times-new-roman-font">
              {t("Career&Projects")}
            </h2>
            <ActionButtons
              onAdd={handleCareerAddLinkClick}
              onEdit={handleCareerEditLinkClick}
            />
          </div>
          <p className="text-xl ml-5">CodeIT</p>
          <p className="mt-3 text-base ml-5">Jan 2021 - Present</p>
          <p className="text-black-600 ml-5 text-base font-bold">manager</p>
          <button className="add-entry" onClick={handleCareerAddLinkClick}>
            {t("AddEntry")}
          </button>
        </div>
      ) : null}
      {isCareerAddFormOpen && <CareerAdd onClose={handleCloseCareerAddForm} />}
      {isCareerEditFormOpen && (
        <CareerEdit
          careerData={careerData}
          onClose={handleCloseCareerEditForm}
        />
      )}
    </>
  );
};

export default CareerList;
