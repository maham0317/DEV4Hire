import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import IndustryTypeAdd from "../../../components/admin/industry-type/industry-type-add";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useAppDispatch } from "../../../hooks/appDispatch";
import {
  deleteIndustryTypeById,
  getAllIndustryType,
} from "../../../store/industry-type/industry-type";
import { IndustryTypeModel } from "../../../interfaces/industry/industry.model";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useIndustry } from "./industry-type-list.hook";
import IndustrytypeEdit from "@/components/admin/industry-type/industry-type-edit";

const IndustryList = () => {
  const {
    toggleAddModal,
    toggleUpdateModal,
    handleDelete,
    searchData,
    addModal,
    updateModal,
    currentItem,
    filteredItems,
  } = useIndustry();
  const { t } = useTranslation();
  console.log("filters", filteredItems);

  // const [industrylist, setIndustrylist] = useState(false);

  // const industryList = useSelector(
  //   (state: RootState) => state.industrytype.data
  // );

  // const isLoading = useSelector(
  //   (state: RootState) => state.industrytype.isLoading
  // );
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getAllIndustryType());
  // }, []);

  // // useEffect(() => {
  // //     if (isLoading) {
  // //         dispatch(getAllIndustryType())
  // //     }
  // // }, [industryList]);

  // //Delete Industry list
  // const handleDeleteIndustry = (id: number) => {
  //   try {
  //     console.log("delete", id);
  //     dispatch(deleteIndustryTypeById(id));
  //   } catch (error) {
  //     console.error("Error deleting industry list:", error);
  //   }
  // };

  // //Create Indudustry list
  // const createIndustryList = () => {
  //   setIndustrylist(!industrylist);
  // };

  return (
    <>
      <div className="bg-blue-50 h-screen px-6 py-10">
        <div className="container-fluid ">
          <div className="page-title">{t("IndustryType.List.Title")}</div>
          <button className="blue-button mb-5" onClick={toggleAddModal}>
            <FaPlus className="" />

            {t("IndustryType.List.Button.CreateNew")}
          </button>
          {addModal && <IndustryTypeAdd />}
          {updateModal && <IndustrytypeEdit />}
          {/* {industrylist && <IndustryTypeAdd />} */}
        </div>
        <div className="ibox">
          <div className="container-fluid ibox-title ">
            <div className="ibox-index">
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
                    {t("IndustryType.List.Table.Heading.Name")}
                  </th>
                  <th scope="col" className="table-header">
                    {t("IndustryType.List.Table.Heading.Description")}
                  </th>
                  <th scope="col" className="table-header center ">
                    {t("IndustryType.List.Table.Heading.Actions")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems?.map((item: IndustryTypeModel) => (
                  <tr
                    key={item.Id}
                    className="table-data-row"
                    onClick={() => {
                      toggleUpdateModal(item);
                    }}
                  >
                    <td className="px-6 py-4">{item.IndustryName}</td>
                    <td className="px-6 py-4">{item.Description}</td>
                    <td>
                      <button
                        className="px-6 py-3 text-red-500"
                        type="button"
                        onClick={() => handleDelete(item.Id)}
                      >
                        <span className="flex center">
                          <i className="fa-solid fa-xmark"></i>
                        </span>
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/edit/${item.Id}`}
                        className="edit-icons bg-primary text-light"
                      >
                        <FaEdit />
                      </Link>
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

export default IndustryList;
