import React from "react";
import { useForm } from "react-hook-form";
import { useCreateEducaionCertificateMutation } from "@/services/education-certificate";
import { toast } from "react-toastify";

interface EducationAddProps {
  onClose: () => void;
  updateList: () => void;
}

const EducationAdd: React.FC<EducationAddProps> = ({ onClose, updateList }) => {
  const [createEducaionCertificate, { isLoading }] =
    useCreateEducaionCertificateMutation();

  const {
    reset,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await createEducaionCertificate(data);
      toast.success("Education entry added successfully");
      reset();
      onClose();
      updateList();
    } catch (error) {
      console.error("Error adding education entry:", error);
      toast.error("Error adding education entry");
    }
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Add education entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-4"></div>
        <div className="title">
          <label className="label-text">Course name</label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. Data Science - Coursera"
            {...register("CourseName", { required: "Course name is required" })}
          />
          {errors.CourseName && (
            <div className="text-red-500">{errors.CourseName?.message}</div>
          )}
        </div>
        <div className="title w-1/4">
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
              <div className="text-red-500">{errors.Year.message}</div>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button type="submit" className="save-button">
            Add course
          </button>
          <button
            type="button"
            onClick={onClose}
            className="discard-button ml-2"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EducationAdd;
