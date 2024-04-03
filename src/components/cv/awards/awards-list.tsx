import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AwardsAdd from "./awards-add";
import ActionButtons from "@/components/common/action-buttons";
import AwardsEdit from "@/components/cv/awards/awards-edit";

export const AwardsList: React.FC = () => {
  const { t } = useTranslation();
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditFormOpen(true);
    setIsAddFormOpen(false);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
  };

  const handleAddClick = () => {
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
            <h2 className="cv-page-title times-new-roman-font">
              {t("Awards")}
            </h2>
            <ActionButtons onAdd={handleAddClick} onEdit={handleEditClick} />
          </div>

          <div className="flex ml-5 mt-2">
            <p className="text-[#332c55] mr-5 text-base">{t("AwardsList")}</p>
          </div>

          <button className="add-entry" onClick={handleAddClick}>
            {t("AddEntry")}
          </button>
        </div>
      ) : null}
      {isAddFormOpen && <AwardsAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && <AwardsEdit onClose={handleCloseEditForm} />}
    </>
  );
};

export default AwardsList;
