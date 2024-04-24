import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { Button } from "flowbite-react";
import { useTranslation } from "react-i18next";
import CountryModel from "@/interfaces/location/country.model";
import CountryEdit from "@/components/admin/locations/country/country-edit";
import CountryAdd from "@/components/admin/locations/country/country-add";
import { useCity } from "./city-list-hook";
import CityModel from "@/interfaces/location/city.model";
import CityAdd from "@/components/admin/locations/city/city-add";
import CityEdit from "@/components/admin/locations/city/city-edit";
const CityList = () => {
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
  } = useCity();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">City</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          Create New
        </button>
        {addModal && <CityAdd refreshResult={callApiAsyc} />}
        {updateModal && (
          <CityEdit selectedData={currentItem} refreshResult={callApiAsyc} />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
            <h3 className="py-4 px-4">City</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder="search"
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
                {/* <th scope="col" className="table-header">
                  {t("Skill.List.Table.Heading.Description")}
                </th> */}
                <th scope="col" className="font-semibold">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item: CityModel) => (
                <tr
                  key={item.id}
                  className="table-data-row"
                  onClick={() => {
                    toggleUpdateModal(item);
                  }}
                >
                  <td className="py-4">{item.CityName}</td>
                  {/* <td className="py-4">{item.Description}</td> */}
                  <td className="text-red-500">
                    <button
                      // onClick={(e: any) => {
                      //   e.preventDefault();
                      //   handleDelete(item.Id);
                      // }}
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleDelete(item.id);
                        // console.log(item.Id);
                        console.log(item);
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

export default CityList;
