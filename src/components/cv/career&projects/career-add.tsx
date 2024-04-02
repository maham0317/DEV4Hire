import React from "react";
import { useForm } from "react-hook-form";
import UserCareerModel from "@/interfaces/user/user-career.model";

interface CareerAddProps {
  onClose: () => void;
}

const CareerAdd: React.FC<CareerAddProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCareerModel>();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    onClose();
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Add job experience</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <label className="block text-sm font-medium text-gray-500">
            Company
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. Microsoft"
            {...register("CompanyName", {
              required: "CompanyName is required",
            })}
          />
          {errors.CompanyName && (
            <div className="text-red-500">{errors.CompanyName.message}</div>
          )}
        </div>

        <div className="flex justify-between mt-5">
          <div className="w-1/3 mr-2">
            <label className="block text-sm font-medium text-gray-500">
              Start Date
            </label>
            <div className="flex items-center">
              <span className="text-sm mt-1 mr-2">
                <i className="far fa-calendar"></i>
              </span>
              <input
                type="text"
                className="input-text w-full"
                placeholder="MM/YYYY"
                {...register("StartDate", {
                  required: "Start Date is required",
                })}
              />
            </div>
            {errors.StartDate && (
              <div className="text-red-500">{errors.StartDate.message}</div>
            )}
          </div>

          <div className="w-1/3 mr-2">
            <label className="block text-sm font-medium text-gray-500">
              End Date
            </label>
            <div className="flex items-center">
              <span className="text-sm mt-1 mr-2">
                <i className="far fa-calendar"></i>
              </span>
              <input
                type="text"
                className="input-text w-full"
                placeholder="MM/YYYY"
                {...register("EndDate", { required: "End Date is required" })}
              />
            </div>
            {errors.EndDate && (
              <div className="text-red-500">{errors.EndDate.message}</div>
            )}
          </div>

          <div className="w-1/3 flex items-center space-x-2">
            <input
              type="checkbox"
              className="mr-2"
              {...register("IsStillWorking")}
            />
            <label className="mr-2">Still working here</label>
          </div>
        </div>

        <div className="title">
          <label className="block text-sm font-medium text-gray-500">
            Job title
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. Manager"
            {...register("JobTile", { required: "Job Title is required" })}
          />
          {errors.JobTile && (
            <div className="text-red-500">{errors.JobTile.message}</div>
          )}
        </div>

        <div className="title">
          <label className="block text-sm font-medium text-gray-500">
            Description
          </label>
          <textarea
            className="input-text w-full h-36"
            placeholder="Describe your role in the company."
            {...register("Description", {
              required: "Description is required",
            })}
          />
          {errors.Description && (
            <div className="text-red-500">{errors.Description.message}</div>
          )}

          <label
            htmlFor="usedSkills"
            className="block text-sm font-medium text-gray-500"
          >
            Used skills (optional, maximum 10)
          </label>
          <select
            id="usedSkills"
            className="border rounded-md p-2 w-full text-gray-300"
          ></select>
        </div>
        <hr className="hr-tag" />

        <div className="flex justify-end mt-3">
          <button
            type="submit"
            className="save-button"
          >
            Save
          </button>
          <a
            href="#"
            onClick={onClose}
            className="discard-button"
          >
            Cancel
          </a>
        </div>
      </form>
    </div>
  );
};

export default CareerAdd;
