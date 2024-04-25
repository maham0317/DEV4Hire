import React, { useState } from "react";
import { useForm } from "react-hook-form";
import UserCourseModel from "@/interfaces/user/user-course.model";
import { useCreateEducaionCertificateMutation } from "@/services/education-certificate";
import { toast } from "react-toastify";
import { useEducaionCertificate } from "./education-certificate-list-hook";
import EducationEdit from "./education-certificate-edit";

const EducationAdd: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const {
    handleDelete,
    filteredItems,
    callApiAsync,
    toggleUpdateModal,
    data: courseData,
  } = useEducaionCertificate();
  const [createEducaionCertificate, { isLoading }] =
    useCreateEducaionCertificateMutation();
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<UserCourseModel | null>(
    null
  );

  const {
    reset,
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<UserCourseModel>();

  const onSubmit = async (data: UserCourseModel) => {
    try {
      await createEducaionCertificate(data);
      toast.success("EducaionCertificate Saved successfully");
      reset();
      callApiAsync();
    } catch (e) {
      console.error("Error:", e.message);
      toast.error("There is some error");
    }
  };

  const handleEditClick = (item: UserCourseModel) => {
    setIsEditFormOpen(true);
    setSelectedItem(item);
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Add education entry</h2>
      {isEditFormOpen ? (
        <EducationEdit
          selectedItem={selectedItem}
          onClose={() => setIsEditFormOpen(false)}
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col mt-4"></div>
          <div className="title">
            <label className="label-text">Course name</label>
            <input
              type="text"
              className="input-text"
              placeholder="e.g. Data Science - Coursera"
              {...register("CourseName", {
                required: "Course name is required",
              })}
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
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Course Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems?.map((item: UserCourseModel, index: number) => (
                  <tr
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    key={index}
                  >
                    <td className="px-6 py-4">{item.CourseName}</td>
                    <td className="px-6 py-4">{item.Year}</td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={(e: any) => {
                        e.preventDefault();
                        handleDelete(item.Id);
                      }}
                    >
                      Delete
                    </td>
                    <td
                      className="px-6 py-4 cursor-pointer"
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              Discard changes
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default EducationAdd;
