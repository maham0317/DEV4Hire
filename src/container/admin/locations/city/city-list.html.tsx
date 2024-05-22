import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useCity } from "./city-list-hook";
import CityModel from "@/interfaces/location/city.model";
import CityAdd from "@/components/admin/locations/city/city-add";
import CityEdit from "@/components/admin/locations/city/city-edit";
import { CityCountryData } from "@/components/admin/locations/city/city-country-data";
import AppLoader from "@/components/@shared/loader/app-loader";
import { Pagination } from "flowbite-react";
const CityList = (id: any) => {
  const { t } = useTranslation();
  const {
    toggleAddeModal,
    toggleUpdateModal,
    handleDelete,
    data,
    searchData,
    query,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    isLoading,
    result,
    upsertCityLocally,
    onPageChange,
  } = useCity();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">{t("City.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("City.List.Button.CreateNew")}
        </button>
        {addModal && <CityAdd refreshResult={upsertCityLocally} />}
        {updateModal && (
          <CityEdit
            selectedData={currentItem}
            refreshResult={upsertCityLocally}
          />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="ibox-index">
            <h3 className="py-4 px-4">{t("City.AddOrEdit.Title")}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="search-bar"
                placeholder={t("City.List.Input.Placeholder.Search")}
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
              {!isLoading &&
                result?.Items?.map((item: CityModel, index: number) => (
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
                        className="flex justify-center items-center "
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
export default CityList;
