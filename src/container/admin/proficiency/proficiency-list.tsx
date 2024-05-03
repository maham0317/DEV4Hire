import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { Button } from "flowbite-react";
import ProficiencyModel from "@/interfaces/setup/proficiency.model";
import ProficiencyEdit from "@/components/admin/proficiency/proficiency-edit";
import { useProficiency } from "@/container/admin/proficiency/proficiency-list.hook";
import ProficiencyAdd from "@/components/admin/proficiency/proficiency-add";
import { useTranslation } from "react-i18next";
import { Pagination } from "flowbite-react";
import AppLoader from "@/components/@shared/loader/app-loader";

const ProficiencyList = () => {
  const { t } = useTranslation();
  const {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    isLoading,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    upsertProficiencyLocally,
    onPageChange,
    result,
  } = useProficiency();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">{t("Proficiency.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("Proficiency.List.Button.CreateNew")}
        </button>
        {addModal && (
          <ProficiencyAdd refreshResult={upsertProficiencyLocally} />
        )}
        {updateModal && (
          <ProficiencyEdit
            selectedData={currentItem}
            refreshResult={upsertProficiencyLocally}
          />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="ibox-index">
            <h3 className="py-4 px-4">{t("Proficiency.AddOrEdit.Title")}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="search-bar"
                placeholder={t("Proficiency.List.Input.Placeholder.Search")}
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
                  {t("Proficiency.List.Table.Heading.Name")}
                </th>

                <th scope="col" className="font-semibold">
                  {t("Proficiency.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                filteredItems?.map((item: ProficiencyModel, index: number) => (
                  <tr key={index} className="table-data-row">
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

export default ProficiencyList;
