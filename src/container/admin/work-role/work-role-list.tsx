import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import WorkRoleAdd from "@/components/admin/work-role/work-role-add";
import { RootState } from "@/store/store";
import { useAppDispatch } from "@/hooks/appDispatch";
import { getAllWorkRole } from "@/store/work-roles/work-roles";
import WorkRoleModel from "@/interfaces/work-role/work-role.model";
import { useAppSelector } from "@/hooks/appSelector";
import { useTranslation } from "react-i18next";

const WorkRoleList = () => {
  const { t } = useTranslation();
  const [workrolelist, setWorkrolelist] = useState(false);

  let workRoleList = useAppSelector((state: RootState) => state.workRole.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllWorkRole());
  }, []);

  // Checkbox
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  // Modal
  const createWorkRoleList = () => {
    setWorkrolelist(!workrolelist);
  };
  return (
    <>
      <div className="bg-blue-50 h-screen p-4">
        <div className="container-fluid p-3">
          <div className="text-xl text-indigo-900 font-montserrat font-normal">
            {t("WorkRole.List.Title")}
          </div>
          <button
            className="text-white mt-3 bg-blue-500 text-blue-700 font-montserrat font-semibold gap-1 border border-blue-500 hover:border-transparent rounded flex items-center justify-center w-40 h-10"
            onClick={createWorkRoleList}
          >
            <FaPlus className="" />
            {t("WorkRole.List.Button.CreateNew")}
          </button>
          {workrolelist && <WorkRoleAdd />}
        </div>
        <div className="bg-white p-4 border shadow-md">
          <div className="container-fluid bg-blue-50 shadow-sm mt-2 ">
            <div className="flex justify-between text-xl text-indigo-900 font-montserrat font-semibold w-full h-16 border-b-1 border-gray-300 ">
              <div className="py-4 px-2">{t("WorkRole.List.Table.Title")}</div>
              <div className="flex items-center">
                <input
                  type="text"
                  className="border border-gray-300 text-lg font-medium rounded-l px-4 py-2 focus:outline-none focus:border-blue-500"
                  placeholder={t("WorkRole.List.Input.Placeholder.Search")}
                />
                <button className="bg-blue-500 mr-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-r">
                  <i className="fa-solid fa-magnifying-glass" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative mt-3 ">
            <table className="w-full text-left font-montserrat text-indigo-900">
              <thead className="border-b">
                <tr className="">
                  <th scope="col" className="px-6 py-3">
                    <div className="flex w-max gap-4">
                      <Checkbox
                        {...label}
                        defaultChecked
                        sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                      />
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3  font-semibold">
                    {t("WorkRole.List.Table.Heading.Name")}
                  </th>
                  <th scope="col" className="px-6 py-3  font-semibold">
                    {t("WorkRole.List.Table.Heading.Description")}
                  </th>
                  <th scope="col" className="font-semibold">
                    {t("WorkRole.List.Table.Heading.Actions")}
                  </th>
                </tr>
              </thead>
              <tbody>
                {Array.isArray(workRoleList) &&
                  workRoleList?.map((item: WorkRoleModel) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th scope="col" className="px-6 py-3">
                        <Checkbox
                          {...label}
                          defaultChecked
                          sx={{ "& .MuiSvgIcon-root": { fontSize: 16 } }}
                        />
                      </th>
                      <td className="px-6 py-4">{item.WorkRoleName}</td>
                      <td className="px-6 py-4">{item.WorkRoleDesc}</td>
                      <td className="px-6 py-3 text-red-500 ">
                        <RxCross2 />
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

export default WorkRoleList;
