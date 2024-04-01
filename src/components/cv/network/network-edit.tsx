import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import NetworkAndCommunitiesModel from "../../../interfaces/network-and-community/network-and-community.model";

interface NetworkEditProps {
  onClose: () => void;
  initialData?: InitialData;
}

interface InitialData {
  networkName: string;
}

const NetworkEdit: React.FC<NetworkEditProps> = ({ onClose, initialData }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NetworkAndCommunitiesModel>();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    onClose();
  };
  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <label className="label-text">
            Network or community
          </label>
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
          >
            Save changes
          </button>
          <a
            href="#"
            onClick={onClose}
            className="discard-button ml-2"
          >
            Discard changes
          </a>
        </div>
      </form>
    </div>
  );
};

export default NetworkEdit;
