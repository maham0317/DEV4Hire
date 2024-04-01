import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import UserCourseModel from "../../../interfaces/user/user-course.model";

interface EducationAddProps {
  onClose: () => void;
}

const EducationAdd: React.FC<EducationAddProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserCourseModel>();

  // const [selectedEducationType, setSelectedEducationType] = useState<string>('');

  const onSubmit = (data: any) => {
    console.log("Form values:", data);
    onClose();
  };

  // const handleEducationTypeChange = (educationType: string) => {
  //   setSelectedEducationType(educationType);
  //   console.log('Selected Education Type:', educationType);
  // };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Add education entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col mt-4">{/* Radio inputs */}</div>
        <div className="title">
          <label className="label-text">
            Course name
          </label>
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
          <label className="label-text">
            Year
          </label>
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
          <button
            type="submit"
            className="save-button"
          >
            Add course
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

export default EducationAdd;
