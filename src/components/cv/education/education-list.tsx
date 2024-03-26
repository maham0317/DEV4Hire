import { useTranslation } from "react-i18next";
import EducationAdd from "./education-add";
import React, { useState } from "react";
import ActionButtons from "@/components/common/action-buttons";
import EducationEdit from "@/components/cv/education/education-edit";

interface EducationListProps {}

const EducationList: React.FC<EducationListProps> = () => {
  const { t } = useTranslation();
  const [isAddFormOpen, setIsAddFormOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);

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
      {!isAddFormOpen && !isEditFormOpen && (
        <div className=" p-4 bg-white rounded shadow mt-5 text-base">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="text-2xl font-bold mr-5 times-new-roman-font">
              {t("EducationCertifications")}
            </h2>
            <ActionButtons
              onAdd={handleAddLinkClick}
              onEdit={handleEditLinkClick}
            />
          </div>
          <div className="flex ml-5 mt-2">
            <p className="text-[#332c55] text-base mr-5">{t("AddEducation")}</p>
          </div>
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-800 mt-4 ml-4 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleAddLinkClick}
          >
            {t("AddEntry")}
          </button>
        </div>
      )}

      {isAddFormOpen && <EducationAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && <EducationEdit onClose={handleCloseEditForm} />}
    </>
  );
};

export default EducationList;
