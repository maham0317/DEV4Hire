import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ActionButtons from "@/components/common/action-buttons";
import CompetenceAreasAdd from "@/components/cv/competence-areas/competence-areas-add";
import CompetenceAreasEdit from "@/components/cv/competence-areas/competence-areas-edit";
import CompetenceAreasReorder from "@/components/cv/competence-areas/competence-areas-reorder";

export const CompetenceAreas: React.FC = () => {
  const { t } = useTranslation();
  const [isCompetenceFormOpen, setIsCompetenceFormOpen] = useState(false);
  const [isCompetenceEditFormOpen, setIsCompetenceEditFormOpen] =
    useState(false);
  const [isCompetenceReorderFormOpen, setIsCompetenceReorderFormOpen] =
    useState(false);

  const handleCompetenceReorderLinkClick = () => {
    setIsCompetenceEditFormOpen(false);
    setIsCompetenceFormOpen(false);
    setIsCompetenceReorderFormOpen(true);
  };

  const handleCloseCompetenceReorderForm = () => {
    setIsCompetenceReorderFormOpen(false);
  };

  const handleCompetenceEditLinkClick = () => {
    setIsCompetenceFormOpen(false);
    setIsCompetenceReorderFormOpen(false);
    setIsCompetenceEditFormOpen(true);
  };

  const handleCloseCompetenceEditForm = () => {
    setIsCompetenceEditFormOpen(false);
  };

  const handleCompetenceLinkClick = () => {
    setIsCompetenceEditFormOpen(false);
    setIsCompetenceReorderFormOpen(false);
    setIsCompetenceFormOpen(true);
  };

  const handleCloseCompetenceForm = () => {
    setIsCompetenceFormOpen(false);
  };

  return (
    <>
      {!isCompetenceFormOpen &&
        !isCompetenceEditFormOpen &&
        !isCompetenceReorderFormOpen && ( // Hide when any form is open
          <div className=" p-4 bg-white rounded shadow mt-5 text-base">
            <div className="flex justify-between items-center mb-4 ml-5">
              <h2 className="text-2xl font-bold mr-5 times-new-roman-font">
                {t("CompetenceAreas")}
              </h2>
              <ActionButtons
                onAdd={handleCompetenceLinkClick}
                onEdit={handleCompetenceEditLinkClick}
                onReorder={handleCompetenceReorderLinkClick}
                showReorder={true}
              />
            </div>
            <ul className="circle-list text-base">
              <li>
                <i className="mb-3 fas fa-circle-notch circle-icon"></i> .Net
              </li>
              <li>
                <i className="mb-3 fas fa-circle-notch circle-icon"></i> C+
              </li>
              <li>
                <i className="mb-3 fas fa-circle-notch circle-icon"></i> React
                Native
              </li>
              <li>
                <i className="mb-3 fas fa-circle-notch circle-icon"></i> Angular
              </li>
            </ul>
            <button
              className="bg-transparent  hover:bg-blue-500 text-blue-800 mt-4 ml-4 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={handleCompetenceLinkClick}
            >
              {t("AddEntry")}
            </button>
          </div>
        )}
      {isCompetenceFormOpen && (
        <CompetenceAreasAdd onClose={handleCloseCompetenceForm} />
      )}
      {isCompetenceEditFormOpen && (
        <CompetenceAreasEdit onClose={handleCloseCompetenceEditForm} />
      )}
      {isCompetenceReorderFormOpen && (
        <CompetenceAreasReorder onClose={handleCloseCompetenceReorderForm} />
      )}
    </>
  );
};

export default CompetenceAreas;
