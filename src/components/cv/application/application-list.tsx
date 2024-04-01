import { useTranslation } from "react-i18next";
import ApplicationAdd from "./application-add";
import ActionButtons from "../../common/action-buttons";
import React, { useState } from "react";
import ApplicationEdit from "./application-edit";

export const ApplicationList: React.FC = () => {
  const { t } = useTranslation();
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleEditLinkClick = () => {
    setIsEditFormOpen(true);
    setIsAddFormOpen(false);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
  };

  const handleAddLinkClick = () => {
    setIsAddFormOpen(true);
    setIsEditFormOpen(false);
  };

  const handleCloseAddForm = () => {
    setIsAddFormOpen(false);
  };

  return (
    <>
      {!isEditFormOpen && !isAddFormOpen ? (
        <div className="bg-white p-4 rounded shadow mt-5 text-base">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="list-title times-new-roman-font">
              {t("Application")}
            </h2>
            <ActionButtons
              onAdd={handleAddLinkClick}
              onEdit={handleEditLinkClick}
            />
          </div>
          <div className="flex ml-5 mt-2">
            <p className="text-[#332c55] mr-5 text-base">
              {t("ProfessionalExperienceDetail")}
            </p>
          </div>
          <button
            className="add-entry"
            onClick={handleAddLinkClick}
          >
            {t("AddEntry")}
          </button>
        </div>
      ) : null}
      {isAddFormOpen && <ApplicationAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && (
        <ApplicationEdit
          initialValues={{ applicationName: "Initial Value" }}
          onClose={handleCloseEditForm}
        />
      )}
    </>
  );
};

export default ApplicationList;
