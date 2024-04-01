import React from "react";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { ApplicationAndBusinessFocusModel } from "../../../interfaces/application-and-business-focus/application-and-business-focus.model";

interface ApplicationAddProps {
  onClose: () => void;
}

const ApplicationAdd: React.FC<ApplicationAddProps> = ({ onClose }) => {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplicationAndBusinessFocusModel>();

  const onSubmit = (data: any) => {
    console.log("Form data:", data);
    onClose();
  };

  return (
    <div className="bg-white p-10 rounded shadow">
      <h2 className="text-2xl font-bold">Add entry</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="title">
          <label className="label-text">
            Application or business focus
          </label>
          <input
            type="text"
            className="input-text"
            placeholder="e.g. Development, JavaScript"
            {...register("ApplicationOrBusiness", { required: true })}
          />
          {errors.ApplicationOrBusiness && (
            <div className="text-red-500">ApplicationOrBusiness is required</div>
          )}
        </div>

        <hr className="hr-tag" />

        <div className="flex justify-end mt-5">
          <button
            type="submit"
            className="save-button "
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

export default ApplicationAdd;
