import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

import EducationTypeAdd from "../../../components/admin/education-type/education-type-add";
import { useAppSelector } from "../../../hooks/appSelector";
import { useAppDispatch } from "../../../hooks/appDispatch";
import { educationTypeSelector } from "../../../store/education-type";
import {
  deleteEducationTypeById,
  getAllEducationType,
} from "../../../store/education-type/education-type";
import EducationTypeModel from "../../../interfaces/setup/education-type.model";
import { Button } from "flowbite-react";
import { toast } from "react-toastify";
const EducationList = () => {
  const [industrylist, setIndustrylist] = useState(false);
  const [query, setQuery] = useState("");

  const { isLoading, dataList: items } = useAppSelector(educationTypeSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllEducationType());
  }, []);
  //Modal
  const createindustrylist = () => {
    setIndustrylist(!industrylist);
  };
  const handleDelete = async (id: number) => {
    await dispatch(deleteEducationTypeById(id));
    toast.success("Item deleted successfully");
  };
  //Search Data
  // const searchData = (e: any) => {
  //   const key = e.target.value;
  //   setQuery(key);
  // };
  // Filtered Items
  // const filteredItems = items?.filter((item: any) => {
  //   return (
  //     item.name.toLowerCase().includes(query.toLowerCase()) ||
  //     item.description.toLowerCase().includes(query.toLowerCase())
  //   );
  // });

  return (
    <>
      <div className="bg-blue-50 h-screen px-6 py-10 ">
        <div className="container-fluid">
          <div className="page-title">Education Type List</div>
          <button className="blue-button mb-5" onClick={createindustrylist}>
            <FaPlus className="" />
            Create New
          </button>
          {industrylist && <EducationTypeAdd />}
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
                  //onChange={searchData}
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
                {items?.map((item: EducationTypeModel) => (
                  <tr className="table-data-row">
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
    </>
  );
};
export default EducationList;
