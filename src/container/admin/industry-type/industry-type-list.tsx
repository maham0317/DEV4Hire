import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import IndustryTypeAdd from "@/components/admin/industry-type/industry-type-add";
import { IndustryTypeModel } from "../../../interfaces/industry-type/industry-type.model";
import { useIndustryType } from "./industry-type-list.hook";
import IndustryTypeEdit from "@/components/admin/industry-type/industry-type-edit";
import { useTranslation } from "react-i18next";
import { IndustryTypeData } from "@/components/admin/industry-type/industry-type-data";

const IndustryTypeList = () => {
  const { t } = useTranslation();
  const {
    toggleAddModal,
    toggleUpdateModal,
    handleDelete,
    searchData,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
    callApiAsync,
  } = useIndustryType();

  return (
    <>
      <div className="bg-blue-50 h-full p-4">
        <div className="container-fluid p-3">
          <div className="font-montserrat "></div>
          <div className="text-xl text-indigo-900 font-montserrat font-normal">
            {t("IndustryType.List.Title")}
          </div>
          <button
            className="text-white mt-3 bg-blue-500 text-blue-700 font-montserrat font-semibold gap-1 border border-blue-500 hover:border-transparent rounded flex items-center justify-center w-40 h-10"
            onClick={toggleAddModal}
          >
            <FaPlus className="" />
            {t("IndustryType.List.Button.CreateNew")}
          </button>
          {addModal && <IndustryTypeAdd refreshResult={callApiAsync} />}
          {updateModal && (
            <IndustryTypeEdit
              selectedData={currentItem}
              refreshResult={callApiAsync}
            />
          )}
        </div>
        <div className="ibox">
          <div className="container-fluid ibox-title ">
            <div className="ibox-index ">
              <div className="py-4 px-2">
                {t("IndustryType.List.Table.Title")}
              </div>
              <div className="flex items-center">
                <input
                  type="text"
                  className="search-bar"
                  placeholder={t("IndustryType.List.Input.Placeholder.Search")}
                  onChange={searchData}
                />
                <button title="" className="search-button">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>
          <div className="mt-6 ">
            <table className="ibox-content">
              <thead className="uppercase border-b">
                <tr className="">
                  <th scope="col" className="table-header">
                    {t("IndustryType.List.Table.Heading.Name")}
                  </th>
                  <th scope="col" className="table-header">
                    {t("IndustryType.List.Table.Heading.Description")}
                  </th>
                  <th scope="col" className="table-header">
                    ParentName
                  </th>
                  <th scope="col" className="font-semibold">
                    {t("IndustryType.List.Table.Heading.Actions")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems?.map((item: IndustryTypeModel) => {
                  return (
                    <tr key={item.Id} className="table-data-row">
                      <td
                        className="py-4"
                        onClick={() => {
                          toggleUpdateModal(item);
                        }}
                      >
                        {item.IndustryName}
                      </td>

                      <td
                        className="py-4"
                        onClick={() => {
                          toggleUpdateModal(item);
                        }}
                      >
                        {item.Description}
                      </td>
                      {/* <td className="px-6 py-4">{item.}</td> */}
                      <td>
                        <IndustryTypeData id={item.ParentId} />
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
    </>
  );
};

export default IndustryTypeList;
