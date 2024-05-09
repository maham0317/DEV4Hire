import React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { AwardModel } from "@/interfaces/award/award.model";
import { useUpdateProfileAwardMutation } from "@/services/award";
import { toast } from "react-toastify";

interface AwardEditProps {
  onClose: () => void;
}

const AwardEdit: React.FC<AwardEditProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const [updateAward, { isLoading }] = useUpdateProfileAwardMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AwardModel>();

  const onSubmit = async (data: any) => {
    try {
      await updateAward(data);
      toast.success("Award  updated successfully");
      reset();
      onClose();
      // updateList();
    } catch (error) {
      console.error("Error updating award:", error);
      toast.error("Error updating  award");
    }
  };
  // const onSubmit = (data: any) => {
  //   console.log("Form data:", data);
  //   onClose();
  // };
  return (
    <div className="bg-white p-10 mt-5 rounded shadow">
      <h2 className="text-2xl font-bold">Edit Award</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <label className="label-text">Award title</label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. The Nobel Prize"
            {...register("AwardTitle", { required: "AwardTitle is required" })}
          />
          {errors.AwardTitle && (
            <div className="text-red-500">{errors.AwardTitle?.message}</div>
          )}
        </div>

        <div className="w-1/4 title">
          <label className="label-text">Year</label>
          <div className="flex items-center">
            <span className="text-sm mt-1 mr-2">
              <i className="far fa-calendar"></i>
            </span>
            <input
              type="text"
              className="input-text"
              placeholder="YYYY"
              {...register("Year", { required: "Year is required" })}
            />
            {errors.Year && (
              <div className="text-red-500">{errors.Year?.message}</div>
            )}
          </div>
        </div>

        <hr className="hr-tag" />

        <div className="flex justify-end mt-5">
          <button type="submit" className="save-button">
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

export default AwardEdit;
