import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import NetworkAndCommunitiesModel from "@/interfaces/network-and-community/network-and-community.model";
import { useNetworkAndCommunity } from "./network-list-hook";
import { useCreateNetworkAndCommunityMutation } from "@/services/network-and-communities";
import { toast } from "react-toastify";
import NetworkEdit from "./network-edit";

interface NetworkAddProps {
  onClose: () => void;
}

const NetworkAdd: React.FC<NetworkAddProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const { handleDelete, filteredItems, callApiAsync, toggleUpdateModal, data } =
    useNetworkAndCommunity();
  const [createNetworkAndCommunity] = useCreateNetworkAndCommunityMutation();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<NetworkAndCommunitiesModel | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NetworkAndCommunitiesModel>();

  const onSubmit = async (data: NetworkAndCommunitiesModel) => {
    try {
      await createNetworkAndCommunity(data);
      toast.success("Network and community saved successfully.");
      reset();
      callApiAsync();
    } catch (error) {
      console.log("Error adding networkandcommunity: ", error);
      toast.error("Error adding networkandcommunity");
    }
  };
  const handleEditClick = (item: NetworkAndCommunitiesModel) => {
    setIsEditFormOpen(true);
    setSelectedItem(item);
  };

  return (
    <div className="bg-white p-10 mt-5 rounded shadow">
      <h2 className="text-2xl font-bold">Add entry</h2>
      {isEditFormOpen ? (
        <NetworkEdit
          selectedItem={selectedItem}
          onClose={() => setIsEditFormOpen(false)}
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="title">
            <label className="label-text">Network or community</label>
            <input
              type="text"
              className="input-text"
              placeholder="e.g. Project Manager Network"
              {...register("NetworkOrCommunity", {
                required: "Network or community is required",
              })}
            />
            {errors.NetworkOrCommunity && (
              <div className="text-red-500">
                {errors.NetworkOrCommunity.message}
              </div>
            )}
          </div>
          <hr className="hr-tag" />
          {/* <div className="relative overflow-x-auto">
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
          </div> */}
          <div className="flex justify-end mt-5">
            <button type="submit" className="save-button">
              Save changes
            </button>
            <button onClick={onClose} className="discard-button ml-2">
              Discard changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default NetworkAdd;
