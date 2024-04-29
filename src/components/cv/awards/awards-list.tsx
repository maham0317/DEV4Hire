import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AwardsAdd from "./awards-add";
import ActionButtons from "@/components/common/action-buttons";
import AwardsEdit from "@/components/cv/awards/awards-edit";
import { useAward } from "./award-list-hook";
import { AwardModel } from "@/interfaces/award/award.model";

export const AwardsList: React.FC = () => {
  const { handleDelete, filteredItems, callApiAsync, updateawards } =
    useAward();
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
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Course Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems?.map((item: AwardModel, index: number) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td className="px-6 py-4">{item.AwardTitle}</td>
                    <td className="px-6 py-4">{item?.Year}</td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleDelete(item?.Id);
                      }}
                    >
                      Delete
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={() => handleEditClick(item.Id)}
                    >
                      Edit
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex ml-5 mt-2">
            {/* <p className="text-[#332c55] mr-5 text-base">{t("AwardsList")}</p> */}
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
