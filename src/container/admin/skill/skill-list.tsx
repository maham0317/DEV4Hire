import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { Button } from "flowbite-react";
import SkillTypeModel from "@/interfaces/skill/skill.model";
import SkillEdit from "@/components/admin/skill/skill-edit";
import { useSkill } from "@/container/admin/skill/skill-list.hook";
import SkillAdd from "@/components/admin/skill/skill-add";
import { useTranslation } from "react-i18next";
const SkillList = () => {
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
  } = useSkill();

  return (
    <div className="bg-blue-50 h-screen px-6 py-10 ">
      <div className="container-fluid">
        <div className="page-title">{t("Skill.List.Title")}</div>
        <button className="blue-button mb-5" onClick={toggleAddeModal}>
          <FaPlus className="" />
          {t("Skill.List.Button.CreateNew")}
        </button>
        {addModal && <SkillAdd refreshResult={callApiAsyc} />}
        {updateModal && (
          <SkillEdit selectedData={currentItem} refreshResult={callApiAsyc} />
        )}
      </div>
      <div className="ibox">
        <div className="container-fluid ibox-title ">
          <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
            <h3 className="py-4 px-4">{t("Skill.AddOrEdit.Title")}</h3>
            <div className="flex items-center">
              <input
                type="text"
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
                placeholder={t("Skill.List.Input.Placeholder.Search")}
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
                  {t("Skill.List.Table.Heading.Name")}
                </th>
                <th scope="col" className="font-semibold">
                  {t("Skill.List.Table.Heading.Actions")}
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredItems?.map((item: SkillTypeModel) => (
                <tr key={item.Id} className="table-data-row">
                  <td
                    className="py-4"
                    onClick={() => {
                      toggleUpdateModal(item);
                    }}
                  >
                    {item.SkillName}
                  </td>
                  {/* <td className="py-4">{item.Description}</td> */}
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
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
