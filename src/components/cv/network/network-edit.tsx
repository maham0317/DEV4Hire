import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import NetworkAndCommunitiesModel from "@/interfaces/network-and-community/network-and-community.model";
import { useUpdateNetworkAndCommunityMutation } from "@/services/network-and-communities";
import { toast } from "react-toastify";

interface NetworkEditProps {
  onClose: () => void;
  initialData?: InitialData;
  selectedItem: NetworkAndCommunitiesModel;
}

interface InitialData {
  networkName: string;
}

const NetworkEdit: React.FC<NetworkEditProps> = ({ onClose, selectedItem }) => {
  const [updateNetworkAndCommunity, { isLoading, isSuccess, error, isError }] =
    useUpdateNetworkAndCommunityMutation();

  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NetworkAndCommunitiesModel>({ defaultValues: selectedItem });

  const onSubmit = async (data: NetworkAndCommunitiesModel) => {
    try {
      // Assuming the correct HTTP method is POST for updating
      await updateNetworkAndCommunity(data);
      toast.success("Network or community updated successfully");
      onClose(); // Close the edit modal
    } catch (error) {
      console.error("Error:", error);
      toast.error("There is some error");
    }
  };

  return (
    <div className="bg-white p-10 mt-5 rounded shadow">
      <h2 className="text-2xl font-bold">Edit entry</h2>
      <form>
        <div className="title">
          <label className="label-text">Network or community</label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. Project Manager Network"
            {...register("NetworkOrCommunity", { required: true })}
          />
          {errors.NetworkOrCommunity && (
            <div className="text-red-500">Network or community is required</div>
          )}
        </div>
        <hr className="hr-tag" />
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="save-button "
            onClick={handleSubmit(onSubmit)}
          >
            Save changes
          </button>
          <a href="#" onClick={onClose} className="discard-button ml-2">
            Discard changes
          </a>
        </div>
      </form>
    </div>
  );
};

export default NetworkEdit;
