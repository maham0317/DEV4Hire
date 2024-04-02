import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

import EducationTypeAdd from "../../../components/admin/education-type/education-type-add";
import EducationTypeModel from "../../../interfaces/setup/education-type.model";
import { Button } from "flowbite-react";

import EducationTypeEdit from "../../../components/admin/education-type/education-type-edit";
import { useEducation } from "./educaiton-type-hook";
import { useTranslation } from "react-i18next";
const EducationList = () => {
  const { t } = useTranslation();
  const {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    searchData,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
  } = useEducation();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">{t("EducationType.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("EducationType.List.Button.CreateNew")}
        </button>
        {addModal && <EducationTypeAdd />}
        {updateModal && <EducationTypeEdit selectedData={currentItem} />}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="ibox-index">
            <h3 className="py-4 px-4">{t("EducationType.List.Table.Title")}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="search-bar"
                placeholder={t("EducationType.List.Input.Placeholder.Search")}
                onChange={searchData}
              />
              <button className="search-button">
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <table className="ibox-content">
            <thead className="uppercase border-b">
              <tr>
                <th scope="col" className="table-header">
                  {t("EducationType.List.Table.Heading.Name")}
                </th>
                <th scope="col" className="table-header center">
                  {t("EducationType.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item: EducationTypeModel) => (
                <tr
                  key={item.Id}
                  className="table-data-row"
                  onClick={() => {
                    toggleUpdateModal(item);
                  }}
                >
                  <td className="py-4">{item.Name}</td>

                  <td className="text-red-500">
                    <Button onClick={() => handleDelete(item.Id)}>
                      <span className="flex center">
                        <i className="fa-solid fa-xmark"></i>
                      </span>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default EducationList;
