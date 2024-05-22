import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { ApplicationAndBusinessFocusModel } from "@/interfaces/application-and-business-focus/application-and-business-focus.model";
import { useApplicationAndBusinessFocus } from "./application-list-hook";
import { useCreateProfileApplicationAndBusinessFocusMutation } from "@/services/application-and-business-focus";
import { toast } from "react-toastify";
import ApplicationEdit from "./application-edit";

interface ApplicationAddProps {
  onClose: () => void;
}

const ApplicationAdd: React.FC<ApplicationAddProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [selectedItem, setSelectedItem] =
    useState<ApplicationAndBusinessFocusModel | null>(null);
  const {
    handleDelete,
    filteredItems,
    callApiAsync,
    toggleUpdateModal,
    data: courseData,
  } = useApplicationAndBusinessFocus();
  const [
    createApplicationAndBusinessFocus,
    { isLoading, isSuccess, error, isError, data },
  ] = useCreateProfileApplicationAndBusinessFocusMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationAndBusinessFocusModel>();

  const onSubmit = async (data: ApplicationAndBusinessFocusModel) => {
    try {
      await createApplicationAndBusinessFocus(data).unwrap();
      toast.success("Application Saved successfully");
      reset();
      callApiAsync();
    } catch (e) {
      console.error("Error:", e.message);
      toast.error("There is some error");
    }
  };
  const handleEditClick = (item: ApplicationAndBusinessFocusModel) => {
    setIsEditFormOpen(true);
    setSelectedItem(item);
  };
  return (
    <div className="bg-white mt-5 p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Add entry</h2>
      {isEditFormOpen ? (
        <ApplicationEdit
          selectedItem={selectedItem}
          onClose={() => setIsEditFormOpen(false)}
        />
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="title">
            <label className="label-text">Application or business focus</label>
            <input
              type="text"
              className="input-text"
              placeholder="e.g. Development, JavaScript"
              {...register("ApplicationOrBusiness", { required: true })}
            />
            {errors.ApplicationOrBusiness && (
              <div className="text-red-500">
                ApplicationOrBusiness is required
              </div>
            )}
          </div>
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Application or Business Focus
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredItems?.map(
                  (item: ApplicationAndBusinessFocusModel, index: number) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <td className="px-6 py-4">
                        {item.ApplicationOrBusiness}
                      </td>
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
                  )
                )}
              </tbody>
            </table>
          </div>
          <hr className="hr-tag" />
          <div className="flex justify-end mt-5">
            <button type="submit" className="save-button ">
              Save changes
            </button>
            <a href="#" onClick={onClose} className="discard-button ml-2">
              Discard changes
            </a>
          </div>
        </form>
      )}
    </div>
  );
};

export default ApplicationAdd;
