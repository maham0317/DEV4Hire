import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ActionButtons from "@/components/common/action-buttons";
import IndustryInfoAdd from "@/components/cv/industry-info/industry-info-add";
import IndustryInfoEdit from "@/components/cv/industry-info/industry-info-edit";

export const IndustryInfoList: React.FC = () => {
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
            <h2 className="cv-page-title  times-new-roman-font">
              {t("Industryknowledge")}
            </h2>
            <ActionButtons
              onAdd={handleAddLinkClick}
              onEdit={handleEditLinkClick}
            />
          </div>
          <ul className="circle-list font-bold">
            <li>
              <i className="fas fa-circle-notch circle-icon"></i> IT
            </li>
            <li>
              <i className="fas fa-circle-notch circle-icon"></i> SQA
            </li>
          </ul>
          <p className="text-black-600 text-base ml-5 mt-3">
            Consultancy, Data Centers & Cloud, Data processing, Software vendor
          </p>
          <button className="add-entry" onClick={handleAddLinkClick}>
            {t("AddEntry")}
          </button>
        </div>
      ) : null}
      {isAddFormOpen && <IndustryInfoAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && <IndustryInfoEdit onClose={handleCloseEditForm} />}
    </>
  );
};

export default IndustryInfoList;
