import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ActionButtons from "../../common/action-buttons";
import LanguagesAdd from "./languages-add";
import LanguagesEdit from "./languages-edit";

export const LanguagesList: React.FC = () => {
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
        <div className="p-4 bg-white rounded shadow mt-5 text-base">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="list-title  times-new-roman-font">
              {t("Languages")}
            </h2>
            <ActionButtons
              onAdd={handleAddLinkClick}
              onEdit={handleEditLinkClick}
            />
          </div>

          <div className="flex ml-5 mt-2">
            <p className=" mr-5 text-base text-[#332c55]">
              {t("LanguagesInfo")}
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
      {isAddFormOpen && <LanguagesAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && <LanguagesEdit onClose={handleCloseEditForm} />}
    </>
  );
};

export default LanguagesList;
