import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { Button } from "flowbite-react";
import WorkRoleEdit from "@/components/admin/work-role/work-role-edit";
import { useWorkRole } from "@/container/admin/work-role/work-role-list.hook";
import WorkRoleAdd from "@/components/admin/work-role/work-role-add";
const WorkRoleList = () => {
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
        <div className="page-title">Work Roles</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          Create New
        </button>
        {addModal && <WorkRoleAdd refreshResult={callApiAsyc} />}
        {updateModal && (
          <WorkRoleEdit
            selectedData={currentItem}
            refreshResult={callApiAsyc}
          />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
            <h3 className="py-4 px-4">Work Roles</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="Search..."
                onChange={searchData}
              />
              <button className="bg-blue-500 mr-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
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
                  Name
                </th>
                <th scope="col" className="table-header">
                  Description
                </th>
                <th scope="col" className="table-header center">
                  Actions
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
                    <Button
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleDelete(item.Id);
                      }}
                    >
                      <span className="flex center">
                        <RxCross2 />
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

export default WorkRoleList;
