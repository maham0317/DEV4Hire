import React from "react";
import { useForm } from "react-hook-form";
import UserCourseModel from "@/interfaces/user/user-course.model";
import { useUpdateCourseMutation } from "@/services/profilecourse";
import { toast } from "react-toastify";

interface EducationEditProps {
  onClose: () => void;
  selectedItem: UserCourseModel; // Pass selected item as props
}

const EducationEdit: React.FC<EducationEditProps> = ({
  onClose,
  selectedItem,
}) => {
  const [updateCourse, { isLoading, isSuccess, error, isError }] =
    useUpdateCourseMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UserCourseModel>({ defaultValues: selectedItem }); // Set default values for form fields

  const onSubmit = async (data: UserCourseModel) => {
    try {
      await updateCourse(data).unwrap();
      toast.success("Course updated successfully");
      reset();
      onClose(); // Close the edit modal after successful update
    } catch (e: any) {
      toast.error("There is some error");
    }
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit education entry</h2>
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
          <button
            type="submit"
            onClick={handleSubmit(onSubmit)}
            className="save-button"
          >
            Update course
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

export default EducationEdit;
