import React from "react";
import { useTranslation } from "react-i18next";

import { useForm } from "react-hook-form";
import NetwrokAddAndEdit from "../../../interfaces/Network/NetworkAddAnd Edit";

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
  } = useForm<NetwrokAddAndEdit>();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    onClose();
  };
  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">
            Network or community
          </label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Project Manager Network"
            {...register("networkName", { required: true })}
          />
          {errors.networkName && (
            <div className="text-red-500">Network or community is required</div>
          )}
        </div>

        <hr className="mt-5 w-full border-t border-gray-200" />

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Save changes
          </button>
          <a
            href="#"
            onClick={onClose}
            className="text-blue-700 hover:text-blue-500 font-semibold py-1 px-4 rounded ml-2"
          >
            Discard changes
          </a>
        </div>
      </form>
    </div>
  );
};

export default NetworkEdit;
