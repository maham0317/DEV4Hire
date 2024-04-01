import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";

import Checkbox from "@mui/material/Checkbox";
import IndustryTypeAdd from "../../../components/admin/industry-type/industry-type-add";
import EducationTypeAdd from "../../../components/admin/education-type/education-type-add";
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
          {industrylist && <EducationTypeAdd />}
        </div>
        <div className="ibox">
          <div className="container-fluid ibox-title ">
            <div className="ibox-index">
              <h3 className="py-4 px-4">Industry Type</h3>
              <div className="flex items-center">
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
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
                        <i className="fa-solid fa-xmark"></i>
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
