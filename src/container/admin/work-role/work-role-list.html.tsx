import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import WorkRoleEdit from "@/components/admin/work-role/work-role-edit";
import { useWorkRole } from "@/container/admin/work-role/work-role-list.hook";
import WorkRoleAdd from "@/components/admin/work-role/work-role-add";
import { useTranslation } from "react-i18next";
import AppLoader from "@/components/@shared/loader/app-loader";
import { Pagination } from "flowbite-react";
const WorkRoleList = () => {
  const { t } = useTranslation();
  const {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    isLoading,
    searchData,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    upsertWorkRoleLocally,
    onPageChange,
    result,
  } = useWorkRole();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">{t("WorkRole.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("WorkRole.List.Button.CreateNew")}
        </button>
        {addModal && <WorkRoleAdd refreshResult={upsertWorkRoleLocally} />}
        {updateModal && (
          <WorkRoleEdit
            selectedData={currentItem}
            refreshResult={upsertWorkRoleLocally}
          />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
            <h3 className="py-4 px-4">{t("WorkRole.AddOrEdit.Title")}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="search-bar"
                placeholder={t("WorkRole.List.Input.Placeholder.Search")}
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
                  {t("WorkRole.List.Table.Heading.Name")}
                </th>
                <th scope="col" className="table-header center">
                  {t("WorkRole.List.Table.Heading.Description")}
                </th>
                <th scope="col" className="font-semibold center ">
                  {t("WorkRole.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                result?.Items?.map((item: WorkRoleModel, index: number) => (
                  <tr key={item.Id} className="table-data-row">
                    <td
                      className="py-4"
                      onClick={() => {
                        toggleUpdateModal(item);
                      }}
                    >
                      {item.WorkRoleName}
                    </td>
                    <td
                      className="py-4 center "
                      onClick={() => {
                        toggleUpdateModal(item);
                      }}
                    >
                      {item.WorkRoleDesc}
                    </td>
                    <td className="text-red-500">
                      <button
                        onClick={(e: any) => {
                          e.preventDefault();
                          handleDelete(item.Id);
                        }}
                        className="flex justify-center items-center w-full"
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

export default WorkRoleList;
