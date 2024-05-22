import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import NetworkAdd from "@/components/cv/network/network-add";
import NetworkEdit from "@/components/cv/network/network-edit";
import ActionButtons from "@/components/common/action-buttons";
import NetworkAndCommunitiesModel from "@/interfaces/network-and-community/network-and-community.model";
import { useNetworkAndCommunity } from "./network-list-hook";

const NetworkList: React.FC = () => {
  const { t } = useTranslation();
  const [isAddFormOpen, setIsAddFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<NetworkAndCommunitiesModel | null>(null);
  const { handleDelete, filteredItems, callApiAsync, toggleUpdateModal, data } =
    useNetworkAndCommunity();
  const handleEditLinkClick = () => {
    setIsEditFormOpen(true);
    setIsAddFormOpen(false);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
  };

  const handleAddClick = () => {
    setIsAddFormOpen(true);
    setIsEditFormOpen(false);
  };

  const handleCloseAddForm = () => {
    setIsAddFormOpen(false);
  };
  const handleEditClick = (item: NetworkAndCommunitiesModel) => {
    setIsEditFormOpen(true);
    setSelectedItem(item);
  };
  return (
    <>
      {!isEditFormOpen && !isAddFormOpen ? (
        <div className="bg-white p-4 rounded shadow mt-5 text-base">
          <div className="flex justify-between items-center mb-4 ml-5">
            <h2 className="cv-page-title  times-new-roman-font">
              {t("NetworksTitle")}
            </h2>
            <ActionButtons
              onAdd={handleAddClick}
              onEdit={handleEditLinkClick}
            />
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Network or Community
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems?.map(
                  (item: NetworkAndCommunitiesModel, index: number) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <td className="px-6 py-4">{item.NetworkOrCommunity}</td>
                      <td
                        className="px-6 py-4 cursor-pointer"
                        onClick={(
                          e: React.MouseEvent<HTMLTableCellElement>
                        ) => {
                          e.preventDefault();
                          handleDelete(item.Id);
                        }}
                      >
                        Delete
                      </td>
                      <td
                        className="px-6 py-4 cursor-pointer"
                        onClick={() => handleEditClick(item)}
                      >
                        Edit
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <div className="flex ml-5 mt-2">
            {/* <p className="text-[#332c55] mr-5 text-base">{t("AddNetwork")}</p> */}
          </div>
          <button className="add-entry" onClick={handleAddClick}>
            {t("AddEntry")}
          </button>
        </div>
      ) : null}
      {isAddFormOpen && <NetworkAdd onClose={handleCloseAddForm} />}
      {isEditFormOpen && <NetworkEdit onClose={handleCloseEditForm} />}
    </>
  );
};

export default NetworkList;
