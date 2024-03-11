import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import Educaion from "../../../interfaces/education/education";

interface EducationAddProps {
  onClose: () => void;
}

const EducationAdd: React.FC<EducationAddProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Educaion>();

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
        <div className="flex flex-col space-y-2 mt-4">
          <label className="block text-sm font-medium text-gray-400">
            Course name
          </label>
          <input
            type="text"
            className="border rounded-md p-2"
            placeholder="e.g. Data Science - Coursera"
            {...register("courseName", { required: "Course name is required" })}
          />
          {errors.courseName && (
            <div className="text-red-500">{errors.courseName?.message}</div>
          )}
        </div>
        <div className="flex flex-col space-y-2 mt-4 w-1/4">
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
              {...register("date", { required: "Year is required" })}
            />
            {errors.date && (
              <div className="text-red-500">{errors.date.message}</div>
            )}
          </div>
        </div>
        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded"
          >
            Add course
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

export default EducationAdd;
