import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { ApplicationAndBusinessFocusModel } from "@/interfaces/application-and-business-focus/application-and-business-focus.model";
import { useUpdateProfileApplicationAndBusinessFocusMutation } from "@/services/application-and-business-focus";
import { toast } from "react-toastify";

interface ApplicationEditProps {
  onClose: () => void;
  initialValues: {
    applicationName: string;
  };
}

const ApplicationEdit: React.FC<ApplicationEditProps> = ({
  onClose,
  initialValues,
}) => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplicationAndBusinessFocusModel>();
  const [updateApplication, { isLoading, isSuccess, isError, error }] =
    useUpdateProfileApplicationAndBusinessFocusMutation();

  const onSubmit = async (data: ApplicationAndBusinessFocusModel) => {
    try {
      await updateApplication(data);
      toast.success("Application update successfully.");
      reset();
    } catch (error) {
      toast.error("There is some error.");
    }
    onClose();
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Edit entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <label className="label-text">Application or business focus</label>
          <input
            type="text"
            className="input-text"
            {...register("ApplicationOrBusiness", { required: true })}
          />
          {errors.ApplicationOrBusiness && (
            <div className="text-red-500">
              ApplicationOrBusiness is required
            </div>
          )}
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
    </div>
  );
};

export default ApplicationEdit;
