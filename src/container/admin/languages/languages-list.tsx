import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import LanguageModel from "@/interfaces/language/language.model";
import { Button } from "flowbite-react";
import LanguageEdit from "@/components/admin/language/language-edit";
import { useLanguage } from "@/container/admin/languages/languages-list.hook";
import LanguageAdd from "@/components/admin/language/language-add";
import { useTranslation } from "react-i18next";
const LanguageList = () => {
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
  } = useLanguage();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">{t("Language.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("Language.List.Button.CreateNew")}
        </button>
        {addModal && <LanguageAdd refreshResult={callApiAsyc} />}
        {updateModal && (
          <LanguageEdit
            selectedData={currentItem}
            refreshResult={callApiAsyc}
          />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
            <h3 className="py-4 px-4">{t("Language.AddOrEdit.Title")}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder={t("Language.List.Input.Placeholder.Search")}
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
                  {t("Language.List.Table.Heading.Name")}
                </th>
                <th scope="col" className="table-header">
                  {t("Language.List.Table.Heading.Description")}
                </th>
                <th scope="col" className="font-semibold">
                  {t("Language.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item: LanguageModel) => (
                <tr
                  key={item.Id}
                  className="table-data-row"
                  onClick={() => {
                    toggleUpdateModal(item);
                  }}
                >
                  <td className="py-4">{item.LanguageName}</td>
                  <td className="py-4">{item.Description}</td>
                  <td className="text-red-500">
                    <button
                      // onClick={(e: any) => {
                      //   e.preventDefault();
                      //   handleDelete(item.Id);
                      // }}
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleDelete(item.Id);
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

export default LanguageList;
