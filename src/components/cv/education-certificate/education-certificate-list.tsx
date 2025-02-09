import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ActionButtons from "@/components/common/action-buttons";
import EducationEdit from "@/components/cv/education-certificate/education-certificate-edit";
import UserCourseModel from "@/interfaces/user/user-course.model";
import { useEducaionCertificate } from "./education-certificate-list-hook";
import EducationAdd from "./education-certificate-add";

const EducationList: React.FC = () => {
  const { handleDelete, filteredItems, callApiAsync, updateCourse } =
    useEducaionCertificate();

  const { t } = useTranslation();
  const [isAddFormOpen, setIsAddFormOpen] = useState<boolean>(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<UserCourseModel | null>(
    null
  );

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

  const handleEditClick = (item: UserCourseModel) => {
    setSelectedItem(item);
    setIsEditFormOpen(true);
    setIsAddFormOpen(false);
  };

  const updateList = () => {
    callApiAsync();
  };

  return (
    <>
      {!isAddFormOpen && !isEditFormOpen && (
        <div className=" p-4 bg-white rounded shadow mt-5 text-base">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="cv-page-title times-new-roman-font">
              {t("EducationCertifications")}
            </h2>
            <ActionButtons
              onAdd={handleAddLinkClick}
              onEdit={handleEditLinkClick}
            />
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
                {filteredItems?.map((item: UserCourseModel, index: number) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td className="px-6 py-4">{item.CourseName}</td>
                    <td className="px-6 py-4">{item.Year}</td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleDelete(item.Id);
                      }}
                    >
                      Delete
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={() => handleEditClick(item)} // Pass the item to handleEditClick
                    >
                      Edit
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex ml-5 mt-2">
            {/* <p className="text-[#332c55] text-base mr-5">{t("AddEducation")}</p> */}
          </div>
          <button className="add-entry" onClick={handleAddLinkClick}>
            {t("AddEntry")}
          </button>
        </div>
      )}

      {isAddFormOpen && (
        <EducationAdd onClose={handleCloseAddForm} updateList={updateList} />
      )}
      {isEditFormOpen && (
        <EducationEdit
          selectedItem={selectedItem}
          onClose={handleCloseEditForm}
          updateList={updateList} // Pass the updateList callback
        />
      )}
    </>
  );
};

export default EducationList;
