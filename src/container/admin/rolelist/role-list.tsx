import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { useWorkRole } from "../work-role/work-role-list.hook";
import RoleAdd from "@/components/admin/role-list/role-list-add";
import RoleEdit from "@/components/admin/role-list/role-list-edit";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { useTranslation } from "react-i18next";
import { FaEdit } from "react-icons/fa";

const RoleList = () => {
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
  } = useWorkRole();
  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">{t("Roles.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("Roles.List.Button.CreateNew")}
        </button>
        {addModal && <RoleAdd refreshResult={callApiAsyc} />}
        {updateModal && (
          <RoleEdit selectedData={currentItem} refreshResult={callApiAsyc} />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="ibox-index">
            <h3 className="py-4 px-4">{t("Roles.AddOrEdit.Title")}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="search-bar"
                placeholder="search"
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
                  {t("Roles.List.Table.Heading.Name")}
                </th>
                <th scope="col" className="table-header">
                  {t("Roles.List.Table.Heading.Description")}
                </th>
                <th scope="col" className="font-semibold">
                  {t("Roles.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item: WorkRoleModel) => (
                <tr
                  key={item.Id}
                  className="table-data-row"
                  onClick={() => {
                    toggleUpdateModal(item);
                  }}
                >
                  <td className="py-4">{item.WorkRoleName}</td>
                  <td className="py-4">{item.WorkRoleDesc}</td>
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

export default RoleList;
