import { FaPlus } from "react-icons/fa";
import EducationTypeAdd from "../../../components/admin/education-type/education-type-add";
import { useTranslation } from "react-i18next";
import { useEducation } from "./educaiton-type-hook";
import EducationTypeEdit from "@/components/admin/education-type/education-type-edit";
import { RxCross2 } from "react-icons/rx";
import EducationTypeModel from "@/interfaces/setup/education-type.model";
import AppLoader from "@/components/@shared/loader/app-loader";
import { Pagination } from "flowbite-react";
const EducationList = () => {
  const { t } = useTranslation();
  const {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    data,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    isLoading,
    upsertEducationTypeLocally,
    onPageChange,
    result,
  } = useEducation();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10">
      <div className="container-fluid">
        <div className="page-title">{t("EducationType.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("EducationType.List.Button.CreateNew")}
        </button>
        {addModal && (
          <EducationTypeAdd refreshResult={upsertEducationTypeLocally} />
        )}
        {updateModal && (
          <EducationTypeEdit
            selectedData={currentItem}
            refreshResult={upsertEducationTypeLocally}
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
                <th scope="col" className="font-semibold flex justify-center items-center">
                  {t("EducationType.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                result?.Items?.map(
                  (item: EducationTypeModel, index: number) => (
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
                        className="flex justify-center items-center w-full"
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
                  )
                )}
            </tbody>
          </table>
          {isLoading && <AppLoader />}
        </div>
        <br />
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            layout="pagination"
            currentPage={result?.CurrentPage ?? 1}
            totalPages={result?.TotalPages ?? 1}
            onPageChange={onPageChange}
            showIcons
          />
        </div>
      </div>
    </div>
  );
};

export default EducationList;
