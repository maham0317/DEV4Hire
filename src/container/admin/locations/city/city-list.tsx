import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useCity } from "./city-list-hook";
import CityModel from "@/interfaces/location/city.model";
import CityAdd from "@/components/admin/locations/city/city-add";
import CityEdit from "@/components/admin/locations/city/city-edit";
import { CityCountryData } from "@/components/admin/locations/city/city-country-data";

const CityList = (id: any) => {
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
        <div className="page-title">{t("City.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("City.List.Button.CreateNew")}
        </button>
        {addModal && <CityAdd refreshResult={callApiAsyc} />}
        {updateModal && (
          <CityEdit selectedData={currentItem} refreshResult={callApiAsyc} />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
            <h3 className="py-4 px-4">{t("City.AddOrEdit.Title")}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder={t("City.List.Input.Placeholder.Search")}
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
                  {t("City.List.Table.Heading.Name")}
                </th>
                <th scope="col" className="table-header">
                  {t("City.List.Table.Heading.CountryName")}
                </th>
                <th scope="col" className="font-semibold">
                  {t("City.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item: CityModel) => {
                return (
                  <tr key={item.Id} className="table-data-row">
                    <td
                      className="py-4"
                      onClick={() => {
                        toggleUpdateModal(item);
                      }}
                    >
                      {item.CityName}
                    </td>

                    <td
                      className="py-4"
                      onClick={() => {
                        toggleUpdateModal(item);
                      }}
                    >
                      <CityCountryData id={item.CountryId} />
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CityList;
