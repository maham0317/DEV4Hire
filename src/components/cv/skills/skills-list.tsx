import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SkillsEdit from "@/components/cv/skills/skills-edit";
import SkillsAdd from "@/components/cv/skills/skills-add";
import ActionButtons from "@/components/common/action-buttons";

export const SkillsList: React.FC = () => {
  const { t } = useTranslation();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);

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
        <div className="p-4 bg-white rounded shadow mt-5">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="text-2xl font-bold mr-5 times-new-roman-font">
              {t("Skills")}
            </h2>
            <ActionButtons
              onAdd={handleAddLinkClick}
              onEdit={handleEditLinkClick}
            />
          </div>

          <div className="flex ml-5 mt-5">
            <p className="text-gray-400">Skill group/name</p>
            <p className="text-gray-400 ml-auto">
              Level <i className="fas fa-question-circle text-gray-200"></i>
            </p>

            <p className="text-gray-400 ml-auto mr-5 ">Experience Last used</p>
          </div>
          <hr className="ml-5 mt-2 w-full border-t border-gray-200" />
          <div className="flex justify-between items-center mb-4 ml-5">
            <h3 className="text-base font-bold mr-5 mt-5">
              {t("SystemsDevelopment")}
            </h3>
          </div>

          <div className="flex ml-5 mt-2">
            <p className="text-black-600">C</p>
            <div className="ml-auto">
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
            </div>
            <p className="text-black-600 ml-auto mr-5">any value 2023</p>
          </div>
          <div className="flex ml-5 mt-2">
            <p className="text-black-600">C#</p>
            <div className="ml-auto">
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
            </div>
            <p className="text-black-600 ml-auto mr-5">any value 2023</p>
          </div>
          <div className="flex ml-5 mt-2">
            <p className="text-black-600">F#</p>
            <div className="ml-auto">
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
            </div>
            <p className="text-black-600 ml-auto mr-5">any value 2023</p>
          </div>
          <div className="flex ml-5 mt-2">
            <p className="text-black-600">H2</p>
            <div className="ml-auto">
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
              <i className="fas fa-star text-gray-300 ml-1"></i>
            </div>
            <p className="text-black-600 ml-auto mr-5">any value 2023</p>
          </div>
          <hr className="ml-5 mt-2 w-full border-t border-gray-200" />
          <button
            className="bg-transparent hover:bg-blue-500 text-blue-800 mt-4 ml-4 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            onClick={handleAddLinkClick}
          >
            {t("AddEntry")}
          </button>
        </div>
      ) : null}
      {isEditFormOpen && <SkillsEdit onClose={handleCloseEditForm} />}
      {isAddFormOpen && <SkillsAdd onClose={handleCloseAddForm} />}
    </>
  );
};

export default SkillsList;
