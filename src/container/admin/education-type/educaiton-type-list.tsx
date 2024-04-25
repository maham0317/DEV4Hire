import { FaPlus } from "react-icons/fa";
import EducationTypeAdd from "../../../components/admin/education-type/education-type-add";
import { useTranslation } from "react-i18next";
import { useEducation } from "./educaiton-type-hook";
import EducationTypeEdit from "@/components/admin/education-type/education-type-edit";
import { RxCross2 } from "react-icons/rx";
import EducationTypeModel from "@/interfaces/setup/education-type.model";
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
    callApiAsyc,
  } = useEducation();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10">
      <div className="container-fluid">
        <div className="page-title">{t("EducationType.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("EducationType.List.Button.CreateNew")}
        </button>
        {addModal && <EducationTypeAdd refreshResult={callApiAsyc} />}
        {updateModal && (
          <EducationTypeEdit
            selectedData={currentItem}
            refreshResult={callApiAsyc}
          />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title">
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
                <th scope="col" className="font-semibold">
                  {t("EducationType.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item: EducationTypeModel) => (
                <tr key={item.Id} className="table-data-row">
                  <td
                    className="py-4"
                    onClick={() => {
                      toggleUpdateModal(item);
                    }}
                  >
                    {item.Name}
                  </td>
                  <td className="text-red-500">
                    <button
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleDelete(item.Id);
                      }}
                    >
                      <span className="flex center">
                        <RxCross2 />
                      </span>
                    </button>
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
