import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { AwardModel } from "@/interfaces/award/award.model";
import { useCreateProfileAwardMutation } from "@/services/award";
import { toast } from "react-toastify";

interface AwardsAddProps {
  onClose: () => void;
}

const AwardsAdd: React.FC<AwardsAddProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const [createAward, { isLoading }] = useCreateProfileAwardMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AwardModel>();
  const onSubmit = async (data: any) => {
    try {
      await createAward(data);
      toast.success("Award entry added successfully");
      reset();
      onClose();
      // updateList();
    } catch (error) {
      console.error("Error adding Award entry:", error);
      toast.error("Error adding Award entry");
    }
  };
  // const onSubmit = (data: any) => {
  //   console.log("Form data:", data);
  //   onClose();
  // };
  return (
    <div className="bg-white p-10 mt-5 rounded shadow">
      <h2 className="text-2xl font-bold">Add entry</h2>
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

export default AwardsAdd;
