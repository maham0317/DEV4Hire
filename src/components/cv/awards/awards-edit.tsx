import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AwardModel } from "@/interfaces/award/award.model";

interface AwardEditProps {
  onClose: () => void;
}

const AwardEdit: React.FC<AwardEditProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AwardModel>();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    onClose();
  };
  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit Award</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">
            Award title
          </label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. The Nobel Prize"
            {...register("AwardTitle", { required: true })}
          />
          {errors.AwardTitle && (
            <div className="text-red-500">Award Title is required</div>
          )}
        </div>

        <div className="w-1/4 flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">
            Year
          </label>
          <div className="flex items-center">
            <span className="text-sm mt-1 mr-2">
              <i className="far fa-calendar"></i>
            </span>
            <input
              type="text"
              className="border rounded-md p-2"
              placeholder="YYYY"
              {...register("Year", { required: true })}
            />
            {errors.Year && (
              <div className="text-red-500">Year is required</div>
            )}
          </div>
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

export default AwardEdit;
