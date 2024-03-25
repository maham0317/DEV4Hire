import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

import Checkbox from "@mui/material/Checkbox";
import IndustryTypeAdd from "../../../components/admin/industry-type/industry-type-add";
const EducationList = () => {
  const [industrylist, setIndustrylist] = useState(false);
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Laptop", description: "Silver" },
    { id: 2, name: "Laptop PC", description: "White" },
    { id: 3, name: "Accessories", description: "Black" },
  ]);

  //Modal
  const createindustrylist = () => {
    setIndustrylist(!industrylist);
  };
  //Search Data
  const searchData = (e: any) => {
    const key = e.target.value;
    setQuery(key);
  };
  // Filtered Items
  const filteredItems = items.filter((item) => {
    return (
      item.name.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase())
    );
  });

  return (
    <>
      <div className="bg-blue-50 h-screen px-6 py-10 ">
        <div className="container-fluid">
          <div className="page-title">Industry Type List</div>
          <button className="blue-button mb-5" onClick={createindustrylist}>
            <FaPlus className="" />
            Create New
          </button>
          {industrylist && <IndustryTypeAdd />}
        </div>
        <div className="ibox">
          <div className="container-fluid ibox-title ">
            <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
              <h3 className="py-4 px-4">Industry Type</h3>
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
                {filteredItems.map((item) => (
                  <tr key={item.id} className="table-data-row">
                    <td className="py-4">{item.name}</td>
                    <td className="py-4">{item.description}</td>
                    <td className="text-red-500">
                      <span className="flex center">
                        <RxCross2 />
                      </span>
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
