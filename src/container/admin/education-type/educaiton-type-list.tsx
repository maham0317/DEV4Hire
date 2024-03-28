import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

import EducationTypeAdd from "../../../components/admin/education-type/education-type-add";
import EducationTypeModel from "../../../interfaces/setup/education-type.model";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
import {
  useDeleteEducationTypeMutation,
  useGetAllEducationTypeQuery,
} from "../../../services/education-type";
import EducationTypeEdit from "../../../components/admin/education-type/education-type-edit";
const EducationList = () => {
  const [addModal, setAddModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const [query, setQuery] = useState("");

  const { data, isLoading: loading } = useGetAllEducationTypeQuery();
  const [deleteEducationType, { isLoading: isDeleteing }] =
    useDeleteEducationTypeMutation();

  //Modal
  const createindustrylist = () => {
    setAddModal(!addModal);
  };
  const toggleUpdateModal = (item: EducationTypeModel) => {
    setUpdateModal(!updateModal);
  };
  const handleDelete = async (id: number) => {
    var res = await deleteEducationType(id);
    if (res) toast.success("Item deleted successfully");
    else toast.error("there is error");
  };
  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };
  // Filtered Items
  const filteredItems = data?.filter((item: EducationTypeModel) => {
    return item.Name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">Education Type List</div>
        <button className="blue-button mb-5" onClick={createindustrylist}>
          <FaPlus className="" />
          Create New
        </button>
        {addModal && <EducationTypeAdd />}
        {updateModal && <EducationTypeEdit item={selectedItem} />}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
            <h3 className="py-4 px-4">Education Type</h3>
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
                <th scope="col" className="table-header center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item: EducationTypeModel) => (
                <tr key={item.Id} className="table-data-row">
                  <td className="py-4">{item.Name}</td>

                  <td className="text-red-500">
                    <Button onClick={() => handleDelete(item.Id)}>
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
export default EducationList;
