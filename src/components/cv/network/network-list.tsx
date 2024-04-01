import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import NetworkAdd from "./network-add";
import NetworkEdit from "./network-edit";
import ActionButtons from "../../common/action-buttons";

const NetworkList: React.FC = () => {
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
            <h2 className="list-title  times-new-roman-font">
              {t("NetworksTitle")}
            </h2>
            <ActionButtons
              onAdd={handleAddClick}
              onEdit={handleEditLinkClick}
            />
          </div>
          <div className="flex ml-5 mt-2">
            <p className="text-[#332c55] mr-5 text-base">{t("AddNetwork")}</p>
          </div>
          <button
            className="add-entry"
            onClick={handleAddClick}
          >
            {t("AddEntry")}
          </button>
        </div>
      ) : null}
      {isAddFormOpen && <NetworkAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && <NetworkEdit onClose={handleCloseEditForm} />}
    </>
  );
};

export default NetworkList;
