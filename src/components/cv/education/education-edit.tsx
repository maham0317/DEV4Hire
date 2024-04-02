import React from "react";
import { useForm } from "react-hook-form";
import UserSchoolModel from "@/interfaces/user/user-school.model";

interface EducationEditProps {
  onClose: () => void;
}

const EducationEdit: React.FC<EducationEditProps> = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserSchoolModel>();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    onClose();
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit education entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <label className="label-text">
            School
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. Harvard University"
            {...register("SchoolName", { required: "School is required" })}
          />
          {errors.SchoolName && (
            <div className="text-red-500">{errors.SchoolName?.message}</div>
          )}
        </div>

        <div className="title">
          <label className="label-text">
            Degree (optional)
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. B.S.c"
            {...register("Degree")}
          />
        </div>

        <div className="title">
          <label className="label-text">
            Field of study
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. Information technology"
            {...register("FieldOfStudy", {
              required: "Field of study is required",
            })}
          />
          {errors.FieldOfStudy && (
            <div className="text-red-500">{errors.FieldOfStudy?.message}</div>
          )}
        </div>

        <div className="title">
          <label className="label-text">
            Grade (optional)
          </label>
          <input
            type="text"
            className="input-text"
            {...register("Grade")}
          />
        </div>

        <div className="title w-1/4">
          <label className="label-text">
            Year of graduation/completion
          </label>
          <div className="flex items-center">
            <span className="text-sm mt-1 mr-2">
              <i className="far fa-calendar"></i>
            </span>
            <input
              type="text"
              className="input-text"
              placeholder="MM/YYYY"
              {...register("Year", {
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/(20)\d{2}$/,
                  message: "Invalid MM/YYYY format",
                },
              })}
            />
            {errors.Year && (
              <div className="text-red-500">{errors.Year.message}</div>
            )}
          </div>
        </div>

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="save-button"
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

export default EducationEdit;
